import { SDK } from '$lib/graphql'
import { Member } from '$lib/models/member'
import { Mollie, type PaymentMetadata } from '$lib/mollie'
import { DJS, format } from '$lib/time'
import { PaymentStatus } from '@mollie/api-client'
import { error, type RequestHandler } from '@sveltejs/kit'

export const POST: RequestHandler = async ({ request }) => {
  const form = await request.formData()
  const id = form.get('id')
  if (!id || typeof id !== 'string') throw error(400, 'id is missing or not a string')

  const payment = await Mollie.payments.get(id)
  console.debug('mollie', payment)
  if (!payment.customerId) throw error(422, 'payment.customerId is missing')

  const member = await Member.getByMollieId(payment.customerId)
  if (!member) {
    console.error(`member with mollie_customer_id ${payment.customerId} not found`)
    throw error(422, 'member not found')
  }

  switch (payment.status) {
    case PaymentStatus.paid:
      const metadata: PaymentMetadata = payment.metadata
      const validUntil =
        'until' in metadata ? metadata.until : DJS().add(parseInt(metadata.extends), 'days').format(format)
      await SDK.UpdateMember({ id: member.data.id, data: { membership: validUntil } })
      break
  }

  return new Response()
}
