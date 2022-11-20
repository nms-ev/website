import type { PageLoad } from './$types'

import { getLocalisationKeys } from '$lib/locale'
import { SDK } from '$lib/sdk'
import { error } from '@sveltejs/kit'

export const load: PageLoad = async ({ fetch, params }) => {
  const response = await SDK.items('events').readByQuery({
    limit: 1,
    // @ts-ignore
    fields: '*.*',
    filter: { slug: params.slug, status: 'published' },
  })

  if (!response.data) throw error(500)
  const event = response.data[0]
  if (!event) throw error(404)
  if (typeof event.translations === 'string') throw error(500)

  const keys = getLocalisationKeys(params.slug, event.translations)

  return {
    event,
    keys,
  }
}
