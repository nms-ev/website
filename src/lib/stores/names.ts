import { SDK } from '$lib/sdk'
import { get, writable } from 'svelte/store'

export const names = writable<string[] | null>(null)

export const randomName = writable<string | null>(null)

function setRandom() {
  const list = get(names)
  if (list) randomName.set(list[Math.floor(Math.random() * list.length)])
}

export async function init() {
  const response = await SDK.items('names').readByQuery()
  if (response.data) {
    names.set(response.data.map((n) => n.name))
    setRandom()
    setInterval(setRandom, 3000)
  }
}
