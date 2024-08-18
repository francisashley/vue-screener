<template>
  <div class="vs-pagination">
    <div class="vs-pagination__side vs-pagination__side--left">
      <template v-if="!screener.totalItems.value">Showing 0 results</template>
      <template v-else>
        Showing {{ firstIndexOfCurrentPage }}-{{ lastIndexOfCurrentPage }} of {{ screener.totalItems.value }}
      </template>
    </div>

    <div class="vs-pagination__nav">
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
    </div>

    <div class="vs-pagination__side vs-pagination__side--right">
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
  --vs-text-color: black;
  --vs-side-width: 150px;
  --vs-nav-gap: 8px;
  --vs-font-size: inherit;

  --vs-button-padding: 3px 8px;
  --vs-button-color: black;
  --vs-button-color--active: blue;
  --vs-button-bg-color: #efefef;
  --vs-button-bg-color--hover: #e5e5e5;
  --vs-button-bg-color--active: var(--vs-button-bg-color);
  --vs-button-border: thin solid #767676;
  --vs-button-border--hover: thin solid #4f4f4f;
  --vs-button-border--active: thin solid #8c8c8c;
  --vs-button-border-radius: 4px;

  --vs-text-input-width: 100px;
  --vs-text-input-height: 20px;
  --vs-text-input-border-radius: 4px;
  --vs-text-input-border: thin solid #767676;
  --vs-text-input-border--focus: var(--vs-text-input-border);
  --vs-text-input-color: black;
  --vs-text-input-color--focus: var(--vs-text-input-color);
  --vs-text-input-bg-color: white;
  --vs-text-input-bg-color--focus: var(--vs-text-input-bg-color);

  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  color: var(--vs-text-color);
  gap: var(--vs-nav-gap);
  font-size: var(--vs-font-size);

  &__side {
    display: inline-flex;
    width: var(--vs-side-width);

    &--right {
      justify-content: flex-end;
    }
  }

  &__nav {
    display: flex;
    gap: var(--vs-nav-gap);
  }

  &__button {
    padding: var(--vs-button-padding);
    color: var(--vs-button-color);
    background: var(--vs-button-bg-color);
    border: var(--vs-button-border);
    border-radius: var(--vs-button-border-radius);

    &--active {
      color: var(--vs-button-color--active);
      background: var(--vs-button-bg-color--active);
      border: var(--vs-button-border--active);
    }

    &:not(#{&}--disabled):hover {
      background: var(--vs-button-bg-color--hover);
      border: var(--vs-button-border--hover);
    }

    &--disabled {
      opacity: 0.5;
    }
  }

  &__per-page-input {
    outline: none;
    width: var(--vs-text-input-width);
    height: var(--vs-text-input-height);
    border: var(--vs-text-input-border);
    border-radius: var(--vs-text-input-border-radius);
    color: var(--vs-text-input-color);
    background: var(--vs-text-input-bg-color);

    &:focus {
      border: var(--vs-text-input-border--focus);
      color: var(--vs-text-input-color--focus);
      background: var(--vs-text-input-bg-color--focus);
    }
  }
}
</style>
