import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useActionLogger } from '@/shared/lib/actionLogger'
import { createActionLogHandler } from '@/shared/lib/actionLogHandler'
import { useLogFlusher } from '@/shared/hooks/useLogFlusher'
import { ActionLogContext } from '@/shared/context/ActionLogContext'

export const ActionLogProvider = ({ children }: { children: React.ReactNode }) => {
  //  로그 자동 전송 훅 호출 (이제 별도 컴포넌트 불필요)
  useLogFlusher({ interval: 60000, maxCount: 10 })

  //  액션 로거 & 이벤트 핸들러 세팅
  const { logAction } = useActionLogger()
  const location = useLocation()
  const pagePath = useMemo(
    () => location.pathname.replace(/\//g, '-').substring(1) || 'home',
    [location.pathname],
  )
  const handleEvent = useMemo(
    () => createActionLogHandler({ pagePath, logAction }),
    [pagePath, logAction],
  )

  return (
    <ActionLogContext.Provider value={{ logAction }}>
      <div onClick={handleEvent} onSubmit={handleEvent} onChange={handleEvent}>
        {children}
      </div>
    </ActionLogContext.Provider>
  )
}
