<template>
  <div class="vue-screener__pagination">
    <div class="vue-screener__pagination__details">
      <template v-if="!totalItems">Showing 0 results</template>
      <template v-else-if="lastIndexOfCurrentPage < perPage">
        Showing {{ lastIndexOfCurrentPage }} of {{ totalItems }}
      </template>
      <template v-else>
        Showing {{ firstIndexOfCurrentPage }}-{{ lastIndexOfCurrentPage }}
        of
        {{ totalItems }}
      </template>
    </div>
    <ul class="vue-screener__pagination__buttons">
      <li
        v-for="page in pages"
        :key="page"
        class="vue-screener__pagination__buttons-button"
        :class="
          isActive(page) && 'vue-screener__pagination__buttons-button--active'
        "
      >
        <a href="#" @click.prevent="selectPage(page)">{{ page }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, watch } from "vue";

const props = withDefaults(
  defineProps<{
    currentPage?: number;
    totalItems?: number;
    perPage?: number;
  }>(),
  {
    currentPage: 1,
    totalItems: 0,
    perPage: 25,
  },
);

const emit = defineEmits(["change-page"]);

const totalPages = computed((): number => {
  return Math.ceil(props.totalItems / props.perPage) || 1;
});

const pages = computed((): number[] => {
  return Array.from(new Array(totalPages.value + 1).keys()).slice(1);
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
    selectPage(totalPages.value ? totalPages.value : 1);
  }
};

const selectPage = (page: number): void => {
  emit("change-page", page);
};
</script>

<style lang="scss">
.vue-screener__pagination {
  display: flex;
  justify-content: space-between;

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    padding: 0 !important;
    margin: 0 !important;
    list-style-type: none;
  }

  &__buttons-button {
    margin: 0 10px 0 0 !important;
  }

  &__buttons-button a {
    text-decoration: none;
  }

  &__buttons-button--active a {
    color: #000 !important;
  }

  &__details {
    white-space: nowrap;
  }
}
</style>
