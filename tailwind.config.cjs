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
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.copy-sm': {
          [`@apply font-copy font-light text-sm`]: {},
        },
        '.copy-md': {
          [`@apply font-copy font-light text-base`]: {},
        },
        '.copy-md-strong': {
          [`@apply font-copy font-medium text-base`]: {},
        },
        '.copy-lg': {
          [`@apply font-copy font-light text-2xl`]: {},
        },
        '.copy-lg-strong': {
          [`@apply font-copy font-medium text-2xl`]: {},
        },
        '.copy-xl': {
          [`@apply font-copy font-light text-[40px]`]: {},
        },
        '.copy-xxl': {
          [`@apply font-copy font-light text-[96px]`]: {},
        },
        '.mono-md': {
          [`@apply font-mono font-normal text-base`]: {},
        },
      })
    },
  ],
}
