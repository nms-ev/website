import { SDK } from '$lib/graphql'
import { LoginToken } from '$lib/jwt'
import { sendVerifyMail } from '$lib/mail'
import { MemberType, memberCreate } from '$lib/validators/member'
import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request }) => {
  try {
    const parsed = memberCreate.parse(await request.json())
    await SDK.CreateMember({
      data: {
        ...parsed,
        contribution: parsed.type === MemberType.Regular ? 84.0 : 20.0,
      },
    })
    const token = await LoginToken.create({ email: parsed.email })
    const href = `${new URL(request.url).origin}/members/login?token=${token}`
    await sendVerifyMail(parsed.email, { name: parsed.name, href })
    return new Response()
  } catch (e) {
    console.error(e)
    throw error(400, e instanceof Error ? e.message : 'Unknown error')
  }
}
