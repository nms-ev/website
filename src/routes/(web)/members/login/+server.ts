import { LoginToken } from '$lib/jwt'
import { Member } from '$lib/models/member'
import { error, redirect } from '@sveltejs/kit'
import { z } from 'zod'
import type { RequestHandler } from './$types'

// Exchange token for session
export const GET: RequestHandler = async ({ url, cookies }) => {
  // Check token
  const token = url.searchParams.get('token')
  if (!token) throw error(400)
  const payload = await LoginToken.verify(token)

  // Retrieve user
  const member = await Member.getByMail(payload.email)
  if (!member) throw error(400)

  // Create and set session
  const session = await member.createSession()
  cookies.set('session', session, { httpOnly: true, secure: true, sameSite: 'lax', path: '/' })
  throw redirect(303, '/members')
}

// Send login token to email
export const POST: RequestHandler = async ({ request }) => {
  try {
    const { email } = z.object({ email: z.string().email() }).parse(await request.json())
    const member = await Member.getByMail(email)
    if (!member) throw error(400)
    await member.sendLoginMail()
    return new Response()
  } catch {
    // Delay response to prevent email enumeration
    await new Promise((resolve) => setTimeout(resolve, 5_000))
    return new Response()
  }
}
