import { memberUpdate } from '$lib/validators/member'
import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

// Send login token to email
export const POST: RequestHandler = async ({ locals, request }) => {
  if (!locals.member) throw error(401)
  const body = memberUpdate.parse(await request.json())
  console.debug(body)
  locals.member.update(body)
  return new Response()
}
