import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess()],
  kit: {
    prerender: {
      entries: ['*', '/names.json'],
      default: true,
    },
    adapter: adapter(),
  },
}

export default config
