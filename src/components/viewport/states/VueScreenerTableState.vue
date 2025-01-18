<template>
  <VueScreenerTable
    :columns="screener.columns.value"
    @has-horizontal-overflow="screener.actions.setHasHorizontalOverflow"
    @is-scrolled-to-right-edge="screener.actions.setIsScrolledToRightEdge"
  >
    <slot>
      <VueScreenerTableHead>
        <slot
          :name="'head-cell:' + column.field"
          v-for="(column, i) in screener.columns.value"
          :key="i"
          :screener="screener"
          :column="column"
          :text="column.label ?? column.field"
        >
          <VueScreenerTableHeadCell :screener="screener" :column="column" :text="column.label ?? column.field" />
        </slot>
      </VueScreenerTableHead>
      <template v-if="screener.paginatedRows.value.length">
        <VueScreenerTableRow v-for="(row, i) in screener.paginatedRows.value" :key="i">
          <slot
            :name="'cell:' + column.field"
            v-for="(column, j) in screener.columns.value"
            :key="j"
            :screener="screener"
            :column="column"
            :row="row"
            :cell="row.cells[column.field]"
            :text="row.cells[column.field]?.htmlValue"
            :is-search-match="row.cells[column.field]?.isSearchMatch"
          >
            <VueScreenerTableCell
              :screener="screener"
              :column="column"
              :row="row"
              :type="row.cells[column.field]?.type"
              :text="row.cells[column.field]?.htmlValue"
              :is-search-match="row.cells[column.field]?.isSearchMatch"
              :disable-data-type-highlight="screener.options.value.disableDataTypeHighlight"
            />
          </slot>
        </VueScreenerTableRow>
      </template>
      <template v-else>
        <VueScreenerTableSummaryRow class="vsc-text-center">
          <div class="vsc-p-4">No results found</div>
        </VueScreenerTableSummaryRow>
      </template>
    </slot>
  </VueScreenerTable>
</template>

<script lang="ts" setup>
import type { IVueScreener } from '../../../interfaces/vue-screener'
import VueScreenerTableRow from '../../table/VueScreenerTableRow.vue'
import VueScreenerTableSummaryRow from '../../table/VueScreenerTableSummaryRow.vue'
import VueScreenerTableCell from '../../table/VueScreenerTableCell.vue'
import VueScreenerTableHeadCell from '../../table/VueScreenerTableHeadCell.vue'
import VueScreenerTable from '../../table/VueScreenerTable.vue'
import VueScreenerTableHead from '../../table/VueScreenerTableHead.vue'

defineProps<{
  screener: IVueScreener
}>()
</script>
