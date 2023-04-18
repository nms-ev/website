import { SDK } from '$lib/graphql'
import { getLocalisedItems } from '$lib/locale'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params, locals }) => {
  const { pages } = await SDK.Page({ slug: params.slug })
  const page = pages[0]
  if (!page) throw error(404)

  const t = getLocalisedItems(page.translations?.filter(Boolean) ?? [], locals.language)
  return { page, t }
}
