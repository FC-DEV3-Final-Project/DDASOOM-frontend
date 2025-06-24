import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query'
import { apiErrorHandler } from '@/shared/lib/apiErrorHandler'

// 에러 핸들러 설정
const queryCache = new QueryCache({
  onError: (error) => {
    apiErrorHandler(error)
  },
})

const mutationCache = new MutationCache({
  onError: (error) => {
    apiErrorHandler(error)
  },
})

// QueryClient 인스턴스 생성 시 위에서 만든 캐시 인스턴스 전달
export const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 윈도우 포커스시 자동으로 데이터를 다시 가져오지 않음
      staleTime: 1000 * 60, // 1분 동안 데이터는 "최신" 상태로 간주
      gcTime: 5 * 60 * 1000, // 5분 동안 데이터는 가비지 컬렉션 대상으로 간주
      retry: 2, // 실패시 1번만 재시도
      retryDelay: 1000, // 1초 대기 후 재시도
      refetchOnReconnect: true, // 네트워크 재연결 시 refetch
      refetchOnMount: true, // 컴포넌트 마운트 시 refetch
    },
    mutations: {
      retry: 0, // 뮤테이션은 재시도하지 않음
    },
  },
})
