import { useNavigate } from 'react-router-dom'
import SearchBar from '@/shared/components/SearchBar'

interface Props {
  handleSearch: (query: string, field?: 'all' | 'title' | 'content') => void
  totalLetters: number
}

const ContainerHeader = ({ handleSearch, totalLetters }: Props) => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/remember/heavenletter/write')
  }
  return (
    <>
      <section className="flex flex-col justify-between gap-6 sm:flex sm:h-10 sm:flex-row sm:gap-0 sm:px-5">
        <p className="text-gray-80 hidden text-[19px] font-bold sm:block">
          총 <b className="text-red-40">{totalLetters}</b> 건
        </p>
        <div className="flex h-10 justify-between gap-8">
          <SearchBar onSearch={(value, field) => handleSearch(value, field)} />
          <button
            onClick={handleNavigate}
            className="bg-red-40 hidden min-w-[112px] items-center justify-between gap-2 rounded-[100px] px-[18px] text-white sm:flex"
          >
            <img src="/icon/pencil.svg" alt="" />
            <span className="text-[15px] font-bold whitespace-nowrap">편지쓰기</span>
          </button>
        </div>
        <p className="text-gray-80 text-[19px] font-bold sm:hidden">
          총 <b className="text-red-40">{totalLetters}</b> 건
        </p>
      </section>
      <button className="bg-red-40 fixed right-5 bottom-6 z-10 h-15 w-15 rounded-full shadow-lg sm:hidden">
        <img src="/icon/pencil.svg" alt="" className="mx-auto h-6 w-6" />
      </button>
    </>
  )
}
export default ContainerHeader
