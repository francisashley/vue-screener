<template>
  <div class="vsc-flex vsc-gap-2">
    <UiButton
      :disabled="!canNavigateFirst"
      @click="emit('go-to', 1)"
      :class="buttonClass"
      :active-class="activeButtonClass"
    >
      First
    </UiButton>
    <UiButton
      :disabled="!canNavigatePrev"
      @click="emit('go-to', currentPage - 1)"
      :class="buttonClass"
      :active-class="activeButtonClass"
    >
      Prev
    </UiButton>
    <UiButton
      v-for="page in getPages"
      :key="page"
      :active="isActive(page)"
      @click="emit('go-to', page)"
      :class="buttonClass"
      :active-class="activeButtonClass"
    >
      {{ page }}
    </UiButton>
    <UiButton
      :disabled="!canNavigateNext"
      @click="emit('go-to', currentPage + 1)"
      :class="buttonClass"
      :active-class="activeButtonClass"
    >
      Next
    </UiButton>
    <UiButton
      :disabled="!canNavigateLast"
      @click="emit('go-to', Math.ceil(total / perPage))"
      :class="buttonClass"
      :active-class="activeButtonClass"
    >
      Last
    </UiButton>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import UiButton from '../ui/button/Button.vue'

const props = defineProps<{
  buttonClass?: string
  activeButtonClass?: string
  total: number
  perPage: number
  currentPage: number
}>()

const emit = defineEmits(['go-to'])

const totalPages = computed(() => Math.ceil(props.total / props.perPage) || 0)

const getPages = computed(() => {
  let pages = [props.currentPage - 1, props.currentPage, props.currentPage + 1]
  pages = pages.filter((page) => page > 0)

  if (pages.length < 3) {
    pages.push(pages[pages.length - 1] + 1)
  }

  pages = pages.filter((page) => page <= totalPages.value)

  if (pages.length < 3 && pages[0] > 1) {
    pages.unshift(pages[0] - 1)
  }

  return pages
})

const canNavigateFirst = computed(() => props.currentPage > 1)
const canNavigatePrev = computed(() => props.currentPage > 1)
const canNavigateNext = computed(() => props.currentPage < totalPages.value)
const canNavigateLast = computed(() => props.currentPage < totalPages.value)

const isActive = (page: number) => page === props.currentPage
</script>
