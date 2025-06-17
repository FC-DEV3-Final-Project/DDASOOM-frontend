import SearchBar from '@/shared/components/SearchBar'

interface Props<T> {
  items: T[]
}

const ContainerHeader = <T,>({ items }: Props<T>) => {
  const totalLetters = items.length
  return (
    <section className="flex h-10 justify-between px-5">
      <p className="text-gray-80 text-[19px] font-bold">
        총 <b className="text-red-40">{totalLetters}</b> 건
      </p>
      <div className="flex gap-8">
        <SearchBar />
        <button className="bg-red-40 flex items-center justify-center gap-2 rounded-full border px-[18px] text-white">
          <img src="icon/pencil.svg" alt="" />
          <span className="font-bold">편지쓰기</span>
        </button>
      </div>
    </section>
  )
}
export default ContainerHeader
