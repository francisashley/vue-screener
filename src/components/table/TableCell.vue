<template>
  <div
    :class="[
      'vs-table__cell',
      isFirst && 'vs-table__cell--is-first',
      isLast && 'vs-table__cell--is-last',
      hasValue && 'vs-table__cell--hasValue',
      isPinned && 'vs-table__cell--is-pinned',
      type === 'string' && 'vs-table__cell--string',
      type === 'number' && 'vs-table__cell--number',
      type === 'boolean' && 'vs-table__cell--boolean',
      type === 'symbol' && 'vs-table__cell--symbol',
      type === 'undefined' && 'vs-table__cell--undefined',
      type === 'object' && 'vs-table__cell--object',
      type === 'null' && 'vs-table__cell--null',
    ]"
  >
    <slot>
      <span v-html="value" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { DataType } from '@/interfaces/screener'

defineProps<{
  value: unknown
  type?: DataType
  isFirst?: boolean
  isLast?: boolean
  hasValue?: boolean
  isPinned?: boolean
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
