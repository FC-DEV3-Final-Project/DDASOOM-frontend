import { Checkbox } from '@krds-ui/core'
import { useState } from 'react'

export default function App() {
  const [status, setStatus] = useState<'on' | 'off' | 'intermediate'>('off')

  const handleChange = (newStatus: 'on' | 'off' | 'intermediate') => {
    setStatus(newStatus)
    console.log('Changed to:', newStatus)
  }

  return (
    <>
      <h1 className='text-display-l'>KRDS UI 컴포넌트 테스트 입니다.</h1>
      <Checkbox id="1" label="hello" onChange={handleChange} status={status}></Checkbox>
    </>
  )
}
