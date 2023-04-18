import { GraphQLClient } from 'graphql-request'
import { getSdk } from './gen' // THIS FILE IS THE GENERATED FILE
import { env as priv } from '$env/dynamic/private'
import { env as pub } from '$env/dynamic/public'

const client = new GraphQLClient(pub.PUBLIC_API_URL + '/graphql', {
  headers: {
    Authorization: `Bearer ${priv.API_TOKEN}`,
  },
})
export const SDK = getSdk(client)
