<template>
  <div class="vue-screener__sort-selector">
    <sort-icon v-if="sortDirection === null" />
    <sort-up-icon v-else-if="sortDirection === 'asc'" />
    <sort-down-icon v-else-if="sortDirection === 'desc'" />
  </div>
</template>

<script lang="ts" setup>
import SortIcon from "../icons/Sort.vue";
import SortUpIcon from "../icons/SortUp.vue";
import SortDownIcon from "../icons/SortDown.vue";

type SortDirection = null | "asc" | "desc";

const { sortDirection = null } = defineProps<{
  sortDirection: SortDirection;
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
