import { useMutation } from '@tanstack/react-query'
import {
  logService,
  type SendLogsParams,
  type SendLogsResponse,
} from '@/shared/services/logService'
import { useLogStore } from '@/shared/stores/logStore'

export const useLogMutation = () => {
  const clearLogs = useLogStore((s) => s.clearLogs)

  return useMutation<SendLogsResponse, unknown, SendLogsParams>({
    // logService.sendLogs는 SendLogsParams를 받아 SendLogsResponse를 반환합니다.
    mutationFn: (params) => logService.sendLogs(params),
    onSuccess: clearLogs,
    // onError는 전역 apiErrorHandler가 처리하므로 생략
  })
}
