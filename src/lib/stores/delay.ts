import { writable } from 'svelte/store'

/**
 * A store that triggers a function after a given value has been changed.
 * This is useful for when we update a value often, but only want to react to it after a given cool down time.
 */
export function delayed<T>(value: T, fn: (value: T) => void, delay: number = 100) {
  let timeout: NodeJS.Timeout | null = null
  const store = writable(value)
  store.subscribe((value) => {
    // Clear queue if preset
    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      timeout = null
      fn(value)
    }, delay)
  })
  return store
}
