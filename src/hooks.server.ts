import { SDK } from '$lib/graphql'
import { SessionToken } from '$lib/jwt'
import { fallbackLocale } from '$lib/locale'
import type { Handle } from '@sveltejs/kit'
import { locale } from 'svelte-i18n'

export const handle: Handle = async ({ event, resolve }) => {
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
    const { members_by_id: member } = await SDK.GetMember({ id })
    if (!member) throw new Error('no member found') // Will be caught below
    event.locals.member = member
  } catch {
    event.locals.member = null
  }

  return resolve(event)
}
