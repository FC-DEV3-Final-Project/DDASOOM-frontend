import Layout from '@/shared/components/Layout'
import HomePage from '@/pages/home'
import HeavenLetter from '@/pages/heaven_letter/index'
import LetterWrite from '@/pages/heaven_letter/LetterWrite'
import { createBrowserRouter } from 'react-router-dom'

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
        children: [
          {
            index: true,
            element: <HeavenLetter />,
          },
          {
            path: 'write',
            element: <LetterWrite />,
          },
        ],
      },
    ],
  },
])

export default router
