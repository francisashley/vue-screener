<template>
  <Table :column-defs="screener.columnDefs.value" :ui="ui.table">
    <template #default="{ isScrollable, isScrolledEnd }">
      <TableHead :ui="ui.table.header">
        <!-- @ts-ignore -->
        <template v-for="(column, _i) in screener.columnDefs.value" :key="_i">
          <slot
            name="table-head"
            :column="column"
            :value="column.field"
            :is-sticky="column.isSticky"
            :is-sticky-overlapping="column.isSticky && isScrollable && !isScrolledEnd"
            :ui="ui.table.header.cell"
            :class="{
              [ui.table.header?.cell.sortableClass]: column.isSortable,
              [ui.table.header?.cell.sortingClass]: Boolean(column.isSortable && getSortDirection(column.field)),
            }"
            @click="handleClickColumnHeader(column)"
          >
            <TableCell
              :value="column.field"
              :is-sticky="column.isSticky"
              :is-sticky-overlapping="column.isSticky && isScrollable && !isScrolledEnd"
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
            </TableCell>
          </slot>
        </template>
      </TableHead>
      <template v-for="(item, _i) in screener.paginatedItems.value" :key="_i">
        <TableRow :ui="ui.table.row">
          <template v-for="(column, _j) in screener.columnDefs.value" :key="_j">
            <slot
              name="table-cell"
              :column="column"
              :value="column.field"
              :is-sticky="column.isSticky"
              :is-sticky-overlapping="column.isSticky && isScrollable && !isScrolledEnd"
              :item="item"
              :ui="ui.table.row?.cell"
              :highlight-matches="highlightMatches"
              :search-text="screener.searchQuery.value.searchText"
            >
              <TableCell
                :column="column"
                :value="column.field"
                :is-sticky="column.isSticky"
                :is-sticky-overlapping="column.isSticky && isScrollable && !isScrolledEnd"
                :item="item"
                :ui="ui.table.row?.cell"
                :highlight-matches="highlightMatches"
                :search-text="screener.searchQuery.value.searchText"
              >
                <slot>
                  <span v-html="processValue(item.data[column.field], column)" />
                </slot>
              </TableCell>
            </slot>
          </template>
        </TableRow>
      </template>
    </template>
  </Table>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { Screener, ColDef } from '../../interfaces/screener'
import TableRow, { TableRowUI } from '../ui/table/TableRow.vue'
import TableCell, { TableCellUI } from '../ui/table/TableCell.vue'
import Table, { TableUI } from '../ui/table/Table.vue'
import TableHead, { TableHeadUI } from '../ui/table/TableHead.vue'
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
  screener: Screener
  ui?: TableViewUI
}>()

const uiDefaults = {
  table: {
    header: {
      cell: {
        class:
          'vsc-inline-flex vsc-items-center vsc-font-bold vsc-whitespace-nowrap vsc-h-8 vsc-gap-2 vsc-bg-[#1f1f22] vsc-text-xs',
        sortableClass: 'vsc-inline-flex vsc-items-center vsc-gap-2 vsc-cursor-pointer',
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
          sortingClass: twMerge(
            props.ui?.table?.header?.cell?.sortingClass,
            props.ui?.table?.header?.cell?.sortingClass,
          ),
          sortIcon: props.ui?.table?.header?.cell?.sortIcon,
        },
      },
      row: props.ui?.table?.row,
    },
  }
})

const getSortDirection = (field: string | number): 'asc' | 'desc' | null => {
  if (props.screener.searchQuery.value.sortField === field) {
    return props.screener.searchQuery.value.sortDirection
  }
  return null
}

const handleClickColumnHeader = (column: ColDef) => {
  if (column.isSortable) {
    props.screener.actions.sort(column.field)
  }
}

const processValue = (value: any, colDef: ColDef): string => {
  // allow the user to format the value
  if (colDef.format) {
    value = colDef.format(value)
  }
  // highlight search matches
  const disableSearchHighlight = props.screener.preferences.value.disableSearchHighlight
  const searchText = props.screener.searchQuery.value.searchText
  if (!disableSearchHighlight && searchText && value !== undefined) {
    value = highlightMatches(String(value), searchText)
  }
  return value
}
</script>
