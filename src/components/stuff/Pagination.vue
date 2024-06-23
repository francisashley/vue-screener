<template>
  <div class="vs-pagination">
    <div class="vs-pagination__info">
      <template v-if="!screener.totalItems.value">Showing 0 results</template>
      <template v-else>
        Showing {{ firstIndexOfCurrentPage }}-{{ lastIndexOfCurrentPage }}
        of
        {{ screener.totalItems.value }}
      </template>
    </div>

    <ul class="vs-pagination__nav">
      <button
        :disabled="!canNavigateFirst"
        @click="handleClickFirst"
        :class="[
          'vs-pagination__button',
          'vs-pagination__button--first',
          !canNavigateFirst && 'vs-pagination__button--disabled',
        ]"
      >
        First
      </button>
      <button
        :disabled="!canNavigatePrev"
        @click="handleClickPrev"
        :class="[
          'vs-pagination__button',
          'vs-pagination__button--prev',
          !canNavigatePrev && 'vs-pagination__button--disabled',
        ]"
      >
        Prev
      </button>
      <button
        v-for="page in getPages"
        :key="page"
        @click="handleSelectPage(page)"
        :class="[
          'vs-pagination__button',
          'vs-pagination__button--page',
          isActive(page) && 'vs-pagination__button--active',
        ]"
      >
        {{ page }}
      </button>
      <button
        :disabled="!canNavigateNext"
        @click="handleClickNext"
        :class="[
          'vs-pagination__button',
          'vs-pagination__button--next',
          !canNavigateNext && 'vs-pagination__button--disabled',
        ]"
      >
        Next
      </button>
      <button
        :disabled="!canNavigateLast"
        @click="handleClickLast"
        :class="[
          'vs-pagination__button',
          'vs-pagination__button--last',
          !canNavigateLast && 'vs-pagination__button--disabled',
        ]"
      >
        Last
      </button>
    </ul>

    <div class="vs-pagination__per-page">
      <input
        type="number"
        :value="screener.perPage.value"
        min="1"
        step="1"
        @input="handleChangePerPage"
        class="vs-pagination__per-page-input"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Screener } from '@/interfaces/screener'
import { computed, onMounted, watch } from 'vue'

const props = defineProps<{ screener: Screener }>()

const totalPages = computed((): number => {
  return Math.ceil(props.screener.totalItems.value / props.screener.perPage.value) || 0
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
  return props.screener.currentPage.value * props.screener.perPage.value - props.screener.perPage.value + 1
})

const lastIndexOfCurrentPage = computed(() => {
  return props.screener.currentPage.value * props.screener.perPage.value > props.screener.totalItems.value
    ? props.screener.totalItems.value
    : props.screener.currentPage.value * props.screener.perPage.value
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

const handleChangePerPage = (event: Event): void => {
  const perPage = Number((event.target as HTMLInputElement).value)
  props.screener.perPage.value = perPage
}
</script>

<style lang="scss">
.vs-pagination {
  display: var(--vs-pagination__display);
  justify-content: var(--vs-pagination__justify-content);
  align-items: var(--vs-pagination__align-items);
  white-space: var(--vs-pagination__white-space);

  &__info {
    white-space: var(--vs-pagination-info__white-space);
    width: var(--vs-pagination-info__width);
  }

  &__nav {
    display: var(--vs-pagination-nav__display);
    padding: var(--vs-pagination-nav__padding);
    margin: var(--vs-pagination-nav__margin);
    list-style-type: var(--vs-pagination-nav__list-style-type);
  }

  &__button {
    margin: var(--vs-pagination-button__margin);
  }

  &__button--active {
    color: var(--vs-pagination-button--active__color);
  }

  &__per-page {
    width: var(--vs-pagination-per-page__width);
    display: var(--vs-pagination-per-page__display);
    justify-content: var(--vs-pagination-per-page__justify-content);
  }

  &__per-page-input {
    width: var(--vs-pagination-per-page-input__width);
  }
}
</style>
