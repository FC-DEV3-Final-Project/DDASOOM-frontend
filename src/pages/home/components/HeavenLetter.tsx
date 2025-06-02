import LetterCarousel from '@/pages/home/components/LetterCarousel'
import CarouselButton from '@/shared/components/CarouselButton'

const HeavenLetter = () => {
  return (
    <section>
      <a className="inline-flex cursor-pointer items-center gap-3" href="/memorial">
        <h2 className="text-gray-95 mb-[4px] inline text-2xl font-bold">하늘나라 편지</h2>
        <img src="/public/icon/Arrow.svg" alt="" width={24} height={24} className="mb-1" />
      </a>
      <div className="flex justify-between">
        <p className="text-gray-60 mb-[28px] text-[19px] font-normal">
          그리움과 사랑을 담아 소중한 이들을 기억하는 공간입니다.
        </p>
        <CarouselButton />
      </div>
      <LetterCarousel />
    </section>
  )
}

export default HeavenLetter
