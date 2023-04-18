import { SDK } from '$lib/graphql'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({}) => {
  const { links } = await SDK.Links()
  return { links }
}
