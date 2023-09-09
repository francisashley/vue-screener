<template>
  <div :class="['vue-screener__sort-selector', classes?.TABLE_VIEW_SORT]">
    <sort-icon
      :class="classes?.TABLE_VIEW_SORT_NONE"
      v-if="sortDirection === null"
    />
    <sort-up-icon
      :class="classes?.TABLE_VIEW_SORT_ASC"
      v-else-if="sortDirection === 'asc'"
    />
    <sort-down-icon
      :class="classes?.TABLE_VIEW_SORT_DESC"
      v-else-if="sortDirection === 'desc'"
    />
  </div>
</template>

<script lang="ts" setup>
import SortIcon from "../icons/Sort.vue";
import SortUpIcon from "../icons/SortUp.vue";
import SortDownIcon from "../icons/SortDown.vue";
import { InlineClass } from "../VueScreener.vue";

type SortDirection = null | "asc" | "desc";

const { sortDirection = null } = defineProps<{
  sortDirection?: SortDirection;
  classes?: Partial<Record<InlineClass, string>>;
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
