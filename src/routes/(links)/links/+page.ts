import { SDK } from '$lib/sdk'
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({}) => {
  const response = await SDK.items('links').readByQuery({
    limit: -1,
    filter: { status: 'published' },
    // sort: ['-date'],
    // @ts-ignore
    fields: '*.*',
  })

  if (!response.data) throw error(500)

  return {
    links: response.data,
  }
}
