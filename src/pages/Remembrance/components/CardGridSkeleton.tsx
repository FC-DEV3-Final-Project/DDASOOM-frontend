const SkeletonCard = () => (
  <div className="flex flex-col items-center">
    <div className="mt-2 h-[120px] w-[120px] animate-pulse rounded-full bg-gray-200" />
    <div className="mt-[16px] h-4 w-32 animate-pulse rounded bg-gray-200" />
    <div className="mt-2 h-8 w-40 animate-pulse rounded-full bg-gray-200" />
  </div>
)

/**
 * CardGrid의 로딩 상태를 표시하기 위한 스켈레톤 UI 컴포넌트
 * @param count - 표시할 스켈레톤 카드의 개수 (기본값: 12)
 */
const CardGridSkeleton = ({ count = 12 }: { count?: number }) => {
  return (
    <div className="grid w-full grid-cols-2 gap-y-8 py-8 md:grid-cols-4 md:py-16 lg:grid-cols-6">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  )
}

export default CardGridSkeleton
