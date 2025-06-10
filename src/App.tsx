import { Checkbox } from '@krds-ui/core'
import { useState } from 'react'
import MemorialBadge from '@/shared/components/MemorialBadge'

export default function App() {
  const [status, setStatus] = useState<'on' | 'off' | 'intermediate'>('off')

  const handleChange = (newStatus: 'on' | 'off' | 'intermediate') => {
    setStatus(newStatus)
    console.log('Changed to:', newStatus)
  }

  return (
    <>
      <MemorialBadge donor={{ name: '김김김', age: 23, gender: '남' }} />
      <h1 className="text-primary">KRDS UI 컴포넌트 테스트 입니다.</h1>
      <h1 className="text-secondary-50">KRDS UI 컴포넌트 테스트 입니다.</h1>
      <h1 className="text-display-l">KRDS UI 컴포넌트 테스트 입니다.</h1>
      <div className="tablet:text-base desktop:text-lg bg-warning text-sm">반응형 텍스트</div>
      <Checkbox id="1" label="hello" onChange={handleChange} status={status}></Checkbox>
    </>
  )
}
