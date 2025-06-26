// AppRouter.tsx
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import HeavenLetterEdit from '@/pages/heaven_letter/HeavenLetterEdit'
import StoryLetter from '@/pages/story'
import StoryLetterDetail from '@/pages/story/StoryLetterDetail'
import RecipientLetterEdit from '@/pages/recipient_letter/RecipientLetterEdit'
import RemembranceDetailPage from '@/pages/RemembranceDetail/index'

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* 추모공간 */}
          <Route path="remembrance">
            <Route index element={<Navigate to="member" replace />} />
            <Route path="member" index element={<RemembrancePage />} />
            <Route path=":donateSeq" element={<RemembranceDetailPage />} />

            <Route path="letter">
              <Route index element={<HeavenLetter />} />
              <Route path=":letterSeq" element={<HeavenLetterDetail />} />
              <Route path="write" element={<HeavenLetterWrite />} />
              <Route path=":letterSeq/edit" element={<HeavenLetterEdit />} />
            </Route>

            <Route path="recipient">
              <Route index element={<RecipientLetter />} />
              <Route path=":letterSeq" element={<RecipientLetterDetail />} />
              <Route path="write" element={<RecipientLetterWrite />} />
              <Route path=":letterSeq/edit" element={<RecipientLetterEdit />} />
            </Route>

            <Route path="story">
              <Route index element={<StoryLetter />} />
              <Route path=":storySeq" element={<StoryLetterDetail />} />
            </Route>
          </Route>

          {/* 장기 조직 기능 */}
          <Route path="organ">
            <Route index element={<TempPage title="장기 조직 기능" />} />
            <Route path="familyManagement" element={<TempPage title="기증자/유가족 지원" />} />
            <Route path="administrativeProcedure" element={<TempPage title="사후 행정 절차" />} />
          </Route>

          {/* 정보마당 */}
          <Route path="info">
            <Route index element={<TempPage title="기증 통계" />} />
            <Route path="donor" element={<TempPage title="기증 통계(기증자)" />} />
            <Route path="comparison" element={<TempPage title="5년간 기증통계 비교" />} />
            <Route path="trend" element={<TempPage title="연도별 기증 추이" />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  )
}

export default AppRouter
