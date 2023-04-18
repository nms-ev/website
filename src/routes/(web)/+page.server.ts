import { SDK } from '$lib/graphql'
import { getLocalisedItems } from '$lib/locale'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
  const { events } = await SDK.UpcomingEventSince({ date: new Date().toISOString() })
  const event = events[0]
  if (!event) return { upcoming: null }

  const t = getLocalisedItems(event.translations?.filter(Boolean) ?? [], locals.language)
  return { upcoming: { event, t } }
}
