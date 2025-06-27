import RemembranceContents from '@/pages/Remembrance/components/RemembranceContents'
import { Suspense, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import LoadingSpinner from '@/shared/components/LoadingSpinner'
import { remembranceService } from '@/pages/Remembrance/services/remembranceService'

const RemembrancePage = () => {
  useEffect(() => {
    // 테스트용 API 호출
    remembranceService
      .getDonors({
        page: 0,
        size: 10,
        sortField: 'donateDate',
        direction: 'Desc',
      })
      .then((res) => {
        console.log('API 응답:', res)
      })
      .catch((err) => {
        console.error('API 에러:', err)
      })
  }, [])

  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div role="alert" className="p-4">
          <p className="font-bold">데이터를 불러오는 중 오류가 발생했습니다:</p>
          <pre className="my-2 rounded bg-gray-100 p-2 whitespace-pre-wrap">{error.message}</pre>
          <button
            onClick={resetErrorBoundary}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            다시 시도
          </button>
        </div>
      )}
    >
      <Suspense
        fallback={<LoadingSpinner text="소중한 분들을 기억하는 공간을 준비하고 있습니다..." />}
      >
        <RemembranceContents />
      </Suspense>
    </ErrorBoundary>
  )
}

export default RemembrancePage
