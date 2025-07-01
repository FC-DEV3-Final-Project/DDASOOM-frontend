import SectionHeader from '@/shared/components/SectionHeader'
import FilterBar from '@/pages/Remembrance/components/FilterBar'
import GREEN_RIBBON from '@/shared/assets/icons/green_ribbon.svg'
import GREEN_RIBBON_MOBILE from '@/shared/assets/icons/green_ribbon_mobile.svg'
import { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { useRemembranceFilters } from '@/pages/Remembrance/hooks/useRemembranceFilters'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
import CardGridSkeleton from '@/pages/Remembrance/components/CardGridSkeleton'
import DonorList from '@/pages/Remembrance/components/DonorList'
import { ErrorBoundary } from 'react-error-boundary'

const RemembranceContents = () => {
  // 1. 필터 관련 로직은 그대로 유지
  const {
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
  } = useRemembranceFilters()

  // 2. 화면 크기에 따른 이미지 선택 로직 유지
  const isMobile = useMediaQuery('(max-width: 767px)')
  const ribbonImage = isMobile ? GREEN_RIBBON_MOBILE : GREEN_RIBBON

  // 3. 데이터 Fetching 및 가공 로직은 DonorList로 이동했으므로 삭제

  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <Helmet>
        <title>기증자 추모관 - 생명나눔</title>
        <meta
          name="description"
          content="생명나눔에 함께해주신 기증자분들을 기억하고 추모하는 공간입니다. 기증자분들의 숭고한 정신을 기립니다."
        />
      </Helmet>

      {/* 헤더 (정적 UI) */}
      <div className="w-full bg-[#F4F5F6]">
        <header className="mx-auto w-full max-w-[1300px] px-[20px]">
          <SectionHeader
            title="기증자 추모관"
            description={`생명나눔을 실천한 분들의 고귀한 뜻,\n잊지 않겠습니다.`}
            image={ribbonImage}
          />
        </header>
      </div>

      {/* 메인 컨텐츠 */}
      <section
        className="mx-auto flex w-full max-w-[1300px] flex-col px-4 text-[#33363D] md:px-[20px]"
        aria-labelledby="remembrance-main-content"
      >
        <h2 id="remembrance-main-content" className="sr-only">
          기증자 목록 및 검색
        </h2>

        {/* 필터 바 (정적 UI) */}
        <FilterBar
          currentSort={currentSort}
          onSortChange={handleSortChange}
          selectedYear={selectedYear}
          onYearChange={handleYearChange}
          searchKeyword={searchKeyword}
          onSearch={handleSearch}
          searchDateRange={searchDateRange}
        />

        {/* 4. Suspense로 데이터 의존적인 컴포넌트만 감싸기 */}
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <div role="alert" className="p-4">
              <p>데이터 로딩 중 오류가 발생했습니다.</p>
              <pre>{error.message}</pre>
              <button onClick={resetErrorBoundary}>다시 시도</button>
            </div>
          )}
        >
          <Suspense fallback={<CardGridSkeleton />}>
            <DonorList
              queryParams={queryParams}
              onPageChange={handlePageChange}
              isPending={isPending}
            />
          </Suspense>
        </ErrorBoundary>
      </section>
    </main>
  )
}

export default RemembranceContents
