// 외부 라이브러리
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'

import { queryClient } from '@/shared/lib/queryClient'
import router from '@/router/router'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
