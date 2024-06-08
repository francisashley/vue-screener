<template>
  <div
    :class="[
      'vs-table-view__cell',
      cell.isFirst && 'vs-table-view__cell--is-first',
      cell.isLast && 'vs-table-view__cell--is-last',
      cell.hasValue && 'vs-table-view__cell--hasValue',
      cell.isPinned && 'vs-table-view__cell--is-pinned',
      cell.type === 'string' && 'vs-table-view__cell--string',
      cell.type === 'number' && 'vs-table-view__cell--number',
      cell.type === 'boolean' && 'vs-table-view__cell--boolean',
      cell.type === 'symbol' && 'vs-table-view__cell--symbol',
      cell.type === 'undefined' && 'vs-table-view__cell--undefined',
      cell.type === 'object' && 'vs-table-view__cell--object',
      cell.type === 'null' && 'vs-table-view__cell--null',
    ]"
  >
    <slot>
      <span v-html="cell.highlightedValue" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { Cell } from '@/interfaces/screener'

defineProps<{
  cell: Cell
}>()
</script>

<style lang="scss">
.vs-table-view {
  color: black;

  &__cell {
    border-right: thin solid black;
    padding: 2px 5px;
  }

  &__cell--is-last {
    border-right: unset;
  }

  &__cell--is-pinned {
    position: sticky;
    background: white;
    right: 0;
    border-left: thin solid black;
    margin-left: -1px;
  }
}

.vs-main--is-scrollable .vs-table-view__cell--is-pinned {
  box-shadow: -3px 0px 2px rgba(0, 0, 0, 0.11);
  transition: box-shadow 300ms ease-out;
}

.vs-main--is-scrolled-end .vs-table-view__cell--is-pinned {
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0) !important;
}
</style>
