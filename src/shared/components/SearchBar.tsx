const SearchBar = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        전체 <img src="/icon/Arrow.svg" alt="" className="h-[11px] w-[11px] rotate-450" />
      </div>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        className="border-gray-20 h-10 w-[240px] rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
      <button className="border-red-30 hover:bg-gray-10 text-red-40 h-full rounded-[100px] border-2 px-[18px]">
        검색
      </button>
    </div>
  )
}

export default SearchBar
