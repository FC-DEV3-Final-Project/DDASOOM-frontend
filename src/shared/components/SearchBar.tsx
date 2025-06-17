import { useState } from 'react'

interface SearchBarProps {
  onSearch: (value: string, field: 'all' | 'title' | 'content') => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('')
  const [searchField, setSearchField] = useState<'all' | 'title' | 'content'>('all')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchField(e.target.value as 'all' | 'title' | 'content')
  }

  const handleSearchClick = () => {
    onSearch(inputValue, searchField)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(inputValue, searchField)
    }
  }

  return (
    <div className="flex w-full items-center justify-between gap-2">
      <div className="flex items-center gap-1 text-[15px] font-bold whitespace-nowrap">
        <select
          value={searchField}
          onChange={handleFieldChange}
          className="border-gray-20 text-[15px]"
        >
          <option value="all">전체</option>
          <option value="title">제목</option>
          <option value="content">내용</option>
        </select>
      </div>
      <div className="flex h-full gap-2">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // ⌨️ 엔터로도 검색 가능하게
          className="border-gray-20 h-10 max-w-[200px] rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none sm:w-[240px] sm:max-w-none"
        />
        <button
          onClick={handleSearchClick}
          className="border-red-30 hover:bg-gray-10 text-red-40 h-full rounded-[100px] border-2 px-[18px] text-[15px] whitespace-nowrap"
        >
          검색
        </button>
      </div>
    </div>
  )
}

export default SearchBar
