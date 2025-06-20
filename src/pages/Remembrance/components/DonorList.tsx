import { useMemo } from 'react'
import { useGetDonorsSuspense } from '@/pages/Remembrance/queries/useGetDonors'
import type { GetDonorsParams } from '@/pages/Remembrance/services/remembranceService'
import CardGrid from '@/pages/Remembrance/components/CardGrid'
import Pagination from '@/pages/Remembrance/components/Pagination'

interface DonorListProps {
  queryParams: GetDonorsParams
  onPageChange: (page: number) => void
  isPending: boolean
}

const DonorList = ({ queryParams, onPageChange, isPending }: DonorListProps) => {
  // 1. Suspense의 대상이 되는 데이터 fetching hook
  const { data: donorsData } = useGetDonorsSuspense(queryParams)

  // 2. API 응답 데이터를 UI에서 사용할 형태로 가공
  const donors = useMemo(
    () =>
      donorsData.content.map((item) => ({
        id: item.donateSeq,
        donateName: item.donorName,
        donateAge: item.donateAge,
        donateGender: item.genderFlag,
        donateDate: item.donateDate?.replace(/ /g, '') ?? null,
        donorBirthDate: item.donorBirthdate?.replace(/ /g, '') ?? null,
      })),
    [donorsData],
  )

  const totalPages = donorsData.totalPages

  // 3. 페이지 전환 시 부드러운 전환 효과를 위한 UI
  return (
    <div className={`transition-opacity duration-300 ${isPending ? 'opacity-50' : 'opacity-100'}`}>
      <CardGrid donors={donors} />
      <Pagination
        page={queryParams.page ?? 0}
        totalPages={totalPages}
        onChange={onPageChange}
        isFetching={isPending}
      />
    </div>
  )
}

export default DonorList
