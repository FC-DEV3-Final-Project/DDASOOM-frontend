import { useQuery } from '@tanstack/react-query'
import {
  remembranceDetailService,
  type RemembranceDetailResponse,
} from '@/pages/RemembranceDetail/services/remembranceDetailService'

export const useGetRemembranceDetail = (donateSeq: number) => {
  return useQuery<RemembranceDetailResponse>({
    queryKey: ['remembranceDetail', donateSeq],
    queryFn: () => remembranceDetailService.getRemembranceDetail(donateSeq),
    enabled: !!donateSeq,
  })
}
