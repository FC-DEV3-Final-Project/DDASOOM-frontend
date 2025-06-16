import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import fsdPlugin from 'eslint-plugin-fsd-lint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      fsd: fsdPlugin, // fsd-lint plugin
      prettier: prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error',

      // FSD 레이어 import 규칙 강제 (예: features는 pages를 import 불가)
      // 'fsd/forbidden-imports': 'error',

      // 슬라이스/레이어 간 상대 경로 import 금지, 별칭(@) 사용
      // 기본적으로 같은 슬라이스 내 상대 경로는 허용 (설정 가능)
      'fsd/no-relative-imports': 'error',

      // Public API (index 파일)를 통한 import만 허용
      'fsd/no-public-api-sidestep': 'error',

      // 같은 레이어 내 슬라이스 간 직접 import 방지
      'fsd/no-cross-slice-dependency': 'error',

      // 비즈니스 로직 레이어에서 UI import 방지
      'fsd/no-ui-in-business-logic': 'error',

      // 전역 스토어 직접 import 금지
      'fsd/no-global-store-imports': 'error',

      // FSD 레이어 기반으로 import 순서 강제
      'fsd/ordered-imports': 'warn',
    },
  },
)
