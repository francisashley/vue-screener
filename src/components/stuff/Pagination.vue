<template>
  <div class="ds-pagination">
    <ul v-if="pages.length > 1" class="ds-pagination__buttons">
      <li
        v-for="page in pages"
        :key="page"
        class="ds-pagination__buttons-button"
        :class="isActive(page) && 'ds-pagination__buttons-button--active'"
      >
        <a href="#" @click.prevent="selectPage(page)">{{ page }}</a>
      </li>
    </ul>
    <div class="ds-pagination__details">
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
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, watch } from "vue";

const {
  currentPage = 1,
  totalItems = 0,
  perPage = 25,
} = defineProps<{
  currentPage?: number;
  totalItems?: number;
  perPage?: number;
}>();

const emit = defineEmits(["change-page"]);

const totalPages = computed((): number => {
  return Math.ceil(totalItems / perPage);
});

const pages = computed((): number[] => {
  return Array.from(new Array(totalPages.value + 1).keys()).slice(1);
});

const firstIndexOfCurrentPage = computed(() => {
  return currentPage * perPage - perPage + 1;
});

const lastIndexOfCurrentPage = computed(() => {
  return currentPage * perPage > totalItems
    ? totalItems
    : currentPage * perPage;
});

const currentPageIsInRange = computed((): boolean => {
  return totalPages.value >= currentPage;
});

onMounted(() => {
  ensureCurrentPageIsValid();
});

watch(
  () => totalItems,
  () => {
    ensureCurrentPageIsValid();
  },
);

const isActive = (page: number): boolean => {
  return page === currentPage;
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

<style scoped>
.ds-pagination {
  display: flex;
}

.ds-pagination__buttons {
  display: flex;
  flex-wrap: wrap;
  padding: 0 !important;
  margin: 0 !important;
  list-style-type: none;
}

.ds-pagination__buttons-button {
  margin: 0 10px 0 0 !important;
}

.ds-pagination__buttons-button a {
  text-decoration: none;
}

.ds-pagination__buttons-button--active a {
  color: #000 !important;
}

.ds-pagination__details {
  margin-left: auto;
  white-space: nowrap;
}
</style>
