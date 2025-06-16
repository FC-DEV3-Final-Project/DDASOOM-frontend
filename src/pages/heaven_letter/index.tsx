import WarningBanner from '@/pages/heaven_letter/components/WarningBanner'
import LettersContainer from '@/pages/heaven_letter/components/LettersContainer'

const HeavenLetter = () => {
  return (
    <main className="mb-10 flex w-full flex-col items-center self-stretch sm:mb-25">
      {/* 상단 컴포넌트로 바꾸기 */}
      <section className="mx-auto flex w-full max-w-[1300px] flex-col px-5 sm:gap-[80px]">
        <WarningBanner />
        <LettersContainer />
      </section>
    </main>
  )
}
export default HeavenLetter
