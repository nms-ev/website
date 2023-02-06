import { env } from '$env/dynamic/public'
import { Directus } from '@directus/sdk'
import type { CustomDirectusTypes } from './types'

// To generate types: go here
// https://api.nms-ev.org/admin/generate-types/ts

const Endpoint = env.PUBLIC_API_URL!
export const SDK = new Directus<CustomDirectusTypes>(Endpoint)
