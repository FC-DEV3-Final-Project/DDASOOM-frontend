import { useContext } from 'react'
import { ActionLogContext } from '@/shared/context/ActionLogContext'

export const useActionLog = () => {
  const ctx = useContext(ActionLogContext)
  return ctx?.logAction
}
