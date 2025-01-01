import { onMounted, ref } from 'vue'

import { observeHorizontalScrollability } from '../utils/scroll.utils'

export const useScrollable = () => {
  const elRef = ref()
  const hasHorizontalOverflow = ref(false)
  const isScrolledToRightEdge = ref(false)

  onMounted(() => {
    if (elRef.value) {
      observeHorizontalScrollability(elRef.value, (state) => {
        hasHorizontalOverflow.value = state.isXScrollable
        isScrolledToRightEdge.value = state.isXScrolledEnd
      })
    }
  })

  return {
    ref: elRef,
    hasHorizontalOverflow,
    isScrolledToRightEdge,
  }
}
