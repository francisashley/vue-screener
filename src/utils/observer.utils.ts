/**
 * Observe the size of an element
 * @param element
 * @param onChangeCallback
 * @example
 * const unobserve = observe.width(document.body, ({width, height}) => console.log('Document size changed: ' + width + ', ' + height))
 * unobserve()
 * @returns
 */

type unobserveSize = () => void

export function observeSize(
  element: HTMLElement,
  onChangeCallback: (size: { width: number; height: number }) => unknown,
): unobserveSize {
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      let width = null
      let height = null
      if (entry.contentBoxSize) {
        // Firefox implements `contentBoxSize` as a single content rect, rather than an array
        const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize
        width = contentBoxSize.inlineSize
        height = contentBoxSize.blockSize
      } else {
        width = entry.contentRect.width
        height = entry.contentRect.height
      }
      onChangeCallback({ width, height })
    }
  })

  resizeObserver.observe(element)

  return () => {
    resizeObserver.unobserve(element)
  }
}

export default {
  observeSize,
}
