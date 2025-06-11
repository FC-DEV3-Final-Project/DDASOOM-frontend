interface Props {
  title: string
  description?: string
  link: string
}

const SectionHeader = ({ title, description, link }: Props) => {
  return (
    <div className="mb-7">
      <a className="mb-1 inline-flex cursor-pointer items-center gap-3" href={link}>
        <h2 className="text-gray-95 inline text-[15px] font-bold sm:text-2xl">{title}</h2>
        <img src="/icon/Arrow.svg" alt="" className="h-[15px] w-[15px] sm:h-[24px] sm:w-[24px]" />
      </a>
      {description && (
        <p className="text-gray-60 text-[13px] font-normal sm:text-[19px]">{description}</p>
      )}
    </div>
  )
}
export default SectionHeader
