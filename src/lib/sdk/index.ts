import { env } from '$env/dynamic/public'
import { Directus } from '@directus/sdk'
import type { CustomDirectusTypes } from './types'

const Endpoint = env.PUBLIC_API_URL!
export const SDK = new Directus<CustomDirectusTypes>(Endpoint)
