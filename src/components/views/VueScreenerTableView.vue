<template>
  <VueScreenerSpreadsheetView v-if="screener.preferences.value.editable" :screener="screener" /> <!-- eslint-disable-line -->
  <VueScreenerTable
    v-else
    :columns="screener.columns.value"
    @has-horizontal-overflow="handleHasHorizontalOverflow"
    @is-scrolled-to-right-edge="handleIsScrolledToRightEdge"
  >
    <template #default>
      <VueScreenerTableHead>
        <template v-for="(column, _i) in screener.columns.value" :key="_i">
          <slot name="header-cell" :screener="screener" :column="column">
            <VueScreenerTableHeadCell :screener="screener" :column="column">
              {{ column.label ?? column.field }}
            </VueScreenerTableHeadCell>
          </slot>
        </template>
      </VueScreenerTableHead>
      <template v-for="(row, _i) in screener.paginatedRows.value" :key="_i">
        <VueScreenerTableRow>
          <template v-for="(column, _j) in screener.columns.value" :key="_j">
            <slot
              name="body-cell"
              :column="column"
              :row="row"
              :cell="createCell({ row, column, searchText: screener.searchQuery.value.text })"
              :screener="screener"
            >
              <VueScreenerTableCell :column="column">
                <span v-html="formatCellContent(row.data[column.field], column, row)" />
              </VueScreenerTableCell>
            </slot>
          </template>
        </VueScreenerTableRow>
      </template>
    </template>
  </VueScreenerTable>
</template>

<script lang="ts" setup>
import type { VueScreener, Column, Row, Cell } from '../../interfaces/vue-screener'
import VueScreenerTableRow from '../table/VueScreenerTableRow.vue'
import VueScreenerTableCell from '../table/VueScreenerTableCell.vue'
import VueScreenerTableHeadCell from '../table/VueScreenerTableHeadCell.vue'
import VueScreenerTable from '../table/VueScreenerTable.vue'
import VueScreenerTableHead from '../table/VueScreenerTableHead.vue'
import { highlightMatches } from '../../utils/text.utils'
import VueScreenerSpreadsheetView from '../views/VueScreenerSpreadsheetView.vue'

const props = defineProps<{
  screener: VueScreener
}>()

const formatCellContent = (value: any, column: Column, row: Row): string => {
  // allow the user to format the value
  if (column.format) {
    value = column.format(value, row)
  }
  // highlight search matches
  const disableSearchHighlight = props.screener.preferences.value.disableSearchHighlight
  const text = props.screener.searchQuery.value.text
  if (!disableSearchHighlight && text && value !== undefined) {
    value = highlightMatches(String(value), text)
  }
  return value
}

const handleHasHorizontalOverflow = (hasHorizontalOverflow: boolean) => {
  props.screener.actions.setHasHorizontalOverflow(hasHorizontalOverflow)
}

const handleIsScrolledToRightEdge = (isScrolledToRightEdge: boolean) => {
  props.screener.actions.setIsScrolledToRightEdge(isScrolledToRightEdge)
}

const createCell = ({ row, column, searchText }: { row: Row; column: Column; searchText?: string }): Cell => {
  const value = row.data[column.field]
  const cell: Cell = { row, column, value }

  if (searchText && (typeof value === 'string' || typeof value === 'number')) {
    cell.highlightedValue = formatCellContent(value, column, row)
  }

  return cell
}
</script>
