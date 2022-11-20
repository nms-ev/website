import { browser } from '$app/environment'
import randomColor from 'randomcolor'
import { writable } from 'svelte/store'

type Color = [number, number, number]

export function colorToString(color: Color, luminosity = 0.92): string {
  const tmp = (100 - color[2]) * luminosity
  return `hsl(${color[0]}, ${color[1]}%, ${color[2] + tmp}%)`
}

export function rand(): Color {
  const seed = (Date.now() / 1000 / 5) | 0 // Change every 5 seconds
  return randomColor({ format: 'hslArray', luminosity: 'bright', seed }) as any
}

export function setColor(color: Color) {
  if (browser) {
    window.document.querySelector<HTMLElement>(':root')?.style.setProperty('--bg-color', colorToString(color))
  }
}

export const store = writable<Color>(rand())

store.subscribe((color) => setColor(color))
