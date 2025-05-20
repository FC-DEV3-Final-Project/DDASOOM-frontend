import type { Config } from 'tailwindcss'

export default {
  // darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['var(--font-family)'],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
} as Config
