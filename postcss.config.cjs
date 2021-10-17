const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')

const PROD = process.env.NODE_ENV === 'production'

const config = {
  plugins: [
    PROD &&
      purgecss({
        content: ['./**/**/*.html', './**/**/*.svelte'],
        safelist: [/svelte/],
      }),
    autoprefixer(),
    PROD && cssnano(),
  ],
}

module.exports = config
