import { SDK } from '$lib/graphql'
import { LoginToken } from '$lib/jwt'
import { sendLoginMail } from '$lib/mail'
import { MemberStatus, MemberType } from '$lib/validators/member'
import { error, type RequestHandler } from '@sveltejs/kit'
import { z } from 'zod'

export const POST: RequestHandler = async ({ request }) => {
  try {
    const validator = z.object({
      keys: z.array(z.string()),
      payload: z.object({ status: z.nativeEnum(MemberStatus) }),
    })

    const body = validator.parse(await request.json())
    const { members } = await SDK.GetMembersByIDs({ ids: body.keys })
    for (const member of members) {
      // Check if status was changed
      if (body.payload.status) {
        switch (member.status) {
          case MemberStatus.Confirmed:
            if (member.type === MemberType.Sponsor) {
              // Sponsors are approved automatically
              await SDK.UpdateMember({ id: member.id, data: { status: MemberStatus.Approved } })
            } else {
              // TODO: Notify NMS
            }
            break
          case MemberStatus.Approved:
            const href = `${new URL(request.url).origin}/members/login?token=${await LoginToken.create({
              email: member.email,
            })}`
            await sendLoginMail(member.email, { name: member.name, href })
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
