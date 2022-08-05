import { API, type Page } from '$lib/api'
import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async function () {
  const { data } = await API.many<Page>('pages', {
    fields: '*.*',
    filter: { status: 'published' },
    sort: ['sort'],
  })
  // const { data } = await API.items('pages').readByQuery({
  //   fields: '*.*',
  //   filter: { status: 'published' },
  //   sort: ['sort'],
  // })
  return { body: data as any }
}
