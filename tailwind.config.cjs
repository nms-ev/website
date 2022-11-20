/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        xl: `${70 * 16}px`,
      },
    },
  },
  plugins: [],
}
