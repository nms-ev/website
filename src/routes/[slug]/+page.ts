import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

import { getLocalisationKeys } from '$lib/locale'
import { SDK } from '$lib/sdk'

export const load: PageLoad = async ({ params }) => {
  const response = await SDK.items('pages').readByQuery({
    filter: {
      slug: params.slug,
      status: 'published',
    },
    limit: -1,
    // @ts-ignore
    fields: '*.*',
  })

  if (!response.data || !response.data[0]) {
    throw error(404, 'no page found')
  }

  const page = response.data[0]

  if (typeof page.translations === 'string') {
    throw error(500)
  }

  return {
    page,
    keys: getLocalisationKeys(page.slug, page.translations),
  }
}
