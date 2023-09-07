<template>
  <th
    class="ds-table-head-field"
    :class="{ 'ds-table-head-field--is-sortable': isSortable }"
    @click="isSortable && $emit('sort')"
  >
    <slot />
    <div v-if="isSortable" class="ds-table-head-field__sortable-icon">
      <sort-icon v-if="sortDirection === null" />
      <sort-up-icon v-else-if="sortDirection === 'asc'" />
      <sort-down-icon v-else-if="sortDirection === 'desc'" />
    </div>
  </th>
</template>

<script lang="ts" setup>
import SortIcon from "./icons/Sort.vue";
import SortUpIcon from "./icons/SortUp.vue";
import SortDownIcon from "./icons/SortDown.vue";

type SortDirection = null | "asc" | "desc";

const { isSortable = true, sortDirection = null } = defineProps<{
  isSortable?: boolean;
  sortDirection: SortDirection;
}>();
</script>

<style lang="scss" scoped>
.ds-table-head-field {
  font-weight: bold;
  width: 0.1%;
  white-space: nowrap;
  padding: 2px 5px;
  height: 24px;
  box-sizing: border-box;

  &__sortable-icon {
    margin-left: auto;
    height: 24px;
    display: inline-flex;
    align-items: center;
    float: right;
  }

  &--is-sortable {
    cursor: pointer;
    user-select: none;
  }
}
</style>
