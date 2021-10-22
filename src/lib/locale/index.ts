import { init, addMessages, date } from 'svelte-i18n'
import dayjs from 'dayjs'
import { derived } from 'svelte/store'

import en from './locales/en.json'

export type LocalizedItem = {
  languages_id: string
}

init({
  fallbackLocale: 'en-US',
})

addMessages('en-US', en)

export const formatDate = derived(date, (date) => (d: string) => date(dayjs(d).toDate(), { dateStyle: 'medium' }))

export function getLocale<T extends LocalizedItem>(
  translations: T[],
  item: Exclude<keyof T, 'languages_id'>,
  prefix: string
) {
  const key = `${prefix}.${item}`
  for (const translation of translations) {
    const value = translation[item as string] as string
    addMessages(translation.languages_id, { [key]: value })
  }
  return key
}
