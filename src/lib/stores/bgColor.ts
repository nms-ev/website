import { writable } from 'svelte/store'
import randomColor from 'randomcolor'

type Color = [number, number, number]
export const store = writable<Color>(rand())

export function colorToString(color: Color, luminosity = 0.92): string {
  const tmp = (100 - color[2]) * luminosity
  return `hsl(${color[0]}, ${color[1]}%, ${color[2] + tmp}%)`
}

export function rand(): Color {
  return randomColor({ format: 'hslArray', luminosity: 'bright' }) as any
}

store.subscribe((color) => {
  if (typeof window !== 'undefined') {
    window.document.querySelector<HTMLElement>(':root')?.style.setProperty('--bg-color', colorToString(color))
  }
})