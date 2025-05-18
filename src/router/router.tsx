import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/shared/layout/Layout'

import TempPage from '@/pages/TempPage/TempPage'
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage'

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <TempPage title="홈" /> },

      // 추모공간
      {
        path: 'remembrance',
        children: [
          { index: true, element: <TempPage title="기증자 추모관" /> },
          { path: 'member', element: <TempPage title="기증자 추모관(멤버)" /> },
          { path: 'letter', element: <TempPage title="하늘나라 편지" /> },
          { path: 'recipient', element: <TempPage title="수혜자 편지" /> },
          { path: 'story', element: <TempPage title="기증 후 스토리" /> },
        ],
      },

      // 장기 조직 기능
      {
        path: 'organ',
        children: [
          { index: true, element: <TempPage title="장기 조직 기능" /> },
          { path: 'familyManagement', element: <TempPage title="기증자/유가족 지원" /> },
          { path: 'administrativeProcedure', element: <TempPage title="사후 행정 절차" /> },
        ],
      },

      // 정보마당
      {
        path: 'info',
        children: [
          { index: true, element: <TempPage title="기증 통계" /> },
          { path: 'donor', element: <TempPage title="기증 통계(기증자)" /> },
          { path: 'comparison', element: <TempPage title="5년간 기증통계 비교" /> },
          { path: 'trend', element: <TempPage title="연도별 기증 추이" /> },
        ],
      },
    ],
  },
]

const router = createBrowserRouter(routes)
export default router
