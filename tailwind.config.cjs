/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      copy: 'Mulish',
      mono: 'FiraCode',
    },
    extend: {
      colors: {
        accent: 'var(--bg-color)',
      },
      screens: {
        sm: `${30 * 16}px`,
        xl: `${70 * 16}px`,
      },
    },
  },
  plugins: [],
}
