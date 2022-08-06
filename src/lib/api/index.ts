import { VITE_API_URL } from '$env/static/private'
import type { DeepQueryMany, ID, ManyItems, OneItem, QueryMany, QueryOne } from '@directus/sdk'

export type Event = {
  id: ID
  status: string
  slug: string
  date_created: string
  date_updated: string
  date: string
  time: null | string
  type: string
  location: string
  translations: {
    languages_id: string
    title: string
    body: string
  }[]
}
export type Page = {
  id: ID
  status: string
  sort: number
  date_created: string
  date_updated: string
  slug: string
  translations: {
    languages_id: string
    title: string
    body: string
  }[]
}
export type Language = {
  code: string
  name: string
}

export type Name = {
  status: string
  name: string
}

export type TAPI = {
  events: Event
  pages: Page
  languages: Language
  names: Name
}

if (!VITE_API_URL) throw new Error('VITE_API_URL is not set')
// Wait for https://github.com/directus/sdk/issues/29
// export const API = new Directus<TAPI>(VITE_API_URL)

async function call<T>(url: string): Promise<T> {
  console.debug('URL', url)
  return fetch(`${VITE_API_URL}${url}`).then((res) => res.json())
}

type Query<T> = QueryMany<T> | QueryOne<T> | DeepQueryMany<T>
function optionsToParams<T>(options: Query<T>): string {
  const params = []
  for (const [key, value] of Object.entries(options)) {
    const v = Array.isArray(value) ? value.join(',') : typeof value === 'object' ? JSON.stringify(value) : value
    params.push(`${key}=${v}`)
  }
  return params.join('&').toString()
}

export const API = {
  many<T>(items: string, options: QueryMany<T> = {}): Promise<ManyItems<T>> {
    const param = optionsToParams(options)
    return call(`/items/${items}?${param.toString()}`)
  },
  one<T>(items: string, id: string, options: QueryOne<T> = {}): Promise<OneItem<T>> {
    const param = optionsToParams(options)
    return call(`/items/${items}/${id}?${param.toString()}`)
  },
}
