import { z } from 'zod'

export const nonEmptyString = z
  .string()
  .transform((s) => s.trim())
  .pipe(z.string().min(1, 'Must not be empty'))
