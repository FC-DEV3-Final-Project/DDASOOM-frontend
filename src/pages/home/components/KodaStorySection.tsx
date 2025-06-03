import React from 'react'

const KodaStorySection: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="header">
        <a className="mb-1 inline-flex cursor-pointer items-center gap-3" href="/event">
          <h2 className="text-gray-95 inline text-2xl font-bold">KODA 이야기</h2>
          <img src="/icon/Arrow.svg" alt="" width={24} height={24} />
        </a>
        <p className="text-gray-60 mb-7 text-[19px] font-normal">
          한국장기조직기증원의 새로운 소식을 만나보세요.
        </p>
      </section>
      <div className="flex aspect-video w-full items-center justify-center rounded-[30px] bg-gray-300 text-gray-600">
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
