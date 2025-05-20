import { createContext } from 'react'

interface ActionLogContextProps {
  logAction: (action: string, payload?: object) => void
}

export const ActionLogContext = createContext<ActionLogContextProps | null>(null)
