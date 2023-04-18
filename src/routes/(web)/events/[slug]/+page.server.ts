import { SDK } from '$lib/graphql'
import { getLocalisedItems } from '$lib/locale'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params, locals }) => {
  const { events } = await SDK.Event({ slug: params.slug })

  const event = events[0]
  if (!event) throw error(404)

  const filtered = event.translations?.filter(Boolean) ?? []
  const t = getLocalisedItems(filtered, locals.language)

  return {
    event,
    t,
  }
}
