import { init, getLocaleFromNavigator, addMessages, format } from 'svelte-i18n'
import { derived } from 'svelte/store'

export type LocalizedItem = {
  languages_id: string
}

export function initialize() {}
init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
})

function randomKey(): string {
  const bytes = 8
  if (typeof window === 'undefined') {
    return ''
  } else {
    const random = window.crypto.getRandomValues(new Uint8Array(bytes))
    return [...random].map((x) => x.toString(16).padStart(2, '0')).join('')
  }
}

export function getLocale<T extends LocalizedItem>(translations: T[], item: Exclude<keyof T, 'languages_id'>) {
  const key = randomKey()

  for (const translation of translations) {
    const value = translation[item as string] as string
    addMessages(translation.languages_id, { [key]: value })
  }

  return key
}
