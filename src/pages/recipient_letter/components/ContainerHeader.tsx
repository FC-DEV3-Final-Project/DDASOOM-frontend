import SearchBar from '@/shared/components/SearchBar'

interface Props<T> {
  items: T[]
}

const ContainerHeader = <T,>({ items }: Props<T>) => {
  const totalLetters = items.length
  return (
    <section className="h-10 justify-between px-5 sm:flex">
      <p className="text-gray-80 hidden text-[19px] font-bold sm:block">
        총 <b className="text-red-40">{totalLetters}</b> 건
      </p>
      <div className="flex h-10 justify-between gap-8">
        <SearchBar />
        <button className="bg-red-40 hidden min-w-[112px] items-center justify-between gap-2 rounded-[100px] px-[18px] text-white sm:flex">
          <img src="icon/pencil.svg" alt="" />
          <span className="text-[15px] font-bold whitespace-nowrap">편지쓰기</span>
        </button>
      </div>
      <p className="text-gray-80 text-[19px] font-bold sm:hidden">
        총 <b className="text-red-40">{totalLetters}</b> 건
      </p>
    </section>
  )
}
export default ContainerHeader
