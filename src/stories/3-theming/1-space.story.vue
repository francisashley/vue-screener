<template>
  <Story title="1. Space theme" source="-">
    <div class="vsc-bg-[#101827] vsc-p-4 vsc-min-h-[calc(100vh_-_16px)]">
      <div class="vsc-flex vsc-justify-between vsc-items-center vsc-mb-4 vsc-text-white">
        <h3 class="vsc-text-base vsc-mb-0">Space theme</h3>
        <div class="vsc-flex vsc-items-center vsc-gap-2">
          <VueScreenerSearch
            :screener="screener"
            class="vsc-border-[#374151] vsc-bg-[#1f2937] vsc-text-white"
            toggle-button-class="vsc-bg-[#1f2937] hover:vsc-bg-[#374151] vsc-text-white vsc-rounded-sm vsc-w-[25px] vsc-h-[25px]"
            toggle-button-active-class="vsc-bg-[#3e51b5]"
          />
        </div>
      </div>
      <VueScreener :screener="screener" class="vsc-mb-4 vsc-border-gray-700">
        <template #default="{ screener: internalScreener }">
          <VueScreenerTableState :screener="internalScreener">
            <VueScreenerTableHead class="vsc-border-gray-700">
              <VueScreenerTableHeadCell
                v-for="(column, i) in screener.columns.value"
                :key="i"
                :screener="screener"
                :column="column"
                :text="column.label ?? column.field"
                class="vsc-bg-gray-800 vsc-border-gray-700"
              />
            </VueScreenerTableHead>
            <VueScreenerTableRow v-for="(row, i) in screener.paginatedRows.value" :key="i" class="vsc-border-gray-700">
              <VueScreenerTableCell
                v-for="(column, j) in screener.columns.value"
                :key="j"
                :screener="screener"
                :column="column"
                :row="row"
                class="vsc-bg-gray-900 vsc-border-gray-700"
              />
            </VueScreenerTableRow>
          </VueScreenerTableState>
        </template>
      </VueScreener>
      <VueScreenerPagination :screener="screener">
        <VueScreenerPaginationResults
          :total="screener.queriedRows.value.length ?? 0"
          :current-page="screener.searchQuery.value.page"
          :per-page="screener.searchQuery.value.rowsPerPage"
        />
        <VueScreenerPaginationButtons
          :total="screener.queriedRows.value.length"
          :per-page="screener.searchQuery.value.rowsPerPage"
          :current-page="screener.searchQuery.value.page"
          @go-to="screener.actions.goToPage"
          button-class="vsc-bg-[#1f2937] hover:vsc-bg-[#374151] vsc-border-[#374151] hover:vsc-border-[#374151]"
          active-button-class="vsc-border-[#374151] vsc-text-[#2463eb]"
        />
        <VueScreenerPaginationRowsPerPage
          :value="screener.searchQuery.value.rowsPerPage"
          @change="screener.actions.setPerPage"
          class="vsc-ml-auto vsc-bg-[#1f2937] vsc-border-[#374151] vsc-text-white"
        />
      </VueScreenerPagination>
    </div>
  </Story>
</template>

<script lang="ts" setup>
import {
  VueScreener,
  VueScreenerSearch,
  VueScreenerPagination,
  useVueScreener,
  VueScreenerPaginationRowsPerPage,
  VueScreenerPaginationResults,
  VueScreenerPaginationButtons,
  VueScreenerTableState,
  VueScreenerTableHead,
  VueScreenerTableHeadCell,
  VueScreenerTableRow,
  VueScreenerTableCell,
} from '../../index'

import baseData from '../../fixtures/data.json'

const screener = useVueScreener(baseData, {
  columns: {
    id: {
      width: 'minmax(50px, max-content)',
    },
  },
})
</script>
