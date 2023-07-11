import { browser } from '$app/environment'
import { DJS } from '$lib/time'
import type { ConfigType } from 'dayjs'
import { addMessages, date, getLocaleFromNavigator, init } from 'svelte-i18n'
import { derived } from 'svelte/store'

import de from './locales/de.json'
import en from './locales/en.json'

export type LocalizedItem = {
  readonly languages_id?: { code: string } | null
}

export const fallbackLocale = 'de'

init({
  fallbackLocale,
  initialLocale: browser ? getLocaleFromNavigator() : fallbackLocale,
})

addMessages('en', en)
addMessages('de', de)

export const formatDate = derived(date, (date) => (d: ConfigType) => date(DJS(d).toDate(), { dateStyle: 'medium' }))
export const formatTime = (time: string) => time.slice(0, 5)

export function matchLanguage(language: string, languages: string[]): number {
  // To lowercase
  language = language.toLowerCase()
  languages = languages.map((l) => l.toLowerCase())
  // Check if is exact match
  const i = languages.indexOf(language)
  if (i !== -1) return i
  // Check if matches prefix
  const lang_reduced = language.split('-')[0]
  const langs_reduced = languages.map((l) => l.split('-')[0])
  const j = langs_reduced.indexOf(lang_reduced)
  if (j !== -1) return j
  // Check if matches fallback, if not already fallback
  if (language === fallbackLocale) throw new Error('no matching locale found')
  return matchLanguage(fallbackLocale, languages)
}

export function getLocalisedItems<T extends LocalizedItem>(translations: T[], language: string): T {
  const lang = matchLanguage(
    language,
    translations.map((t) => t.languages_id?.code ?? '')
  )
  return translations[lang]
}
