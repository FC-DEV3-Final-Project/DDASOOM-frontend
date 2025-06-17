import WarningBanner from '@/pages/recipient_letter/components/WarningBanner'
import LettersContainer from '@/pages/recipient_letter/components/LettersContainer'

const RecipientLetter = () => {
  return (
    <>
      <section className="mx-auto flex w-full max-w-[1300px] flex-col p-5 sm:gap-[80px]">
        <WarningBanner />
        <LettersContainer />
      </section>
    </>
  )
}
export default RecipientLetter
