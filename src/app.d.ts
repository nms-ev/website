import type { Member } from '$lib/models/member'
import '@total-typescript/ts-reset'

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      member: Member | null
      languages: string[]
      language: string
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {}
