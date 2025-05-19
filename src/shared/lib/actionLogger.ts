import { useLogStore } from '@/shared/stores/logStore'

export const useActionLogger = () => {
  const addLog = useLogStore((s) => s.addLog)

  const logAction = (action: string, payload?: object) => {
    addLog({ action, payload })
  }

  return { logAction }
}
