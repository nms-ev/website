import type { Name } from '$lib/api'
import { get, writable } from 'svelte/store'

export const names = writable<string[] | null>(null)

export const randomName = writable<string | null>(null)

function setRandom() {
  const list = get(names)
  if (list) randomName.set(list[Math.floor(Math.random() * list.length)])
}

export async function init() {
  const data: Name[] = await fetch('/names.json').then((r) => r.json())
  names.set(data.map(({ name }) => name))
  setRandom()
  setInterval(setRandom, 3000)
}
