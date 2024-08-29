<template>
  <Table :schema="schema" :ui="ui.table">
    <template #default="{ isScrollable, isScrolledEnd }">
      <TableHead :ui="ui.table.header">
        <!-- @ts-ignore -->
        <template v-for="(column, _i) in screener.columns.value" :key="_i">
          <slot
            name="head"
            :column="column"
            :value="column.field"
            :is-first="column.isFirst"
            :is-last="column.isLast"
            :has-value="Boolean(column.field)"
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
              :is-first="column.isFirst"
              :is-last="column.isLast"
              :has-value="Boolean(column.field)"
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
      <template v-for="(item, _i) in screener.items.value" :key="_i">
        <TableRow :ui="ui.table.row">
          <template v-if="item">
            <template v-for="(column, _j) in screener.columns.value" :key="_j">
              <slot
                name="data"
                :column="column"
                :value="column.field"
                :is-first="column.isFirst"
                :is-last="column.isLast"
                :is-sticky="column.isSticky"
                :is-sticky-overlapping="column.isSticky && isScrollable && !isScrolledEnd"
                :item="item"
                :ui="ui.table.row?.cell"
                :highlight-matches="highlightMatches"
                :search-query="screener.searchQuery.value"
              >
                <TableCell
                  :column="column"
                  :value="column.field"
                  :is-first="column.isFirst"
                  :is-last="column.isLast"
                  :is-sticky="column.isSticky"
                  :is-sticky-overlapping="column.isSticky && isScrollable && !isScrolledEnd"
                  :item="item"
                  :ui="ui.table.row?.cell"
                  :highlight-matches="highlightMatches"
                  :search-query="screener.searchQuery.value"
                >
                  <slot>
                    <span v-html="item.fields[column.field]?.htmlValue" />
                  </slot>
                </TableCell>
              </slot>
            </template>
          </template>
          <template v-else>&nbsp;</template>
        </TableRow>
      </template>
    </template>
  </Table>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { Screener, Schema, ColDef } from '../../interfaces/screener'
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

const schema = computed(
  (): Schema => ({
    fields: props.screener.columns.value.map((column) => ({
      field: column.field,
      width: column.width,
      type: 'string',
    })),
  }),
)

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
  if (props.screener.sortField.value === field) {
    return props.screener.sortDirection.value
  }
  return null
}

const handleClickColumnHeader = (column: ColDef) => {
  if (column.isSortable) {
    props.screener.actions.sort(column.field)
  }
}
</script>
