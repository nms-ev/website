import { API } from '$lib/api'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async function () {
  const { data } = await API.items('events').readMany({
    fields: '*.*',
    filter: { status: 'published' },
    sort: ['-date'],
  })
  return { body: data as any }
}
