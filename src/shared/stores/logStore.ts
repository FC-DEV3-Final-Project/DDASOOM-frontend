import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export interface Log {
  action: string
  payload?: object
  timestamp: number
}

interface LogState {
  logs: Log[]
}

interface LogActions {
  addLog: (log: Omit<Log, 'timestamp'>) => void
  clearLogs: () => void
}

export const useLogStore = create(
  combine<LogState, LogActions>({ logs: [] }, (set) => ({
    addLog: (log) => {
      set((state) => ({
        logs: [...state.logs, { ...log, timestamp: Date.now() }],
      }))
    },
    clearLogs: () => set({ logs: [] }),
  })),
)
