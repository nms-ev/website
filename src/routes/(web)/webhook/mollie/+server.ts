import { SDK } from '$lib/graphql'
import { Mollie, type PaymentMetadata } from '$lib/mollie'
import { DJS, format } from '$lib/time'
import { PaymentStatus } from '@mollie/api-client'
import type { RequestHandler } from '@sveltejs/kit'

export const POST: RequestHandler = async ({ request }) => {
  try {
    const form = await request.formData()
    const id = form.get('id')
    if (!id || typeof id !== 'string') throw new Error('id is missing or not a string')
    const payment = await Mollie.payments.get(id)

    if (!payment.customerId) throw new Error('payment.customerId is missing')
    const { members } = await SDK.GetMemberByMollieCustomerID({ mollie_customer_id: payment.customerId })
    const member = members[0]
    if (!member) throw new Error(`member with mollie_customer_id ${payment.customerId} not found`)

    switch (payment.status) {
      case PaymentStatus.paid:
        const metadata: PaymentMetadata = payment.metadata
        const validUntil =
          'until' in metadata ? metadata.until : DJS().add(parseInt(metadata.extends), 'days').format(format)
        await SDK.UpdateMember({ id: member.id, data: { membership: validUntil } })
        if (metadata.setup) {
          if (!payment.customerId || !member.contribution) {
            console.error('mollie', 'payment.customerId or member.contribution is missing')
            return new Response()
          }
          // Create a subscription
          await Mollie.customers_subscriptions.create({
            customerId: payment.customerId,
            amount: { value: member.contribution.toString(), currency: 'EUR' },
            description: 'NMS Membership',
            interval: '12 months',
            startDate: validUntil,
          })
        }
        break
    }

    console.debug('mollie', payment)
    return new Response()
  } catch (e) {
    console.error(e)
    return new Response()
  }
}
