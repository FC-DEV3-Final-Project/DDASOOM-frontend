const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}) => {
  const pagesPerGroup = 10
  const currentGroup = Math.floor((currentPage - 1) / pagesPerGroup)
  const startPage = currentGroup * pagesPerGroup + 1
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages)

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  return (
    <nav className="mt-8 flex justify-center">
      <ul className="flex items-center gap-8">
        {/* 이전 그룹 버튼 */}
        <li>
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center rounded px-3 py-2 text-[17px] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <img src="icon/Arrow.svg" alt="" className="w-4 rotate-90" /> 이전
          </button>
        </li>

        <div className="flex gap-2">
          {/* 페이지 번호 버튼들 */}
          {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
            const page = startPage + i
            return (
              <li key={page}>
                <button
                  onClick={() => handlePageClick(page)}
                  className={`h-10 w-10 rounded-full text-[17px] ${
                    currentPage === page
                      ? 'bg-red-40 font-bold text-white'
                      : 'bg-white text-[#464C53]'
                  }`}
                >
                  {page}
                </button>
              </li>
            )
          })}
        </div>
        {/* 다음 그룹 버튼 */}
        <li>
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center rounded px-3 py-2 text-[17px] disabled:cursor-not-allowed disabled:opacity-50"
          >
            다음 <img src="icon/Arrow.svg" alt="" className="w-4" />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination

// const [currentPage, setCurrentPage] = useState(1)

// const handlePageChange = (page: number) => {
//   setCurrentPage(page)
// }
