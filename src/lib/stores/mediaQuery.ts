import type { Readable } from 'svelte/store'
import { readable } from 'svelte/store'

export function createMediaQueryStore(query: string): Readable<boolean> {
  return readable<boolean>(false, (set) => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia(query)
    set(mq.matches)
    const fn = (e: MediaQueryListEvent) => set(e.matches)
    mq.addEventListener('change', fn, false)
    return () => mq.removeEventListener('change', fn)
  })
}
