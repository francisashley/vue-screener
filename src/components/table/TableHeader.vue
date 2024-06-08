<template>
  <div :style="rowStyle" class="vs-table__row vs-table__row--header">
    <slot
      v-for="(column, i) in props.screener.columns.value"
      :key="i"
      name="head"
      :column="column"
      :sort-direction="getSortDirection(column.field)"
      @on-sort="screener.actions.sort"
    >
      <TableHead :column="column" :sort-direction="getSortDirection(column.field)" @on-sort="screener.actions.sort" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Screener } from '../../interfaces/screener'
import TableHead from './TableHead.vue'

const props = defineProps<{
  screener: Screener
}>()

const rowStyle = computed(() => {
  const colCount = props.screener.columns.value.length

  return {
    display: 'grid',
    'grid-template-columns': 'subgrid',
    'grid-column': `1 / ${colCount + 1}`,
  }
})

const getSortDirection = (field: string): 'asc' | 'desc' | null => {
  if (props.screener.sortField.value === field) {
    return props.screener.sortDirection.value
  }
  return null
}
</script>

<style lang="scss">
.vs-table__row {
  border-bottom: thin solid black;
}
</style>
