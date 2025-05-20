export const getElementPath = (element: HTMLElement): string => {
  const path: string[] = []
  let el: HTMLElement | null = element
  while (el && el.tagName && el !== document.body) {
    let name = el.tagName.toLowerCase()
    if (el.id) name += `#${el.id}`
    else if (el.className) name += `.${el.className.split(' ').join('.')}`
    path.unshift(name)
    el = el.parentElement
  }
  return path.join(' > ')
}
