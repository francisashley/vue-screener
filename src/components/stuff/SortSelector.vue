<template>
  <div class="vue-screener__sort-selector">
    <sort-icon
      class="vue-screener__sort-icon vue-screener__sort-icon--none"
      v-if="sortDirection === null"
    />
    <sort-up-icon
      class="vue-screener__sort-icon vue-screener__sort-icon--asc"
      v-else-if="sortDirection === 'asc'"
    />
    <sort-down-icon
      class="vue-screener__sort-icon vue-screener__sort-icon--desc"
      v-else-if="sortDirection === 'desc'"
    />
  </div>
</template>

<script lang="ts" setup>
import SortIcon from "../icons/SortIcon.vue";
import SortUpIcon from "../icons/SortUpIcon.vue";
import SortDownIcon from "../icons/SortDownIcon.vue";

type SortDirection = null | "asc" | "desc";

const { sortDirection = null } = defineProps<{
  sortDirection?: SortDirection;
}>();
</script>

<style lang="scss">
.vue-screener__sort-selector {
  margin-left: auto;
  height: 24px;
  display: inline-flex;
  align-items: center;
  float: right;
  cursor: pointer;
}
</style>
