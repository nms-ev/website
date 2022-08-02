import { API } from '$lib/api'
import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async function () {
  const { data } = await API.items('names').readByQuery({
    filter: { status: 'published' },
  })
  return { body: data as any }
}
