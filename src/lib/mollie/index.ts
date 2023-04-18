import { env } from '$env/dynamic/private'
import { createMollieClient } from '@mollie/api-client'

export const Mollie = createMollieClient({ apiKey: env.MOLLIE_API_KEY })

// A payment can either extend, or set the membership until a certain date
export type PaymentMetadata = {
  // Whether it is a new membership setup and requires a subscription
  setup: boolean
} & (
  | {
      // The date the membership is valid until YYYY-MM-DD
      until: string
    }
  | {
      // How many days to extend the membership
      extends: string
    }
)
