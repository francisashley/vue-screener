<template>
  <div :style="tableStyle" class="vs-table">
    <div :style="rowStyle" class="vs-table__row vs-table__row--header">
      <slot
        v-for="(cell, i) in getFields"
        :key="i"
        :name="cell.isPinned ? 'pinned-head' : 'header-cell'"
        :cell="cell"
        :sort-direction="getSortDirection(cell.field)"
        @on-sort="screener.actions.sort"
      >
        <HeaderCell
          :cell="cell"
          :sort-direction="getSortDirection(cell.field)"
          :is-sortable="!cell.isPinned"
          @on-sort="screener.actions.sort"
        />
      </slot>
    </div>

    <div :style="rowStyle" v-for="(row, i) in getRows" :key="i" class="vs-table__row vs-table__row--record">
      <slot
        :name="cell.isPinned ? 'pinned-value' : 'value-cell'"
        :cell="cell"
        v-for="(cell, j) in row"
        :key="j"
        :highlight="highlightText"
        :highlight-value="screener.highlightQuery.value"
      >
        <ValueCell :cell="cell" />
      </slot>
      <!-- Fill empty rows on last page -->
      <template v-if="!row">&nbsp;</template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { highlightText } from '../../utils/text.utils'
import HeaderCell from './TableHeaderCell.vue'
import ValueCell from './TableValueCell.vue'
import { Cell, Screener } from '@/interfaces/screener'

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

const tableStyle = computed(() => {
  let cols = props.screener.fields.value.reduce((acc, field) => {
    const column = props.screener.columns.value[field as any]
    let width = column?.width ?? '1fr'
    if (!isNaN(Number(width))) width = width + 'px'
    return acc + ' ' + width
  }, '')

  if (props.screener.includePinned.value) cols += ' min-content'

  return {
    display: 'grid',
    'grid-template-columns': cols,
  }
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
.vs-table {
  color: black;

  &__row {
    border-bottom: thin solid black;
  }
}
</style>
