import { browser } from '$app/environment'
import randomColor from 'randomcolor'
import { writable } from 'svelte/store'

type Color = [number, number, number]

export function colorToString(color: Color, luminosity = 0.92): string {
  const tmp = (100 - color[2]) * luminosity
  return `hsl(${color[0]}, ${color[1]}%, ${color[2] + tmp}%)`
}

export function rand(): string {
  const seed = (Date.now() / 1000 / 1) | 0 // Change every second
  const color = randomColor({ format: 'hslArray', luminosity: 'bright', seed }) as any
  return colorToString(color)
}

export function setColor(color: string) {
  if (browser) {
    window.document.querySelector<HTMLElement>(':root')?.style.setProperty('--bg-color', color)
    const meta = window.document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    if (!meta) {
      const meta = window.document.createElement('meta')
      meta.name = 'theme-color'
      meta.content = color
      window.document.head.appendChild(meta)
    } else {
      meta.content = color
    }
  }
}

export const color = writable<string>(rand())

color.subscribe((color) => setColor(color))
