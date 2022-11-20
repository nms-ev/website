import '$lib/locale'
import '$lib/stores/bgColor'
import { init as initNames } from '$lib/stores/names'
import { waitLocale } from 'svelte-i18n'
import '../app.css'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async () => {
  await initNames()
  await waitLocale()
}
