const SearchBar = () => {
  return (
    <div className="flex w-full items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        전체 <img src="/icon/Arrow.svg" alt="" className="h-[11px] w-[11px] rotate-450" />
      </div>
      <div className="flex h-full gap-2">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="border-gray-20 h-10 rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none sm:w-[240px]"
        />
        <button className="border-red-30 hover:bg-gray-10 text-red-40 h-full rounded-[100px] border-2 px-[18px] text-[15px]">
          검색
        </button>
      </div>
    </div>
  )
}

export default SearchBar
