import { API } from '$lib/api'
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = async function ({ params }) {
  try {
    const { data } = await API.items('pages').readMany({
      fields: '*.*',
      filter: { slug: params.slug, status: 'published' },
      limit: 1,
    })
    if (!data || !data.length) throw new Error('Page not found')
    return { body: data[0] as any }
  } catch {
    return { status: 404, body: null }
  }
}
