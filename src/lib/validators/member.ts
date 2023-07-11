import { isValidBirthday } from '$lib/time'
import { z } from 'zod'
import { address } from './address'
import { nonEmptyString } from './common'

export enum MemberType {
  Regular = 'regular',
  Sponsor = 'sponsor',
}

export enum MemberStatus {
  Created = 'created',
  Confirmed = 'confirmed',
  Approved = 'approved',
}

export const member = z.object({
  name: nonEmptyString,
  email: z.string().email(),
  birthday: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .refine((v) => isValidBirthday(v), { message: 'Invalid birthday' }),
  address: address,
  type: z.nativeEnum(MemberType),
  contribution: z.number().min(0),
  renew: z.boolean(),
})
export type Member = z.infer<typeof member>

export const memberCreate = member.omit({ renew: true })
export type MemberCreate = z.infer<typeof memberCreate>

export const memberUpdate = member.omit({ type: true }).partial()
export type MemberUpdate = z.infer<typeof memberUpdate>
