import { API } from '$lib/api'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async function () {
  const { data } = await API.items('pages').readMany({
    fields: '*.*',
    filter: { status: 'published' },
    sort: ['sort'],
  })
  return { body: data as any }
}
