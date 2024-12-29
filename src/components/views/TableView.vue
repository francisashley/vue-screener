<template>
  <VueScreenerTable :columns="screener.columns.value" :ui="ui.table">
    <template #default="{ isScrollable, isScrolledEnd }">
      <VueScreenerTableHead :ui="ui.table.header">
        <!-- @ts-ignore -->
        <template v-for="(column, _i) in screener.columns.value" :key="_i">
          <slot
            name="header-cell"
            :column="column"
            :value="column.field"
            :is-pinned="column.isPinned"
            :is-pinned-overlapping="column.isPinned && isScrollable && !isScrolledEnd"
            :ui="ui.table.header.cell"
            :class="{
              [ui.table.header?.cell.sortableClass]: column.isSortable,
              [ui.table.header?.cell.sortingClass]: Boolean(column.isSortable && getSortDirection(column.field)),
            }"
            @click="handleClickColumnHeader(column)"
          >
            <VueScreenerTableCell
              :value="column.field"
              :is-pinned="column.isPinned"
              :is-pinned-overlapping="column.isPinned && isScrollable && !isScrolledEnd"
              :ui="ui.table.header.cell"
              :class="{
                [ui.table.header?.cell.sortableClass]: column.isSortable,
                [ui.table.header?.cell.sortingClass]: Boolean(column.isSortable && getSortDirection(column.field)),
              }"
              @click="handleClickColumnHeader(column)"
            >
              <SortIcon
                :direction="getSortDirection(column.field)"
                :ui="ui.table.header?.cell?.sortIcon"
                v-if="column.isSortable && getSortDirection(column.field)"
              />
              <slot>
                <span v-html="column.label" />
              </slot>
            </VueScreenerTableCell>
          </slot>
        </template>
      </VueScreenerTableHead>
      <template v-for="(item, _i) in screener.paginatedRows.value" :key="_i">
        <VueScreenerTableRow :ui="ui.table.row">
          <template v-for="(column, _j) in screener.columns.value" :key="_j">
            <slot
              name="body-cell"
              :column="column"
              :value="column.field"
              :is-pinned="column.isPinned"
              :is-pinned-overlapping="column.isPinned && isScrollable && !isScrolledEnd"
              :item="item"
              :ui="ui.table.row?.cell"
              :highlight-matches="highlightMatches"
              :search-text="screener.searchQuery.value.text"
            >
              <VueScreenerTableCell
                :column="column"
                :value="column.field"
                :is-pinned="column.isPinned"
                :is-pinned-overlapping="column.isPinned && isScrollable && !isScrolledEnd"
                :item="item"
                :ui="ui.table.row?.cell"
                :highlight-matches="highlightMatches"
                :search-text="screener.searchQuery.value.text"
              >
                <slot>
                  <span v-html="processValue(item.data[column.field], column)" />
                </slot>
              </VueScreenerTableCell>
            </slot>
          </template>
        </VueScreenerTableRow>
      </template>
    </template>
  </VueScreenerTable>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { VueScreener, Column } from '../../interfaces/vue-screener'
import VueScreenerTableRow, { TableRowUI } from '../table/VueScreenerTableRow.vue'
import VueScreenerTableCell, { TableCellUI } from '../table/VueScreenerTableCell.vue'
import VueScreenerTable, { TableUI } from '../table/VueScreenerTable.vue'
import VueScreenerTableHead, { TableHeadUI } from '../table/VueScreenerTableHead.vue'
import SortIcon, { SortIconUI } from '../icons/SortIcon.vue'
import { highlightMatches } from '../../utils/text.utils'
import { twMerge } from '../../utils/tailwind-merge.utils'

export type TableViewUI = {
  table: TableUI & {
    header?: TableHeadUI & {
      cell?: TableCellUI & {
        sortableClass?: string
        sortingClass?: string
        sortIcon?: SortIconUI
      }
    }
    row?: TableRowUI & {
      cell?: TableCellUI
    }
  }
}

const props = defineProps<{
  screener: VueScreener
  ui?: TableViewUI
}>()

const uiDefaults = {
  table: {
    header: {
      cell: {
        class:
          'vsc-inline-flex vsc-items-center vsc-font-bold vsc-whitespace-nowrap vsc-h-8 vsc-gap-2 vsc-bg-[#1f1f22] vsc-text-xs last:vsc-border-r-0',
        sortableClass: 'vsc-inline-flex vsc-items-center vsc-gap-2 vsc-cursor-pointer',
      },
    },
    row: {
      class: 'last:vsc-border-b-0',
      cell: {
        class: 'last:vsc-border-r-0',
      },
    },
  },
}

const ui = computed(() => {
  return {
    table: {
      class: props.ui?.table?.class,
      header: {
        class: props.ui?.table?.header?.class,
        cell: {
          class: twMerge(uiDefaults.table.header.cell.class, props.ui?.table?.header?.cell?.class),
          sortableClass: twMerge(
            uiDefaults.table.header.cell.sortableClass,
            props.ui?.table?.header?.cell?.sortableClass,
          ),
          sortingClass: twMerge(uiDefaults.table.header.cell.class, props.ui?.table?.header?.cell?.sortingClass),
          sortIcon: props.ui?.table?.header?.cell?.sortIcon,
        },
      },
      row: {
        ...props.ui?.table?.row,
        class: twMerge(uiDefaults.table.row.class, props.ui?.table?.row?.class),
        cell: {
          ...props.ui?.table?.row?.cell,
          class: twMerge(uiDefaults.table.row.cell.class, props.ui?.table?.row?.cell?.class),
        },
      },
    },
  }
})

const getSortDirection = (field: string | number): 'asc' | 'desc' | null => {
  if (props.screener.searchQuery.value.sortField === field) {
    return props.screener.searchQuery.value.sortDirection
  }
  return null
}

const handleClickColumnHeader = (column: Column) => {
  if (column.isSortable) {
    props.screener.actions.sort(column.field)
  }
}

const processValue = (value: any, column: Column): string => {
  // allow the user to format the value
  if (column.format) {
    value = column.format(value)
  }
  // highlight search matches
  const disableSearchHighlight = props.screener.preferences.value.disableSearchHighlight
  const text = props.screener.searchQuery.value.text
  if (!disableSearchHighlight && text && value !== undefined) {
    value = highlightMatches(String(value), text)
  }
  return value
}
</script>
