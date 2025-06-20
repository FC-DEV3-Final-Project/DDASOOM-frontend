import { useState } from 'react'

interface SearchBarProps {
  onSearch: (value: string, field?: 'all' | 'title' | 'contents') => void
  showFieldSelector?: boolean
  placeholder?: string
}

const SearchBar = ({
  onSearch,
  showFieldSelector = true,
  placeholder = '검색어를 입력하세요',
}: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('')
  const [searchField, setSearchField] = useState<'all' | 'title' | 'contents'>('all')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchField(e.target.value as 'all' | 'title' | 'contents')
  }

  const handleSearchClick = () => {
    if (showFieldSelector) {
      onSearch(inputValue, searchField)
    } else {
      onSearch(inputValue)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSearchClick()
    }
  }

  return (
    <div className="flex h-10 w-full items-center justify-between gap-2">
      {showFieldSelector && (
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
      )}
      <div className="flex h-full gap-2">
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="border-gray-20 h-10 w-full rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none sm:min-w-[240px]"
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
