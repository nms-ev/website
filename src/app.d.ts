import '@total-typescript/ts-reset'
import type { MemberFragment } from '$lib/graphql/gen'

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      member: MemberFragment | null
      languages: string[]
      language: string
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {}
