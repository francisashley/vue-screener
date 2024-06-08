<template>
  <div :style="tableStyle" class="vs-table-view">
    <div :style="rowStyle" class="vs-table-view__row vs-table-view__row--header">
      <slot
        v-for="(cell, i) in getFields"
        :key="i"
        :name="cell.isStickyAction ? 'sticky-actions-head' : 'header-cell'"
        :cell="cell"
        :sort-direction="getSortDirection(cell.field)"
        @on-sort="screener.actions.sort"
      >
        <HeaderCell
          :cell="cell"
          :sort-direction="getSortDirection(cell.field)"
          :is-sortable="!cell.isStickyAction"
          @on-sort="screener.actions.sort"
        />
      </slot>
    </div>

    <div :style="rowStyle" v-for="(row, i) in getRows" :key="i" class="vs-table-view__row vs-table-view__row--record">
      <slot
        :name="cell.isStickyAction ? 'sticky-actions-value' : 'value-cell'"
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
import { NormalisedRow } from '../../utils/data.utils'
import HeaderCell from './TableViewHeaderCell.vue'
import ValueCell from './TableViewValueCell.vue'
import { Cell } from './TableViewCell.vue'
import { Screener } from '@/interfaces/screener'

const props = defineProps<{
  screener: Screener
  fields: string[]
  rows: NormalisedRow[]
  includeStickyActions?: boolean
}>()

const getFields = computed(() => {
  const fields: Cell[] = props.fields.map((field, i) => {
    return {
      field,
      value: field,
      highlightedValue: '',
      isFirst: i === 0,
      isLast: i === props.fields.length - 1,
      type: 'string',
    }
  })

  if (props.includeStickyActions) {
    fields.push({
      field: '',
      value: '',
      highlightedValue: '',
      isLast: true,
      isStickyAction: true,
      type: 'string',
    })
  }

  return fields
})

const getRows = computed(() => {
  return props.rows.map((row) => {
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

    if (props.includeStickyActions && row) {
      cells.push({
        field: '',
        value: '',
        highlightedValue: '',
        isLast: true,
        isStickyAction: true,
        type: 'string',
        row,
      })
    }

    return cells
  })
})

const tableStyle = computed(() => {
  let cols = props.fields.reduce((acc) => acc + ' 1fr', '')

  if (props.includeStickyActions) cols += ' min-content'

  return {
    display: 'grid',
    'grid-template-columns': cols,
  }
})

const rowStyle = computed(() => {
  let colCount = props.fields.length

  if (props.includeStickyActions) colCount++

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
.vs-table-view {
  color: black;

  &__row {
    border-bottom: thin solid black;
  }
}
</style>
