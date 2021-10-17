const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')

const config = {
  plugins: [
    purgecss({
      content: ['./**/**/*.html', './**/**/*.svelte'],
      safelist: ['svelte-'],
    }),
    autoprefixer(),
    cssnano(),
  ],
}

module.exports = config
