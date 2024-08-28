<template>
  <div :class="{ [ui.class]: true }">
    <div
      :class="{
        [ui.leftSide.class]: true,
      }"
    >
      <template v-if="!screener.totalItems.value">Showing 0 results</template>
      <template v-else>
        Showing {{ firstIndexOfCurrentPage }}-{{ lastIndexOfCurrentPage }} of {{ screener.totalItems.value }}
      </template>
    </div>

    <div :class="{ [ui.nav.class]: true }">
      <UiButton :disabled="!canNavigateFirst" @click="handleClickFirst" :ui="ui.nav.button">First</UiButton>
      <UiButton :disabled="!canNavigatePrev" @click="handleClickPrev" :ui="ui.nav.button">Prev</UiButton>
      <UiButton
        v-for="page in getPages"
        :key="page"
        :active="isActive(page)"
        @click="handleSelectPage(page)"
        :ui="ui.nav.button"
      >
        {{ page }}
      </UiButton>
      <UiButton :disabled="!canNavigateNext" @click="handleClickNext" :ui="ui.nav.button">Next</UiButton>
      <UiButton :disabled="!canNavigateLast" @click="handleClickLast" :ui="ui.nav.button">Last</UiButton>
    </div>

    <div
      :class="{
        [ui.rightSide.class]: true,
      }"
    >
      <UiInput
        type="number"
        :value="screener.itemsPerPage.value"
        min="1"
        step="1"
        @input="handleChangeItemsPerPage"
        :ui="ui.rightSide.perPageInput"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Screener } from '@/interfaces/screener'
import { computed, onMounted, watch } from 'vue'
import UiButton, { ButtonUI } from './ui/button/Button.vue'
import UiInput, { InputUI } from './ui/input/Input.vue'
import { twMerge } from '../utils/tailwind-merge.utils'

export type ScreenerPaginationUI = {
  class?: string
  leftSide?: {
    class?: string
  }
  rightSide?: {
    class?: string
    perPageInput?: InputUI
  }
  nav?: {
    class?: string
    button?: ButtonUI
  }
}

const props = defineProps<{
  screener: Screener
  ui?: ScreenerPaginationUI
}>()

const uiDefaults = {
  class: 'vsc-flex vsc-items-center vsc-justify-between vsc-text-zinc-300 vsc-text-sm vsc-gap-2 vsc-whitespace-nowrap',
  sideClass: 'vsc-inline-flex vsc-w-[150px]',
  leftSideClass: '',
  rightSideClass: 'vsc-justify-end',
  navClass: 'vsc-flex vsc-gap-2',
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
    leftSide: {
      class: twMerge(uiDefaults.leftSideClass, props.ui?.leftSide?.class),
    },
    rightSide: {
      class: twMerge(uiDefaults.rightSideClass, props.ui?.rightSide?.class),
      perPageInput: props.ui?.rightSide?.perPageInput,
    },
    nav: {
      class: twMerge(uiDefaults.navClass, props.ui?.nav?.class),
      button: props.ui?.nav?.button,
    },
  }
})

const totalPages = computed((): number => {
  return Math.ceil(props.screener.totalItems.value / props.screener.itemsPerPage.value) || 0
})

const getPages = computed(() => {
  let pages = [
    props.screener.currentPage.value - 1,
    props.screener.currentPage.value,
    props.screener.currentPage.value + 1,
  ]
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

const canNavigateFirst = computed(() => {
  return props.screener.currentPage.value > 1
})

const canNavigatePrev = computed(() => {
  return props.screener.currentPage.value > 1
})

const canNavigateNext = computed(() => {
  return props.screener.currentPage.value < totalPages.value
})

const canNavigateLast = computed(() => {
  return props.screener.currentPage.value < totalPages.value
})

const firstIndexOfCurrentPage = computed(() => {
  return props.screener.currentPage.value * props.screener.itemsPerPage.value - props.screener.itemsPerPage.value + 1
})

const lastIndexOfCurrentPage = computed(() => {
  return props.screener.currentPage.value * props.screener.itemsPerPage.value > props.screener.totalItems.value
    ? props.screener.totalItems.value
    : props.screener.currentPage.value * props.screener.itemsPerPage.value
})

const currentPageIsInRange = computed((): boolean => {
  return totalPages.value >= props.screener.currentPage.value
})

onMounted(() => {
  ensureCurrentPageIsValid()
})

watch(
  () => props.screener.totalItems.value,
  () => {
    ensureCurrentPageIsValid()
  },
)

const isActive = (page: number): boolean => {
  return page === props.screener.currentPage.value
}

const ensureCurrentPageIsValid = (): void => {
  if (!currentPageIsInRange.value) {
    handleSelectPage(totalPages.value ? totalPages.value : 1)
  }
}

const handleClickFirst = () => {
  props.screener.currentPage.value = 1
}

const handleClickPrev = () => {
  props.screener.currentPage.value = canNavigatePrev.value ? props.screener.currentPage.value - 1 : 1
}

const handleClickNext = () => {
  props.screener.currentPage.value = canNavigateNext.value ? props.screener.currentPage.value + 1 : totalPages.value
}

const handleClickLast = () => {
  props.screener.currentPage.value = totalPages.value
}

const handleSelectPage = (targetPage: number) => {
  props.screener.currentPage.value = targetPage
}

const handleChangeItemsPerPage = (event: Event): void => {
  const itemsPerPage = Number((event.target as HTMLInputElement).value)
  props.screener.itemsPerPage.value = itemsPerPage
}
</script>
