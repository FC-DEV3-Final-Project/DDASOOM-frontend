import { useNavigate } from 'react-router-dom'

interface Props {
  to: string
  label: string
}

const BackToListButton = ({ to, label }: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(to)
  }

  return (
    <div className="w-full max-w-[1000px] px-5 pt-10 pb-5">
      <button onClick={handleClick} className="text-gray-60 flex items-center gap-2 text-[15px]">
        <img src="/icon/expand_more.svg" alt="" />
        {label}
      </button>
    </div>
  )
}
export default BackToListButton
