import { createBrowserRouter } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Layout from '@/shared/layout/Layout'
import TempPage from '@/pages/TempPage/TempPage'
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage'
import HomePage from '@/pages/home/index'
import RemembrancePage from '@/pages/Remembrance/index'
import HeavenLetter from '@/pages/heaven_letter'
import RecipientLetter from '@/pages/recipient_letter'
import HeavenLetterDetail from '@/pages/heaven_letter/HeavenLetterDetail'
import HeavenLetterWrite from '@/pages/heaven_letter/HeavenLetterWrite'
import RecipientLetterDetail from '@/pages/recipient_letter/RecipientLetterDetail'
import RecipientLetterWrite from '@/pages/recipient_letter/RecipientLetterWrite'
import StoryLetter from '@/pages/story'
import StoryLetterDetail from '@/pages/story/StoryLetterDetail'
import HeavenLetterEdit from '@/pages/heaven_letter/HeavenLetterEdit'

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },

      // 추모공간
      {
        path: 'remembrance',
        children: [
          { index: true, element: <Navigate to="member" replace /> },
          { path: 'member', element: <RemembrancePage /> },
          {
            path: 'letter',
            children: [
              { index: true, element: <HeavenLetter /> },
              { path: ':letterSeq', element: <HeavenLetterDetail /> },
              { path: 'write', element: <HeavenLetterWrite /> },
              { path: ':letterSeq/edit', element: <HeavenLetterEdit /> },
            ],
          },
          {
            path: 'recipient',
            children: [
              { index: true, element: <RecipientLetter /> },
              { path: ':letterSeq', element: <RecipientLetterDetail /> },
              { path: 'write', element: <RecipientLetterWrite /> },
              { path: ':letterSeq/edit', element: <HeavenLetterEdit /> },
            ],
          },
          {
            path: 'story',
            children: [
              { index: true, element: <StoryLetter /> },
              { path: ':letterId', element: <StoryLetterDetail /> },
            ],
          },
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
