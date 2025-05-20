import type { Config } from 'tailwindcss'
import * as krdsPlugin from '@krds-ui/tailwindcss-plugin';

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
  plugins: [krdsPlugin],
  corePlugins: {
    preflight: false,
  },
} as Config
