<template>
  <div
    :class="[
      'vs-table__cell',
      cell.isFirst && 'vs-table__cell--is-first',
      cell.isLast && 'vs-table__cell--is-last',
      cell.hasValue && 'vs-table__cell--hasValue',
      cell.isPinned && 'vs-table__cell--is-pinned',
      cell.type === 'string' && 'vs-table__cell--string',
      cell.type === 'number' && 'vs-table__cell--number',
      cell.type === 'boolean' && 'vs-table__cell--boolean',
      cell.type === 'symbol' && 'vs-table__cell--symbol',
      cell.type === 'undefined' && 'vs-table__cell--undefined',
      cell.type === 'object' && 'vs-table__cell--object',
      cell.type === 'null' && 'vs-table__cell--null',
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
.vs-table {
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

.vs-main--is-scrollable .vs-table__cell--is-pinned {
  box-shadow: -3px 0px 2px rgba(0, 0, 0, 0.11);
  transition: box-shadow 300ms ease-out;
}

.vs-main--is-scrolled-end .vs-table__cell--is-pinned {
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0) !important;
}
</style>
