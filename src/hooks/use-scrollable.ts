import { onMounted, ref } from 'vue'

import { observeHorizontalScrollability } from '../utils/scroll.utils'

export const useScrollable = () => {
  const elRef = ref()
  const isScrollable = ref(false)
  const isScrolledEnd = ref(false)

  onMounted(() => {
    if (elRef.value) {
      observeHorizontalScrollability(elRef.value, (state) => {
        isScrollable.value = state.isXScrollable
        isScrolledEnd.value = state.isXScrolledEnd
      })
    }
  })

  return {
    ref: elRef,
    isScrollable,
    isScrolledEnd,
  }
}
