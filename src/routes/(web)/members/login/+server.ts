import { SDK } from '$lib/graphql'
import { LoginToken, SessionToken } from '$lib/jwt'
import { sendLoginMail } from '$lib/mail'
import { MemberStatus } from '$lib/validators/member'
import { error, redirect } from '@sveltejs/kit'
import { z } from 'zod'
import type { RequestHandler } from './$types'

// Exchange token for session
export const GET: RequestHandler = async ({ url, cookies }) => {
  const token = url.searchParams.get('token')
  if (!token) throw error(400)
  const payload = await LoginToken.verify(token)

  // Retrieve user
  const { members } = await SDK.GetMemberByEmail({ email: payload.email })
  const member = members[0]
  if (!member) throw error(400)

  // If created, set status to confirmed
  if (member.status === MemberStatus.Created) {
    await SDK.UpdateMember({ id: member.id, data: { status: MemberStatus.Confirmed } })
  }

  // Create session
  const session = await SessionToken.create(member)
  cookies.set('session', session, { httpOnly: true, secure: true, sameSite: 'lax', path: '/' })
  throw redirect(303, '/members')
}

// Send login token to email
export const POST: RequestHandler = async ({ request }) => {
  try {
    const { email } = z.object({ email: z.string().email() }).parse(await request.json())
    const { members } = await SDK.GetMemberByEmail({ email })
    const member = members[0]
    if (!member) throw new Error()
    const token = await LoginToken.create({ email })
    const href = `${new URL(request.url).origin}/members/login?token=${token}`
    await sendLoginMail(email, { name: member.name, href })
    return new Response()
  } catch {
    // Delay response to prevent email enumeration
    await new Promise((resolve) => setTimeout(resolve, 5_000))
    return new Response()
  }
}
