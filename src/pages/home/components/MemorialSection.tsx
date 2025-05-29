import React from 'react'

const MemorialSection: React.FC = () => {
  return (
    <section className="rounded-lg bg-white p-8 py-12">
      <h2 className="mb-3 text-2xl font-bold text-[#212121]">기증자 추모관 &gt;</h2>
      <p className="mb-8 text-base text-[#616161]">
        생명나눔을 실천하신 분들의 고귀한 뜻, 잊지 않겠습니다.
      </p>

      <div className="grid grid-cols-5 gap-[18px]">
        <div className="flex flex-col items-center">
          <div className="mb-2 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#424242]">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#4CAF50] text-sm font-bold text-white">
              R
            </div>
          </div>
          <p className="text-sm font-semibold text-[#424242]">홍*동님</p>
          <p className="text-xs text-[#616161]">장기+조직</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-2 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#424242]">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#4CAF50] text-sm font-bold text-white">
              R
            </div>
          </div>
          <p className="text-sm font-semibold text-[#424242]">홍*동님</p>
          <p className="text-xs text-[#616161]">장기+조직</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-2 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#424242]">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#4CAF50] text-sm font-bold text-white">
              R
            </div>
          </div>
          <p className="text-sm font-semibold text-[#424242]">홍*동님</p>
          <p className="text-xs text-[#616161]">장기+조직</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-2 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#424242]">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#4CAF50] text-sm font-bold text-white">
              R
            </div>
          </div>
          <p className="text-sm font-semibold text-[#424242]">홍*동님</p>
          <p className="text-xs text-[#616161]">장기+조직</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-2 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#424242]">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#4CAF50] text-sm font-bold text-white">
              R
            </div>
          </div>
          <p className="text-sm font-semibold text-[#424242]">홍*동님</p>
          <p className="text-xs text-[#616161]">장기+조직</p>
        </div>
      </div>
    </section>
  )
}

export default MemorialSection
