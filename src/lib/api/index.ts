import { Directus } from '@directus/sdk'
import type { ID } from '@directus/sdk'

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

const endpoint = import.meta.env.VITE_API_URL as string
if (!endpoint) throw new Error('VITE_API_URL is not set')
export const API = new Directus<TAPI>(endpoint)
