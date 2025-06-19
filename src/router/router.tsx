import { createBrowserRouter } from 'react-router-dom'
import HeavenLetter from '@/pages/heaven_letter/index'
import LetterWrite from '@/pages/heaven_letter/LetterWrite'
import Layout from '@/shared/components/Layout'
import HomePage from '@/pages/home'
import LetterDetail from '@/pages/heaven_letter/LetterDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'remember/heavenletter',
        element: <HeavenLetter />,
      },
      {
        path: 'remember/heavenletter/write',
        element: <LetterWrite />,
      },
      {
        path: 'remember/heavenletter/:letterSeq', // letterSeq 파라미터 경로 추가
        element: <LetterDetail />,
      },
    ],
  },
])

export default router
