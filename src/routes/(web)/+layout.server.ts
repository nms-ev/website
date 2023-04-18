import { SDK } from '$lib/graphql'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async () => {
  const { names } = await SDK.Names()
  return {
    names,
  }
}
