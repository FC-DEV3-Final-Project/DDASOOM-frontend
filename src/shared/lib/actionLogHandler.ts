import { getElementPath } from '@/shared/utils/domUtils'

interface CreateActionLogHandlerProps {
  pagePath: string
  logAction: (action: string, payload?: object) => void
}

export const createActionLogHandler = ({ pagePath, logAction }: CreateActionLogHandlerProps) => {
  return (e: React.SyntheticEvent) => {
    const target = e.target as HTMLElement
    const eventType = e.type
    const elementPath = getElementPath(target)
    const actionName = `${pagePath}-${eventType}`

    logAction(actionName, {
      elementPath,
      elementId: target.id || undefined,
      elementClass: target.className || undefined,
      pagePath,
      eventType,
    })
  }
}
