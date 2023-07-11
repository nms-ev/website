import { env } from '$env/dynamic/private'
import { createMollieClient } from '@mollie/api-client'

export const Mollie = createMollieClient({ apiKey: env.MOLLIE_API_KEY || 'sample key' })

// A payment can either extend, or set the membership until a certain date
export type PaymentMetadata = {} & (
  | {
      // The date the membership is valid until YYYY-MM-DD
      until: string
    }
  | {
      // How many days to extend the membership
      extends: string
    }
)
