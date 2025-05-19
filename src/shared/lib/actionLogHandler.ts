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
    // elementKey: testid > id > elementPath의 마지막 요소
    let elementKey = ''
    if (target.dataset && target.dataset.testid) {
      elementKey = target.dataset.testid
    } else if (target.id) {
      elementKey = target.id
    } else if (elementPath) {
      // elementPath에서 마지막 요소만 추출 (예: 'div#root > ... > button.btn-primary' → 'button.btn-primary')
      const pathParts = elementPath.split('>')
      elementKey = pathParts[pathParts.length - 1].trim()
    } else {
      elementKey = 'unknown'
    }
    const actionName = `${pagePath}-${elementKey}-${eventType}`

    logAction(actionName, {
      elementPath,
      elementId: target.id || undefined,
      elementClass: target.className || undefined,
      elementTestId: target.dataset?.testid || undefined,
      pagePath,
      eventType,
    })
  }
}
