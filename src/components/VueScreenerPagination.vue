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
  --vs-pagination__padding: 0;
  --vs-pagination__color: black;
  --vs-pagination__height: 40px;
  --vs-pagination__display: flex;
  --vs-pagination__justify-content: space-between;
  --vs-pagination__align-items: center;
  --vs-pagination__white-space: nowrap;
  --vs-pagination__width: 100%;
  --vs-pagination-info__white-space: nowrap;
  --vs-pagination-info__width: 150px;
  --vs-pagination-nav__display: flex;
  --vs-pagination-nav__padding: 0 8px !important;
  --vs-pagination-nav__margin: 0 !important;
  --vs-pagination-nav__list-style-type: none;
  --vs-pagination-button__margin: 0 10px 0 0 !important;
  --vs-pagination-button__height: 26px;
  --vs-pagination-button__padding: 0 8px;
  --vs-pagination-button__background: #efefef;
  --vs-pagination-button__border: thin solid #767676;
  --vs-pagination-button--hover__background-color: #e5e5e5;
  --vs-pagination-button--hover__border: thin solid #4f4f4f;
  --vs-pagination-button--active__background-color: #f5f5f5;
  --vs-pagination-button--active__border: thin solid #8c8c8c;
  --vs-pagination-button--active__color: blue;
  --vs-pagination-per-page__width: 150px;
  --vs-pagination-per-page__display: inline-flex;
  --vs-pagination-per-page__justify-content: flex-end;
  --vs-pagination-per-page-input__width: 60px;
  --vs-pagination-per-page-input__height: 20px;
  --vs-pagination-per-page-input__border-radius: 4px;
  --vs-pagination-per-page-input__border: thin solid #767676;
  --vs-pagination-per-page-input--focus__border: thin solid #4f4f4f;
  --vs-pagination-per-page-input__outline: none;

  padding: var(--vs-pagination__padding);
  color: var(--vs-pagination__color);
  height: var(--vs-pagination__height);
  align-items: var(--vs-footer__align-items);
  display: var(--vs-pagination__display);
  justify-content: var(--vs-pagination__justify-content);
  align-items: var(--vs-pagination__align-items);
  white-space: var(--vs-pagination__white-space);
  width: var(--vs-pagination__width);

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
    height: var(--vs-pagination-button__height);
    padding: var(--vs-pagination-button__padding);
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
    height: var(--vs-pagination-per-page-input__height);
    border: var(--vs-pagination-per-page-input__border);
    border-radius: var(--vs-pagination-per-page-input__border-radius);
    outline: var(--vs-pagination-per-page-input__outline);

    &:focus {
      border: var(--vs-pagination-per-page-input--focus__border);
    }
  }
}
</style>
