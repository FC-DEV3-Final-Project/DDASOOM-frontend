import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class', 'dark'],
  files: ['./src/**/*.{ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
} as Config
