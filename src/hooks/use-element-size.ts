import { onMounted, onUnmounted, ref, Ref } from 'vue'
import { observeSize } from '../utils/observer.utils'

type onResizeHandler = (params: { height: number; width: number }) => void

export const useElementSize = (
  target: Ref<HTMLElement> | Ref<null>,
  handler: onResizeHandler,
  removeWidthObserver?: () => void,
) => {
  if (!window) return

  const height = ref<null | number>(null)
  const width = ref<null | number>(null)

  onMounted(() => {
    const el = target.value
    if (!el) return
    removeWidthObserver = observeSize(target.value, (size) => {
      height.value = size.height
      width.value = size.width
      handler(size)
    })
  })

  onUnmounted(() => removeWidthObserver?.())

  return { height, width }
}
