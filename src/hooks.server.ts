import { Config } from '$lib/config'
import { init } from '$lib/cron'
import { SessionToken } from '$lib/jwt'
import { fallbackLocale } from '$lib/locale'
import { Member } from '$lib/models/member'
import type { Handle } from '@sveltejs/kit'
import { locale } from 'svelte-i18n'

init()

export const handle: Handle = async ({ event, resolve }) => {
  // If no origin is set in config, take the one of the request
  if (!Config.origin) Config.origin = event.url.origin

  // Language
  const languages = event.request.headers
    .get('accept-language')
    ?.split(',')
    .map((l) => l.trim().split(';')[0])
    .filter((l) => l.length > 0)
  if (languages) {
    event.locals.language = languages[0]
    event.locals.languages = languages
  } else {
    event.locals.language = fallbackLocale
    event.locals.languages = []
  }
  locale.set(event.locals.language)

  // Check if the user is logged in
  try {
    const sessionCookie = event.cookies.get('session')
    if (!sessionCookie) throw new Error('No session cookie')
    const { id } = await SessionToken.verify(sessionCookie)
    event.locals.member = await Member.getById(id)
  } catch {
    event.locals.member = null
  }

  return resolve(event)
}
