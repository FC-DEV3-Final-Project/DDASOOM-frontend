interface MemorialBadgeProps {
  name: string
}

const MemorialBadge = ({ name }: MemorialBadgeProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-[#353B40]">
        <img src="/ribbon.png" alt="Memorial Ribbon" width={54} />
        <p className="text-[19px] font-semibold text-white">
          {name}
          <span className="ml-1 font-normal">님</span>
        </p>
      </div>
    </div>
  )
}

export default MemorialBadge
