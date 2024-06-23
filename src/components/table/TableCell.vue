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
.vs-table__cell {
  border-right: var(--vs-table-cell__border-right);
  padding: var(--vs-table-cell__padding);

  &--is-last {
    border-right: var(--vs-table-cell--is-last__border-right);
  }

  &--is-pinned {
    position: var(--vs-table-cell--is-pinned__position);
    background: var(--vs-table-cell--is-pinned__background);
    right: var(--vs-table-cell--is-pinned__right);
    border-left: var(--vs-table-cell--is-pinned__border-left);
    margin-left: var(--vs-table-cell--is-pinned__margin-left);
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
