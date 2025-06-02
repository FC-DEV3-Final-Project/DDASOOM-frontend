const CarouselButton = () => {
  return (
    <div className="flex gap-3">
      <div className="border-gray-40 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border">
        <img src="/icon/Arrow.svg" alt="" className="scale-x-[-1]" />
      </div>
      <div className="border-gray-40 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border">
        <img src="/icon/Arrow.svg" alt="" />
      </div>
    </div>
  )
}

export default CarouselButton
