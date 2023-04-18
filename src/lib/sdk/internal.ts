import { env } from '$env/dynamic/public'
import { env as priv } from '$env/dynamic/private'
import { Directus } from '@directus/sdk'
import type { CustomDirectusTypes } from './types'

export const API = new Directus<CustomDirectusTypes>(env.PUBLIC_API_URL, { auth: { staticToken: priv.API_TOKEN } })
