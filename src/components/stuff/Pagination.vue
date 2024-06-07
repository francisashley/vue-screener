<template>
  <div class="vs-pagination">
    <div class="vs-pagination__info">
      <template v-if="!totalItems">Showing 0 results</template>
      <template v-else>
        Showing {{ firstIndexOfCurrentPage }}-{{ lastIndexOfCurrentPage }}
        of
        {{ totalItems }}
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
import { Screener } from "@/interfaces/screener";
import { computed, onMounted, watch } from "vue";

const props = withDefaults(
  defineProps<{ screener: Screener; totalItems?: number }>(),
  { totalItems: 0 },
);

const totalPages = computed((): number => {
  return Math.ceil(props.totalItems / props.screener.perPage.value) || 0;
});

const getPages = computed(() => {
  let pages = [
    props.screener.currentPage.value - 1,
    props.screener.currentPage.value,
    props.screener.currentPage.value + 1,
  ];
  pages = pages.filter((page) => page > 0);

  if (pages.length < 3) {
    pages.push(pages[pages.length - 1] + 1);
  }

  pages = pages.filter((page) => page <= totalPages.value);

  if (pages.length < 3 && pages[0] > 1) {
    pages.unshift(pages[0] - 1);
  }

  return pages;
});

const canNavigateFirst = computed(() => {
  return props.screener.currentPage.value > 1;
});

const canNavigatePrev = computed(() => {
  return props.screener.currentPage.value > 1;
});

const canNavigateNext = computed(() => {
  return props.screener.currentPage.value < totalPages.value;
});

const canNavigateLast = computed(() => {
  return props.screener.currentPage.value < totalPages.value;
});

const firstIndexOfCurrentPage = computed(() => {
  return (
    props.screener.currentPage.value * props.screener.perPage.value -
    props.screener.perPage.value +
    1
  );
});

const lastIndexOfCurrentPage = computed(() => {
  return props.screener.currentPage.value * props.screener.perPage.value >
    props.totalItems
    ? props.totalItems
    : props.screener.currentPage.value * props.screener.perPage.value;
});

const currentPageIsInRange = computed((): boolean => {
  return totalPages.value >= props.screener.currentPage.value;
});

onMounted(() => {
  ensureCurrentPageIsValid();
});

watch(
  () => props.totalItems,
  () => {
    ensureCurrentPageIsValid();
  },
);

const isActive = (page: number): boolean => {
  return page === props.screener.currentPage.value;
};

const ensureCurrentPageIsValid = (): void => {
  if (!currentPageIsInRange.value) {
    handleSelectPage(totalPages.value ? totalPages.value : 1);
  }
};

const handleClickFirst = () => {
  props.screener.currentPage.value = 1;
};

const handleClickPrev = () => {
  props.screener.currentPage.value = canNavigatePrev.value
    ? props.screener.currentPage.value - 1
    : 1;
};

const handleClickNext = () => {
  props.screener.currentPage.value = canNavigateNext.value
    ? props.screener.currentPage.value + 1
    : totalPages.value;
};

const handleClickLast = () => {
  props.screener.currentPage.value = totalPages.value;
};

const handleSelectPage = (targetPage: number) => {
  props.screener.currentPage.value = targetPage;
};

const handleChangePerPage = (event: Event): void => {
  const perPage = Number((event.target as HTMLInputElement).value);
  props.screener.perPage.value = perPage;
};
</script>

<style lang="scss">
.vs-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  color: #000;

  &__info {
    white-space: nowrap;
    width: 150px;
  }

  &__nav {
    display: flex;
    padding: 0 8px !important;
    margin: 0 !important;
    list-style-type: none;
  }

  &__button {
    margin: 0 10px 0 0 !important;
  }

  &__button--active {
    color: blue;
  }

  &__per-page {
    width: 150px;
    display: inline-flex;
    justify-content: flex-end;
  }

  &__per-page-input {
    width: 60px;
  }
}
</style>
