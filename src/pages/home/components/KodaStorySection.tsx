import React from 'react'

const KodaStorySection: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="header mb-[10px] sm:mb-7">
        <a className="mb-1 inline-flex cursor-pointer items-center gap-3" href="/event">
          <h2 className="text-gray-95 inline text-[15px] font-bold sm:text-2xl">KODA 이야기</h2>
          <img src="/icon/Arrow.svg" alt="" className="h-[15px] w-[15px] sm:h-[24px] sm:w-[24px]" />
        </a>
        <p className="text-gray-60 text-[13px] font-normal sm:text-[19px]">
          한국장기조직기증원의 새로운 소식을 만나보세요.
        </p>
      </section>
      <div className="flex aspect-video w-full items-center justify-center rounded-[20px] bg-gray-300 text-gray-600 shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)] sm:rounded-[30px]">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/hVJtnFfYvHw"
          title="KODA 이야기"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-[30px]"
        ></iframe>
      </div>
    </div>
  )
}

export default KodaStorySection
