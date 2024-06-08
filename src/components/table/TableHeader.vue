<template>
  <div :style="rowStyle" class="vs-table__row vs-table__row--header">
    <slot
      v-for="(cell, i) in getFields"
      :key="i"
      :name="cell.isPinned ? 'pinned-head' : 'header-cell'"
      :cell="cell"
      :sort-direction="getSortDirection(cell.field)"
      @on-sort="screener.actions.sort"
    >
      <TableHead
        :cell="cell"
        :sort-direction="getSortDirection(cell.field)"
        :is-sortable="!cell.isPinned"
        @on-sort="screener.actions.sort"
      />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Cell, Screener } from '../../interfaces/screener'
import TableHead from './TableHead.vue'

const props = defineProps<{
  screener: Screener
}>()

const getFields = computed(() => {
  const fields: Cell[] = props.screener.fields.value.map((field, i) => {
    return {
      field,
      value: field,
      highlightedValue: '',
      isFirst: i === 0,
      isLast: i === props.screener.fields.value.length - 1,
      type: 'string',
    }
  })

  if (props.screener.includePinned.value) {
    fields.push({
      field: '',
      value: '',
      highlightedValue: '',
      isLast: true,
      isPinned: true,
      type: 'string',
    })
  }

  return fields
})

const rowStyle = computed(() => {
  let colCount = props.screener.fields.value.length

  if (props.screener.includePinned.value) colCount++

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
