import { Config } from '$lib/config'
import { SDK } from '$lib/graphql'
import type { MemberFragment } from '$lib/graphql/gen'
import { LoginToken, SessionToken } from '$lib/jwt'
import { sendLoginMail } from '$lib/mail'
import { Mollie, type PaymentMetadata } from '$lib/mollie'
import { DJS, format } from '$lib/time'
import { MemberStatus, MemberType, memberCreate, memberUpdate, type MemberUpdate } from '$lib/validators/member'
import { MandateStatus, SequenceType, type Customer } from '@mollie/api-client'
import { error } from '@sveltejs/kit'

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> }

export class Member {
  constructor(private _data: DeepWriteable<MemberFragment>) {}

  get data(): Readonly<MemberFragment> {
    return this._data
  }

  private async save() {
    const { id, ...data } = this.data
    const updated = await SDK.UpdateMember({ id, data })
    if (updated.update_members_item) this._data = updated.update_members_item
  }

  // AUTH

  async sendLoginMail() {
    const token = await LoginToken.create({ email: this.data.email })
    const href = `${Config.origin}/members/login?token=${token}`
    await sendLoginMail(this.data.email, { name: this.data.name, href })
  }

  async createSession() {
    if (this.data.status === MemberStatus.Created) {
      this._data.status = this.data.type === MemberType.Regular ? MemberStatus.Confirmed : MemberStatus.Approved
      await this.save()
    }
    return await SessionToken.create(this.data)
  }

  // MEMBERSHIP
  get membershipActive() {
    return this.data.membership && DJS(this.data.membership, format).isAfter(DJS())
  }

  get membershipExpired() {
    return this.data.membership && DJS(this.data.membership, format).isBefore(DJS())
  }

  /**
   *
   * @param first wether it's the first payment for the user
   */
  private async makePayment(first: boolean) {
    if (this.membershipActive) return
    if (!first) {
      if (!this.membershipExpired || !this.data.renew) return
    }

    if (this.data.status !== MemberStatus.Approved) throw error(422, 'member must be approved to make payments')

    if (!this.data.contribution) throw error(422, 'no contribution set')
    if (!this.data.address || typeof this.data.address !== 'object') throw error(422, 'no address')

    let customerId = this.data.mollie_customer_id
    let customer: Customer
    // Setup customer if not already done
    if (!customerId) {
      console.info('creating customer account')
      customer = await Mollie.customers.create({ email: this.data.email, name: this.data.name })
      this._data.mollie_customer_id = customer.id
      await this.save()
      customerId = customer.id
    } else {
      customer = await Mollie.customers.get(customerId)
    }

    if (!first) {
      const mandates = await customer.getMandates()
      const hasValidMandate = mandates.some((m) => m.status === MandateStatus.valid)
      if (!hasValidMandate) throw error(422, 'no valid mandate')
    }

    // Create first payment
    const until = DJS().endOf('year')
    const metadata: PaymentMetadata = { until: until.format(format) }
    // Calculate the amount to pay until the end of the year
    const untilEndOfYear = until.diff(DJS(), 'days') / 365
    const amountToPay = (this.data.contribution * untilEndOfYear) | 0

    console.debug('creating payment for customer', metadata, amountToPay, first)
    const payment = await Mollie.payments.create({
      customerId,
      amount: { value: amountToPay.toFixed(2), currency: 'EUR' },
      description: first ? 'NMS membership' : 'NMS membership renewal',
      sequenceType: first ? SequenceType.first : SequenceType.recurring,
      redirectUrl: `${Config.origin}/members`,
      webhookUrl: `${Config.origin}/webhook/mollie`,
      billingAddress: {
        streetAndNumber: this.data.address.street,
        postalCode: this.data.address.zip,
        city: this.data.address.city,
        country: this.data.address.country,
      },
      metadata,
    })

    this._data.renew = true
    await this.save()

    return payment
  }

  /**
   * For the first payment, we need to setup the payment method.
   * We therefore redirect the user to the payment screen.
   */
  async firstPayment() {
    const payment = await this.makePayment(true)
    if (!payment) throw error(422, 'no payment created')
    return payment.getCheckoutUrl()
  }

  /**
   * This does not require user interaction
   * It simply charges another year of membership on behalf of the user.
   */
  async renewMembership() {
    await this.makePayment(false)
  }

  async cancelMembership() {
    if (!this.data.renew) throw error(422, 'membership is already canceled')
    this._data.renew = false
    await this.save()
  }

  // CRUD

  async update(body: MemberUpdate) {
    const parsed = memberUpdate.parse(body)
    for (const [key, value] of Object.entries(parsed)) {
      // @ts-ignore
      if (value !== undefined) this._data[key] = value
    }
    await this.save()
  }

  static async create(body: unknown) {
    const data = memberCreate.parse(body)
    const toLow = error(422, 'contribution too low')
    switch (data.type) {
      case MemberType.Regular:
        if (data.type === MemberType.Regular && data.contribution < 84.0) throw toLow
        break
      case MemberType.Sponsor:
        if (data.contribution < 20.0) throw toLow
        break
      default:
        throw error(400, `invalid member type "${data.type}"`)
    }
    const member = await SDK.CreateMember({ data })
    return member.create_members_item ? new Member(member.create_members_item) : null
  }

  // GETTER

  static async getByMail(email: string) {
    const { members } = await SDK.GetMemberByEmail({ email })
    const member = members[0]
    return member ? new Member(member) : null
  }

  static async getByIds(ids: string[]) {
    const { members } = await SDK.GetMembersByIDs({ ids })
    return members.map((member) => new Member(member))
  }

  static async getById(id: string) {
    const { members_by_id: member } = await SDK.GetMember({ id })
    return member ? new Member(member) : null
  }

  static async getByMollieId(id: string) {
    const { members } = await SDK.GetMemberByMollieCustomerID({ mollie_customer_id: id })
    const member = members[0]
    return member ? new Member(member) : null
  }

  static async getAll() {
    const { members } = await SDK.GetMembers()
    return members.map((member) => new Member(member))
  }
}
