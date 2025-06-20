import { useMemo, useState, useTransition } from 'react'
import { getSearchDateRange } from '@/pages/Remembrance/utils/dateUtils'
import type { GetDonorsParams } from '@/pages/Remembrance/services/remembranceService'

export const useRemembranceFilters = () => {
  const [page, setPage] = useState(0)
  const [pageSize] = useState(18)
  const [currentSort, setCurrentSort] = useState<'기증일' | '생일'>('기증일')
  const [selectedYear, setSelectedYear] = useState('전체 연도')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchDateRange, setSearchDateRange] = useState({ from: '', to: '' })
  const [isPending, startTransition] = useTransition()

  const queryParams: GetDonorsParams = useMemo(() => {
    const dateRange = getSearchDateRange(searchDateRange)
    const params: GetDonorsParams = {
      donorName: searchKeyword,
      page,
      size: pageSize,
      sortField: currentSort === '기증일' ? 'donateDate' : 'donorBirthdate',
      direction: currentSort === '기증일' ? 'Desc' : 'Asc',
      hasBirthdate: currentSort === '생일',
    }
    if (dateRange) {
      params.searchStart = dateRange.start
      params.searchEnd = dateRange.end
    } else if (selectedYear !== '전체 연도') {
      params.searchStart = `${selectedYear}-01-01`
      params.searchEnd = `${selectedYear}-12-31`
    }
    return params
  }, [page, pageSize, currentSort, selectedYear, searchKeyword, searchDateRange])

  const handleSortChange = (sort: '기증일' | '생일') => {
    startTransition(() => {
      setCurrentSort(sort)
      setPage(0)
    })
  }

  const handlePageChange = (nextPage: number) => {
    startTransition(() => {
      setPage(nextPage)
    })
  }

  const handleYearChange = (year: string) => {
    startTransition(() => {
      setSelectedYear(year)
      setSearchDateRange({ from: '', to: '' })
      setPage(0)
    })
  }

  const handleSearch = ({
    keyword,
    startDate,
    endDate,
  }: {
    keyword: string
    startDate: string
    endDate: string
  }) => {
    startTransition(() => {
      setSearchKeyword(keyword)
      setSearchDateRange({ from: startDate, to: endDate })
      if (startDate || endDate) {
        setSelectedYear('전체 연도')
      }
      setPage(0)
    })
  }

  return {
    page,
    currentSort,
    selectedYear,
    searchKeyword,
    searchDateRange,
    isPending,
    queryParams,
    handleSortChange,
    handlePageChange,
    handleYearChange,
    handleSearch,
  }
}
