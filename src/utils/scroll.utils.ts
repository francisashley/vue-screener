import { debounce } from 'lodash-es'

function isHorizontallyScrollable(element: HTMLElement) {
  return element.scrollWidth > element.clientWidth
}

function isScrolledToStartHorizontally(element: HTMLElement) {
  return element.scrollLeft === 0
}

function isScrolledToEndHorizontally(element: HTMLElement) {
  return Math.round(element.scrollWidth - element.scrollLeft) === element.clientWidth
}

export function observeHorizontalScrollability(
  element: HTMLElement,
  callback: (state: { isXScrollable: boolean; isXScrolledStart: boolean; isXScrolledEnd: boolean }) => void,
  debounceTime: number = 20,
) {
  const updateScrollState = debounce(() => {
    callback({
      isXScrollable: isHorizontallyScrollable(element),
      isXScrolledStart: isScrolledToStartHorizontally(element),
      isXScrolledEnd: isScrolledToEndHorizontally(element),
    })
  }, debounceTime)

  updateScrollState()

  const resizeObserver = new ResizeObserver(updateScrollState)
  resizeObserver.observe(element)

  element.addEventListener('scroll', updateScrollState)

  return {
    disconnect: () => {
      updateScrollState.cancel()
      resizeObserver.disconnect()
      element.removeEventListener('scroll', updateScrollState)
    },
  }
}
