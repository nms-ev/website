import { z } from 'zod'
import { address } from './address'
import { nonEmptyString } from './common'
import { DJS, isValidBirthday } from '$lib/time'

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
  id: z.string(),
  name: nonEmptyString,
  email: z.string().email(),
  birthday: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .refine((v) => isValidBirthday(v), { message: 'Invalid birthday' }),
  address: address,
  type: z.nativeEnum(MemberType),
  status: z.nativeEnum(MemberStatus),
  contribution: z.string().regex(/^\d+\.\d{2}$/),
})
export type Member = z.infer<typeof member>

export const memberCreate = member.omit({ status: true, id: true, contribution: true })
export type MemberCreate = z.infer<typeof memberCreate>
