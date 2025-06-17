import WarningBanner from '@/pages/heaven_letter/components/WarningBanner'
import LettersContainer from '@/pages/heaven_letter/components/LettersContainer'

const HeavenLetter = () => {
  return (
    <>
      <section className="mx-auto flex w-full max-w-[1300px] flex-col p-5 sm:gap-[80px]">
        <WarningBanner />
        <LettersContainer />
      </section>
    </>
  )
}
export default HeavenLetter
