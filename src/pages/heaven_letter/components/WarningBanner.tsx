const WarningBanner = () => {
  return (
    <article className="bg-red-5 flex w-full items-start gap-[14px] rounded-[20px] p-5 sm:gap-5 sm:p-6">
      <img src="icon/emergency.svg"></img>
      <div>
        <p className="text-[15px] font-bold text-[#222] sm:mb-3 sm:text-[17px]">
          기증자에 대한 그리움과 사랑을 담은 <b className="text-red-40">‘하늘나라 편지'</b>는 언제
          어디서나 시간과 장소에 제약을 받지 않고 추모를 할 수 있는 온라인 공간으로 익명 작성이
          가능합니다
        </p>
        <ul className="hidden list-disc pl-5 text-[14px] leading-[200%] text-[#444] sm:block">
          <li>
            기증자에 대한 추모 분위기를 해치거나, 비방의 글 등이 게시가 될 경우 삭제될 수 있습니다.
            경건한 분위기에서 기증자분을 추모할 수 있도록 많은 노력 부탁드립니다.
          </li>
          <li>
            개인정보 노출의 우려가 있으니 게시글 작성 시 개인정보 등록은 자제하여 주시기 바랍니다.
          </li>
          <li>
            하늘나라편지에 쓰신 글은 <b>기증활성화를 위해 한국장기조직기증원 뉴스레터 및 타 매체</b>
            에 익명 표기와 뜻을 훼손하지 않는 범위의 수정을 통해 게재될 수 있습니다.
          </li>
          <li>
            [기증자 가족 안내]한국장기조직기증원에서는 기증자 가족, 수혜자, 한국장기조직기증원
            코디네이터 및 임직원의 이야기를 모은 여섯 번째 생명나눔 사레집 [별이 빛나는 밤에]를
            출간하였습니다.
          </li>
          <li>
            도서를 직접 받아보고 싶으신 분은 대외협력팀(02-765-8736)으로 연락주시거나{' '}
            <a href="">신청서</a>를 작성하여 주세요.
          </li>
        </ul>
      </div>
    </article>
  )
}
export default WarningBanner
