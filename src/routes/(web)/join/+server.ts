import { Member } from '$lib/models/member'
import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request }) => {
  try {
    const member = await Member.create(await request.json())
    await member?.sendLoginMail()
    return new Response()
  } catch (e) {
    console.error(e)
    throw error(400, e instanceof Error ? e.message : 'unknown error')
  }
}
