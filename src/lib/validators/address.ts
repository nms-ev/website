import { z } from 'zod'
import { nonEmptyString } from './common'

export const address = z.object({
  street: nonEmptyString,
  city: nonEmptyString,
  zip: nonEmptyString,
  country: nonEmptyString,
})
export type Address = z.infer<typeof address>
