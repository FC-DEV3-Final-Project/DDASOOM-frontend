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
  }, // preflight: false 제거됨 : 브라우저 간 기본 스타일 차이를 줄이기 위해 Tailwind의 CSS 리셋(preflight)을 활성화
} satisfies Config
