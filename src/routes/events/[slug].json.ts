import { API, type Event } from '$lib/api'
import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async function ({ params }) {
  try {
    const { data } = await API.many<Event>('events', {
      fields: '*.*',
      filter: { slug: params.slug, status: 'published' },
      limit: 1,
    })
    // const { data } = await API.items('events').readByQuery({
    //   fields: '*.*',
    //   filter: { slug: params.slug, status: 'published' },
    //   limit: 1,
    // })
    if (!data || !data.length) throw new Error('Event not found')
    return { body: data[0] as any }
  } catch {
    return { status: 404, body: null }
  }
}
