import { error, json, type RequestHandler } from '@sveltejs/kit'

export const POST: RequestHandler = async ({ locals }) => {
  if (!locals.member) throw error(401)
  const redirect = await locals.member.firstPayment()
  if (!redirect) throw error(500)
  return json({ url: redirect })
}
