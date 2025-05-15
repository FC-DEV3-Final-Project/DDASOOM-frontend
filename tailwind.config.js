/** @type {import('tailwindcss').Config} */
module.exports = {
  //darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['var(--font-family)'],
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
