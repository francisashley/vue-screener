<template>
  <div :style="rowStyle" v-for="(row, i) in getRows" :key="i" class="vs-table__row vs-table__row--record">
    <slot
      :name="cell.isPinned ? 'pinned-value' : 'value-cell'"
      :cell="cell"
      v-for="(cell, j) in row"
      :key="j"
      :highlight="highlightText"
      :highlight-value="screener.highlightQuery.value"
    >
      <TableData :cell="cell" />
    </slot>
    <!-- Fill empty rows on last page -->
    <template v-if="!row">&nbsp;</template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { highlightText } from '../../utils/text.utils'
import { Cell, Screener } from '../../interfaces/screener'
import TableData from './TableData.vue'

const props = defineProps<{
  screener: Screener
}>()

const getRows = computed(() => {
  return props.screener.paginatedData.value.map((row) => {
    const cells: Cell[] = row?.map((col, i) => {
      return {
        field: col.key,
        value: col.hasValue ? col.value : '',
        highlightedValue: col.hasValue
          ? highlightText(col.value ? String(col.value) : '', props.screener.highlightQuery.value)
          : '',
        isFirst: i === 0,
        isLast: i === row.length - 1,
        type: col.type,
        row,
      }
    })

    if (props.screener.includePinned.value && row) {
      cells.push({
        field: '',
        value: '',
        highlightedValue: '',
        isLast: true,
        isPinned: true,
        type: 'string',
        row,
      })
    }

    return cells
  })
})

const rowStyle = computed(() => {
  let colCount = props.screener.neueColumns.value.length

  if (props.screener.includePinned.value) colCount++

  return {
    display: 'grid',
    'grid-template-columns': 'subgrid',
    'grid-column': `1 / ${colCount + 1}`,
  }
})
</script>

<style lang="scss">
.vs-table__row {
  border-bottom: thin solid black;
}
</style>
