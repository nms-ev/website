import { SDK } from '$lib/graphql'
import { SessionToken } from '$lib/jwt'
import { Mollie, type PaymentMetadata } from '$lib/mollie'
import { DJS, format } from '$lib/time'
import { SequenceType } from '@mollie/api-client'
import { error, json, type RequestHandler } from '@sveltejs/kit'

export const POST: RequestHandler = async ({ request, cookies }) => {
  const session = await SessionToken.verify(cookies.get('session') ?? '')
  const { members_by_id: member } = await SDK.GetMember({ id: session.id })
  if (!member || !member.address || typeof member.address !== 'object') throw error(401)
  console.debug('setup Mollie for member', member.id)

  if (!member.contribution) throw error(400, 'No contribution set')

  let customerId = member.mollie_customer_id
  // Setup customer if not already done
  if (customerId) {
    console.debug('creating customer account')
    const customer = await Mollie.customers.create({ email: member.email, name: member.name })
    await SDK.UpdateMember({ id: member.id, data: { mollie_customer_id: customer.id } })
    customerId = customer.id
  }

  if (!customerId) throw error(500, 'customerId is missing')

  // Create first payment
  console.debug('creating first payment')
  const metadata: PaymentMetadata = { until: DJS().endOf('year').format(format), setup: true }
  const payment = await Mollie.payments.create({
    customerId,
    amount: { value: member.contribution.toString(), currency: 'EUR' },
    description: 'NMS Membership',
    sequenceType: SequenceType.first,
    redirectUrl: `${new URL(request.url).origin}/members`,
    webhookUrl: `${new URL(request.url).origin}/webhook/mollie`,
    billingAddress: {
      streetAndNumber: member.address.street,
      postalCode: member.address.zip,
      city: member.address.city,
      country: member.address.country,
    },
    metadata,
  })

  const url = payment.getCheckoutUrl()
  if (!url) throw error(500)
  return json({ url })
}
