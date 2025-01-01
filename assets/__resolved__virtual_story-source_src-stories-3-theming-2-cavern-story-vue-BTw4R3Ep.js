const __resolved__virtual_storySource_srcStories3Theming2CavernStoryVue = `<template>
  <Story title="2. Cavern theme" source="-">
    <div class="vsc-bg-[#171717] vsc-min-h-[calc(100vh_-_16px)]">
      <div class="vsc-flex vsc-p-4 vsc-justify-between vsc-items-center vsc-text-white">
        <h3 v-text="'Cavern theme'" class="vsc-text-base vsc-mb-0" />
        <div class="vsc-flex vsc-items-center vsc-gap-2">
          <VueScreenerSearch
            :screener="screener"
            class="vsc-border-[#2a2b2b] vsc-bg-[#171717] vsc-text-white vsc-h-[30px]"
          />
          <VueScreenerSearchOptions
            :screener="screener"
            class="vsc-border-[#2a2b2b] vsc-bg-[#171717] vsc-p-px vsc-h-[30px]"
            toggle-button-class="vsc-bg-transparent hover:vsc-bg-[#2a2b2b] vsc-text-white vsc-rounded-sm vsc-w-[26px] vsc-h-[26px]"
            toggle-button-active-class="vsc-bg-[#3e51b5]"
          />
        </div>
      </div>

      <VueScreener :screener="screener" class="vsc-border-transparent">
        <template #default="{ screener: internalScreener }">
          <VueScreenerTableView :screener="internalScreener">
            <VueScreenerTableHead class="vsc-bg-[#171717]">
              <VueScreenerTableHeadCell
                v-for="(column, i) in screener.columns.value"
                :key="i"
                :screener="screener"
                :column="column"
                :text="column.label ?? column.field"
                class="vsc-bg-transparent vsc-border-transparent vsc-uppercase vsc-text-[10px] vsc-h-6 vsc-py-0"
              />
            </VueScreenerTableHead>
            <VueScreenerTableRow
              v-for="(row, i) in screener.paginatedRows.value"
              :key="i"
              class="vsc-font-medium vsc-text-[10px] vsc-text-uppercase vsc-p-2 hover:vsc-bg-[#242424] vsc-border-[#2a2b2b]"
            >
              <VueScreenerTableCell
                v-for="(column, j) in screener.columns.value"
                :key="j"
                :screener="screener"
                :column="column"
                :row="row"
                class="vsc-bg-transparent vsc-border-transparent vsc-text-[11px]"
              />
            </VueScreenerTableRow>
          </VueScreenerTableView>
        </template>
      </VueScreener>

      <div class="vsc-p-4">
        <VueScreenerPagination :screener="screener">
          <VueScreenerPaginationResults
            :total="screener.queriedRows.value.length ?? 0"
            :current-page="screener.searchQuery.value.page"
            :per-page="screener.searchQuery.value.rowsPerPage"
            class="vsc-text-xs vsc-min-w-[150px]"
          />
          <VueScreenerPaginationButtons
            :total="screener.queriedRows.value.length"
            :per-page="screener.searchQuery.value.rowsPerPage"
            :current-page="screener.searchQuery.value.page"
            @go-to="screener.actions.goToPage"
            button-class="vsc-text-white vsc-h-7 vsc-py-0 vsc-px-5 vsc-bg-[#171717] hover:vsc-bg-[#2a2b2b] vsc-border-[#2a2b2b] hover:vsc-border-[#2a2b2b]"
            active-button-class="vsc-border-[#2a2b2b] vsc-text-[#2463eb]"
          />
          <VueScreenerPaginationRowsPerPage
            :value="screener.searchQuery.value.rowsPerPage"
            @change="screener.actions.setPerPage"
            class="vsc-bg-[#171717] vsc-border-[#2a2b2b] vsc-text-white vsc-h-7 vsc-ml-auto"
          />
        </VueScreenerPagination>
      </div>
    </div>
  </Story>
</template>

<script lang="ts" setup>
import {
  VueScreener,
  VueScreenerSearch,
  VueScreenerSearchOptions,
  VueScreenerPagination,
  useVueScreener,
  VueScreenerPaginationRowsPerPage,
  VueScreenerPaginationResults,
  VueScreenerPaginationButtons,
  VueScreenerTableView,
  VueScreenerTableHead,
  VueScreenerTableHeadCell,
  VueScreenerTableRow,
  VueScreenerTableCell,
} from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useVueScreener(baseData, {
  columns: {
    before: { label: '', width: '1fr', order: 0 },
    id: { width: 'min-content', order: 1 },
    first_name: { width: 'min-content', order: 2 },
    last_name: { width: '1fr', order: 3 },
    full_name: { width: '1fr', order: 4 },
    email: { width: '1fr', order: 5 },
    gender: { width: '1fr', order: 6 },
    ip_address: { width: '1fr', order: 7 },
    after: { label: '', width: '1fr', order: 8 },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories3Theming2CavernStoryVue as default
};
