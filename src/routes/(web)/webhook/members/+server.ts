import { Config } from '$lib/config'
import { SDK } from '$lib/graphql'
import { LoginToken } from '$lib/jwt'
import { sendLoginMail } from '$lib/mail'
import { Member } from '$lib/models/member'
import { MemberStatus, MemberType } from '$lib/validators/member'
import { error, type RequestHandler } from '@sveltejs/kit'
import { z } from 'zod'

export const POST: RequestHandler = async ({ request }) => {
  try {
    const validator = z.object({
      keys: z.array(z.string()),
      payload: z.object({ status: z.nativeEnum(MemberStatus) }),
      collection: z.enum(['members']),
      event: z.enum(['members.items.update']),
    })
    const raw = await request.json()
    console.debug(raw)
    const body = validator.parse(raw)

    // Get the latest information, we don't trust passed data, only using it as trigger
    for (const member of await Member.getByIds(body.keys)) {
      // Check if status was changed
      if (body.payload.status) {
        switch (member.data.status) {
          case MemberStatus.Confirmed:
            if (member.data.type === MemberType.Sponsor) {
              // Sponsors are approved automatically
              await SDK.UpdateMember({ id: member.data.id, data: { status: MemberStatus.Approved } })
            } else {
              // TODO: Notify NMS
            }
            break
          case MemberStatus.Approved:
            const href = `${Config.origin}/members/login?token=${await LoginToken.create({
              email: member.data.email,
            })}`
            // TODO: Filter hook
            // await sendLoginMail(member.data.email, { name: member.data.name, href })
            break
        }
      }
    }
    return new Response()
  } catch (e) {
    console.error(e)
    throw error(400)
  }
}
