import { get, writable } from 'svelte/store'

export const names = writable<string[] | null>(null)

export const randomName = writable<string | null>(null)

export function setRandom() {
  const list = get(names)
  if (list) randomName.set(list[Math.floor(Math.random() * list.length)])
}

setInterval(setRandom, 3000)
