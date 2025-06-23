import SearchBar from '@/shared/components/SearchBar'
import type { Field } from '@/pages/story/components/LettersContainer'

interface Props {
  handleSearch: (query: string, field?: Field) => void
  totalLetters: number
}

const ContainerHeader = ({ handleSearch, totalLetters }: Props) => {
  const handleNavigate = () => {
    alert(
      'KODA 장기구독 코디네이터 작성 공간입니다. \n유가족이시면 하늘나라편지 메뉴를 이용하세요.',
    )
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
            className="bg-red-40 hidden w-full items-center gap-2 rounded-[100px] px-[18px] text-white sm:flex"
          >
            <img src="/icon/pencil.svg" alt="" />
            <span className="text-[15px] font-bold whitespace-nowrap">이야기 쓰기</span>
          </button>
        </div>
        <p className="text-gray-80 text-[19px] font-bold sm:hidden">
          총 <b className="text-red-40">{totalLetters}</b> 건
        </p>
      </section>
      <button
        onClick={handleNavigate}
        className="bg-red-40 fixed right-5 bottom-6 z-10 h-15 w-15 rounded-full shadow-lg sm:hidden"
      >
        <img src="/icon/pencil.svg" alt="" className="mx-auto h-6 w-6" />
      </button>
    </>
  )
}
export default ContainerHeader
