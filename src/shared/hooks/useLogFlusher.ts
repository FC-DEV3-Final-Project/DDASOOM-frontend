import { useEffect, useCallback } from 'react'
import { useLogStore } from '@/shared/stores/logStore'
import { useLogMutation } from '@/shared/queries/useLogMutation'
import type { SendLogsParams } from '@/shared/services/logService'

export const useLogFlusher = ({ interval = 1000, maxCount = 10 } = {}) => {
  const logs = useLogStore((s) => s.logs)
  const clearLogs = useLogStore((s) => s.clearLogs)
  const { mutate } = useLogMutation()

  const flush = useCallback(() => {
    if (logs.length === 0) return
    mutate({ logs } as SendLogsParams)
    clearLogs()
  }, [logs, mutate, clearLogs])

  // 개수 기준
  useEffect(() => {
    if (logs.length >= maxCount) flush()
  }, [logs, maxCount, flush])

  // 시간 기준
  useEffect(() => {
    const id = setInterval(flush, interval)
    return () => clearInterval(id)
  }, [flush, interval])

  // 페이지 종료 시
  useEffect(() => {
    const onPageHide = () => {
      const current = useLogStore.getState().logs
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/logs', JSON.stringify({ logs: current }))
      } else {
        mutate({ logs: current } as SendLogsParams)
      }
    }
    window.addEventListener('pagehide', onPageHide)
    return () => window.removeEventListener('pagehide', onPageHide)
  }, [mutate])
}
