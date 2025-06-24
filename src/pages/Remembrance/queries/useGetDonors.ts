import { useSuspenseQuery } from '@tanstack/react-query'
import { remembranceService } from '@/pages/Remembrance/services/remembranceService'
import type { GetDonorsParams } from '@/pages/Remembrance/services/remembranceService'

/**
 * 기증자 목록을 가져오는 API에 대한 react-query 키
 */
export const donorsQueryKeys = {
  all: ['donors'] as const,
  lists: () => [...donorsQueryKeys.all, 'list'] as const,
  list: (params: GetDonorsParams) => [...donorsQueryKeys.lists(), params] as const,
}

/**
 * 기증자 목록을 가져오는 커스텀 훅 (Suspense용)
 */
export const useGetDonorsSuspense = (params: GetDonorsParams) => {
  return useSuspenseQuery({
    queryKey: donorsQueryKeys.list(params),
    queryFn: () => remembranceService.getDonors(params),
  })
}
