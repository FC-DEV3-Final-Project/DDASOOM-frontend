import LettersContainer from '@/pages/story/components/LettersContainer'
import WarningBanner from '@/shared/components/WarningBanner'
import SectionHeader from '@/shared/components/SectionHeader'

const StoryLetter = () => {
  return (
    <>
      <div className="w-full bg-[#F4F5F6]">
        <header className="mx-auto w-full max-w-[1300px] px-[20px]">
          <SectionHeader
            image="/donationletter.png"
            title="기증 後 스토리"
            description={`영원히 기억될 기증자의 숭고한 나눔의 순간과 아름다운 이야기.`}
          />
        </header>
      </div>
      <section className="mx-auto flex w-full max-w-[1300px] flex-col gap-6 p-5 sm:gap-[80px]">
        <WarningBanner
          title={
            <>
              한국장기조직기증원 장기구득 코디네이터가 함께 한 영원히 기억되는
              <b className="text-red-40">기증자의 숭고한 나눔의 순간과 아름다운 이야기</b>를 적는
              공간입니다
            </>
          }
          listItems={[
            <>KODA 장기구득 코디네이터들의 공간입니다.</>,
            <>
              개인정보 노출의 우려가 있으니 게시글 작성 시 개인정보 등록은 자제하여 주시기 바랍니다.
            </>,
          ]}
        />

        <LettersContainer />
      </section>
    </>
  )
}
export default StoryLetter
