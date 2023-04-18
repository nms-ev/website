import { SDK } from '$lib/graphql'
import { getLocalisedItems } from '$lib/locale'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
  const { events } = await SDK.Events()

  const translated = events.map((event) => {
    const t = getLocalisedItems(event.translations?.filter(Boolean) ?? [], locals.language)
    return { event, t }
  })

  return {
    events: translated,
  }
}
