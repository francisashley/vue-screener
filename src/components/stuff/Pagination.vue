<template>
  <div :class="['vue-screener__pagination', classes?.PAGINATION]">
    <div :class="['vue-screener__pagination__info', classes?.PAGINATION_INFO]">
      <template v-if="!totalItems">Showing 0 results</template>
      <template v-else>
        Showing {{ firstIndexOfCurrentPage }}-{{ lastIndexOfCurrentPage }}
        of
        {{ totalItems }}
      </template>
    </div>

    <ul :class="['vue-screener__pagination__nav', classes?.PAGINATION_NAV]">
      <button
        :disabled="!canNavigateFirst"
        @click="handleClickFirst"
        :class="[
          'vue-screener__pagination__button',
          'vue-screener__pagination__button--first',
          !canNavigateFirst && 'vue-screener__pagination__button--disabled',
          !canNavigateFirst && classes?.['PAGINATION_BUTTON--DISABLED'],
          classes?.PAGINATION_BUTTON,
          classes?.PAGINATION_FIRST_BUTTON,
        ]"
      >
        First
      </button>
      <button
        :disabled="!canNavigatePrev"
        @click="handleClickPrev"
        :class="[
          'vue-screener__pagination__button',
          'vue-screener__pagination__button--prev',
          !canNavigatePrev && 'vue-screener__pagination__button--disabled',
          !canNavigatePrev && classes?.['PAGINATION_BUTTON--DISABLED'],
          classes?.PAGINATION_BUTTON,
          classes?.PAGINATION_PREV_BUTTON,
        ]"
      >
        Prev
      </button>
      <button
        v-for="page in getPages"
        :key="page"
        @click="handleSelectPage(page)"
        :class="[
          'vue-screener__pagination__button',
          'vue-screener__pagination__button--page',
          isActive(page) && 'vue-screener__pagination__button--active',
          isActive(page) && classes?.['PAGINATION_BUTTON--ACTIVE'],
          classes?.PAGINATION_BUTTON,
          classes?.PAGINATION_PAGE_BUTTON,
        ]"
      >
        {{ page }}
      </button>
      <button
        :disabled="!canNavigateNext"
        @click="handleClickNext"
        :class="[
          'vue-screener__pagination__button',
          'vue-screener__pagination__button--next',
          !canNavigateNext && 'vue-screener__pagination__button--disabled',
          !canNavigateNext && classes?.['PAGINATION_BUTTON--DISABLED'],
          classes?.PAGINATION_BUTTON,
          classes?.PAGINATION_NEXT_BUTTON,
        ]"
      >
        Next
      </button>
      <button
        :disabled="!canNavigateLast"
        @click="handleClickLast"
        :class="[
          'vue-screener__pagination__button',
          'vue-screener__pagination__button--last',
          !canNavigateLast && 'vue-screener__pagination__button--disabled',
          !canNavigateLast && classes?.['PAGINATION_BUTTON--DISABLED'],
          classes?.PAGINATION_BUTTON,
          classes?.PAGINATION_LAST_BUTTON,
        ]"
      >
        Last
      </button>
    </ul>

    <div
      :class="[
        'vue-screener__pagination__per-page',
        classes?.PAGINATION_PER_PAGE,
      ]"
    >
      <input
        type="number"
        :value="perPage"
        min="1"
        step="1"
        @input="handleChangePerPage"
        :class="[
          'vue-screener__pagination__per-page-input',
          classes?.PAGINATION_PER_PAGE_INPUT,
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, watch } from "vue";
import { InlineClass } from "../VueScreener.vue";

const props = withDefaults(
  defineProps<{
    currentPage?: number;
    totalItems?: number;
    perPage?: number;
    classes?: Partial<Record<InlineClass, string>>;
  }>(),
  {
    currentPage: 1,
    totalItems: 0,
    perPage: 25,
    classes: () => ({}),
  },
);

const emit = defineEmits(["change-page", "change-per-page"]);

const totalPages = computed((): number => {
  return Math.ceil(props.totalItems / props.perPage) || 0;
});

const getPages = computed(() => {
  let pages = [props.currentPage - 1, props.currentPage, props.currentPage + 1];
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
  return props.currentPage > 1;
});

const canNavigatePrev = computed(() => {
  return props.currentPage > 1;
});

const canNavigateNext = computed(() => {
  return props.currentPage < totalPages.value;
});

const canNavigateLast = computed(() => {
  return props.currentPage < totalPages.value;
});

const firstIndexOfCurrentPage = computed(() => {
  return props.currentPage * props.perPage - props.perPage + 1;
});

const lastIndexOfCurrentPage = computed(() => {
  return props.currentPage * props.perPage > props.totalItems
    ? props.totalItems
    : props.currentPage * props.perPage;
});

const currentPageIsInRange = computed((): boolean => {
  return totalPages.value >= props.currentPage;
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
  return page === props.currentPage;
};

const ensureCurrentPageIsValid = (): void => {
  if (!currentPageIsInRange.value) {
    handleSelectPage(totalPages.value ? totalPages.value : 1);
  }
};

const handleClickFirst = () => {
  emit("change-page", 1);
};

const handleClickPrev = () => {
  emit("change-page", canNavigatePrev.value ? props.currentPage - 1 : 1);
};

const handleClickNext = () => {
  emit(
    "change-page",
    canNavigateNext.value ? props.currentPage + 1 : totalPages.value,
  );
};

const handleClickLast = () => {
  emit("change-page", totalPages.value);
};

const handleSelectPage = (targetPage: number) => {
  emit("change-page", targetPage);
};

const handleChangePerPage = (event: Event): void => {
  const perPage = Number((event.target as HTMLInputElement).value);
  emit("change-per-page", perPage);
};
</script>

<style lang="scss">
.vue-screener__pagination {
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
