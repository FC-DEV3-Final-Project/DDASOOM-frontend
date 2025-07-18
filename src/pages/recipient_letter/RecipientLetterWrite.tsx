import LetterForm from '@/pages/recipient_letter/components/LetterForm'
import WarningBanner from '@/shared/components/WarningBanner'
import BackToListButton from '@/shared/components/BackToListButton'

const RecipientLetterWrite = () => {
  return (
    <>
      <BackToListButton to="/remembrance/recipient" label="수혜자 편지" />
      <section className="mx-auto flex w-full max-w-[1000px] flex-col gap-6 p-5 sm:gap-[80px]">
        <WarningBanner
          title={
            <>
              수혜자 편지는 <b className="text-red-40">이식으로 새생명을 살고 있는 분들</b>의
              이야기입니다 언제 어디서나 시간과 장소에 구애받지 않고, 익명으로 작성이 가능합니다
            </>
          }
          listItems={[
            <>생명을 나눠준 기증자에 대한 예의를 지켜주시고 존중해주시기 바랍니다.</>,
            <>비방이나 욕설 등 분위기를 해치는 내용은 작성자에 의해 임의 삭제될 수 있습니다.</>,
            <>개인정보 노출을 자제해주세요</>,
            <>
              이 게시판에 올린 글은 한국장기조직기증원 뉴스레터에 원문의 의미를 훼손하지 않는
              범위내에서 교정을 거쳐 임의 수록할 수 있음을 양지하시기 바랍니다.
            </>,
          ]}
        />
        <LetterForm />
      </section>
    </>
  )
}
export default RecipientLetterWrite
