interface LetterCardProps {
  item: {
    donorName: string
    letterSeq: number
    letterTitle: string
    letterWriter: string
  }
}

const LetterCard = ({ item }: LetterCardProps) => {
  return (
    <div className="border-red-20 flex flex-col gap-[16px] rounded-[20px] border p-8">
      <div>
        <div className="mb-[6px] flex items-center gap-[6px]">
          <img src="icon/mail.svg" alt="" className="sm:h-[20px] sm:w-[20px]" />
          <p className="text-red-40 text-[13px]">{item.letterSeq}번째 편지</p>
        </div>
        <h3 className="text-gray-80 overflow-hidden text-[17px] font-bold text-ellipsis whitespace-nowrap">
          우와 타이틀인가봐 웅성웅ㅇ성웅성ㅇ웅ㅇ성
        </h3>
      </div>
      <div className="flex gap-5 text-[13px]">
        <div className="flex gap-[7px]">
          <span>기증자</span> <span className="font-bold">{item.donorName}</span>
        </div>
        <div className="flex gap-[7px]">
          <span>추모자</span> <span className="font-bold">{item.letterWriter}</span>
        </div>
      </div>
      <div className="border-gray-20 text-gray-60 flex w-full justify-between border-t-1 pt-[16px] text-[13px]">
        <p>2025. 06. 24.</p>
        <div>
          <span className="mr-3">456</span>
          <span>456</span>
        </div>
      </div>
    </div>
  )
}

export default LetterCard
