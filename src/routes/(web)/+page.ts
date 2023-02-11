import { getLocalisationKeys } from '$lib/locale'
import { SDK } from '$lib/sdk'
import { error } from '@sveltejs/kit'
import type { PageLoad } from './[slug]/$types'

export const load: PageLoad = async () => {
  const eventsResponse = await SDK.items('events').readByQuery({
    limit: 1,
    filter: { status: 'published', date: { _gt: new Date() } },
    sort: ['date'],
    // @ts-ignore
    fields: '*.*',
  })

  if (!eventsResponse.data) throw error(500)

  const event = eventsResponse.data[0]
  if (!event)
    return {
      upcoming: null,
    }

  if (typeof event.translations === 'string') throw error(500)
  const keys = getLocalisationKeys(event.slug, event.translations)

  return {
    upcoming: { event, keys },
  }
}
