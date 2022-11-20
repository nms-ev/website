import { browser } from '$app/environment'
import type { Languages } from '$lib/sdk/types'
import { DJS } from '$lib/time'
import { addMessages, date, getLocaleFromNavigator, init } from 'svelte-i18n'
import { derived } from 'svelte/store'

import de from './locales/de.json'
import en from './locales/en.json'

export type LocalizedItem = {
  languages_id?: string | Languages
}

const fallbackLocale = 'de'

init({
  fallbackLocale,
  initialLocale: browser ? getLocaleFromNavigator() : fallbackLocale,
})

addMessages('en', en)
addMessages('de', de)

export const formatDate = derived(date, (date) => (d: string) => date(DJS(d).toDate(), { dateStyle: 'medium' }))
export const formatTime = (time: string) => time.slice(0, 5)

type GetLocalisationKeysReturn<T extends LocalizedItem> = Record<keyof Omit<T, 'languages_id'>, string>

/**
 * Takes a localised field and registers all the content into the i18n library so the content can be used as regular localization keys.
 *
 * @param prefix A unique prefix for the resource
 * @param translations
 * @returns The keys for the translation content as an object
 */
export function getLocalisationKeys<T extends LocalizedItem>(
  prefix: string,
  translations: T[]
): GetLocalisationKeysReturn<T> {
  const keys = {} as GetLocalisationKeysReturn<T>
  for (const { languages_id, ...rest } of translations) {
    for (const [item, value] of Object.entries(rest)) {
      if (languages_id) {
        const key = `dynamic.${prefix}.${item}`
        // @ts-ignore
        keys[item] = key
        const code = typeof languages_id === 'string' ? languages_id : languages_id.code
        addMessages(code.split('-')[0], { [key]: value as string })
      }
    }
  }
  return keys
}
