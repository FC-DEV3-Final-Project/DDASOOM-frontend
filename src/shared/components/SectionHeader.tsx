import { Button } from '@krds-ui/core'
import { HandHeart, HeartPulse, IdCard, Mail } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

interface HeaderButtonProps {
  id: string
  label: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  onClick?: () => void
  className?: string
  isActive?: boolean
}

const DEFAULT_HEADER_BUTTONS = [
  { id: 'memorial', label: '기증자 추모관', Icon: HandHeart, route: '/remembrance/member' },
  {
    id: 'heaven-letter',
    label: '하늘나라 편지',
    Icon: HeartPulse,
    route: '/remembrance/letter',
  },
  { id: 'memory-letter', label: '추억의 편지', Icon: IdCard, route: '/remembrance/recipient' },
  {
    id: 'donation-story',
    label: '기부금 스토리',
    Icon: Mail,
    route: '/remembrance/story',
  },
] as const

interface RemembranceHeaderProps {
  title: string
  description?: string
  image?: string
  buttons?: typeof DEFAULT_HEADER_BUTTONS
}

const HeaderButton = ({ label, Icon, onClick, className, isActive }: HeaderButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`rounded-[100px] border px-[24px] py-[12px] transition-colors duration-200 ${
        isActive
          ? 'border-[#E0F5E6] bg-[#34A354] text-white hover:bg-[#278143]'
          : 'border-[#E6E8EA] bg-[#FFFFFF] text-[#33363D] hover:border-[#34A354] hover:bg-[#E0F5E6] hover:text-[#34A354]'
      } ${className ?? ''}`}
    >
      <span
        className={`inline-flex items-center gap-[12px] text-[18px] font-bold transition-colors duration-200 ${isActive ? 'text-white' : 'text-[#33363D] group-hover:text-[#34A354]'}`}
      >
        <Icon
          className={`size-[24px] transition-colors duration-200 ${isActive ? 'text-white' : 'text-[#34A354] group-hover:text-[#34A354]'}`}
        />
        {label}
      </span>
    </Button>
  )
}

const RemembranceHeader = ({
  title,
  description,
  image,
  buttons = DEFAULT_HEADER_BUTTONS,
}: RemembranceHeaderProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header>
      <div className="relative flex h-[100px] flex-row items-center justify-between py-[10px] md:h-auto md:py-[40px]">
        <div className="flex flex-1 flex-col gap-[24px] md:gap-[47px]">
          <div className="flex flex-col gap-[8px]">
            <h1 className="text-[24px] font-bold text-[#131416] md:text-[36px]">{title}</h1>
            <p className="text-[13px] whitespace-pre-line text-[#58616A] md:text-[19px]">
              {description}
            </p>
          </div>
          <div className="hidden gap-[14px] overflow-x-auto pb-2 whitespace-nowrap md:flex">
            {buttons.map(({ id, label, Icon, route }) => (
              <HeaderButton
                key={id}
                id={id}
                label={label}
                Icon={Icon}
                isActive={location.pathname.startsWith(route)}
                onClick={() => navigate(route)}
              />
            ))}
          </div>
        </div>
        <img
          src={image}
          alt="배너 아이콘"
          className="h-20 w-20 flex-shrink-0 md:absolute md:right-0 md:bottom-0 md:h-auto md:w-auto md:pr-[20px]"
        />
      </div>
    </header>
  )
}

export default RemembranceHeader
