<template>
  <div
    v-if="screener.dimensions"
    :class="ui.class"
    class="vsc-border vsc-border-zinc-700 vsc-bg-[#1f1f22] vsc-grid vsc-auto-rows-min"
    :style="style"
  >
    <!-- // Field columns -->
    <SpreadsheetRow :class="ui.headerRow.class">
      <SpreadsheetCell is-header :point="[-1, -1]" />
      <SpreadsheetCell
        is-header
        v-for="(column, ci) in props.screener.columns.value"
        :key="ci"
        :point="[-1, ci]"
        :value="column.field"
      />
    </SpreadsheetRow>
    <SpreadsheetRow v-for="(row, ri) in screener.paginatedRows.value" :key="ri" :class="ui.row.class">
      <!-- // Row index -->
      <SpreadsheetCell is-header :point="[ri, -1]" :value="ri" />
      <SpreadsheetCell
        v-for="(column, ci) in props.screener.columns.value"
        :key="ci"
        :point="[ri, ci]"
        :is-active="activeCell ? activeCell[0] === ri && activeCell[1] === ci : false"
        :value="row?.data[column.field]"
        @select="actions.selectCell([ri, ci])"
        @select-up="actions.moveSelectionUp([ri, ci])"
        @select-right="actions.moveSelectionRight([ri, ci])"
        @select-down="actions.moveSelectionDown([ri, ci])"
        @select-left="actions.moveSelectionLeft([ri, ci])"
        @select-next="actions.moveSelectionNext([ri, ci])"
        @select-prev="actions.moveSelectionPrev([ri, ci])"
        @clear="actions.deleteCell([ri, ci])"
        @update="screener.actions.updateRow(row.id, { [column.field]: $event })"
      />
    </SpreadsheetRow>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { VueScreener } from '../../interfaces/vue-screener'
import { twMerge } from '../../utils/tailwind-merge.utils'
import SpreadsheetCell from '../ui/spreadsheet/SpreadsheetCell.vue'
import SpreadsheetRow from '../ui/spreadsheet/SpreadsheetRow.vue'

export type SpreadsheetViewUI = {
  class?: string
  headerRow: {
    class?: string
  }
  row?: {
    class?: string
  }
}

type Point = [rowIndex: number, colIndex: number]

const props = defineProps<{
  screener: VueScreener
  ui?: SpreadsheetViewUI
}>()

const uiDefaults = {
  class: '',
  headerRow: {
    class: '',
  },
  row: {
    class: '',
  },
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
    headerRow: {
      class: twMerge(uiDefaults.headerRow.class, props.ui?.headerRow?.class),
    },
    row: {
      class: twMerge(uiDefaults.row.class, props.ui?.row?.class),
    },
  }
})

const activeCell = ref<null | Point>(null)

const actions = {
  selectCell: (point: Point) => {
    activeCell.value = point
  },
  moveSelectionPrev: (point: Point) => {
    let nextPoint = point
    if (point[1] > 0) {
      nextPoint = [point[0], point[1] - 1]
    } else {
      nextPoint = [point[0] - 1, props.screener.columns.value.length - 1]
    }
    activeCell.value = nextPoint
  },
  moveSelectionNext: (point: Point) => {
    let nextPoint = point as Point
    if (point[1] < props.screener.columns.value.length - 1) {
      nextPoint = [point[0], point[1] + 1]
    } else {
      nextPoint = [point[0] + 1, 0]
    }
    activeCell.value = nextPoint
  },
  moveSelectionUp: (point: Point) => {
    if (point[0] > 0) {
      activeCell.value = [point[0] - 1, point[1]]
    }
  },
  moveSelectionRight: (point: Point) => {
    if (point[1] < props.screener.columns.value.length - 1) {
      activeCell.value = [point[0], point[1] + 1]
    }
  },
  moveSelectionDown: (point: Point) => {
    if (point[0] < props.screener.paginatedRows.value.length - 1) {
      activeCell.value = [point[0] + 1, point[1]]
    }
  },
  moveSelectionLeft: (point: Point) => {
    if (point[1] > 0) {
      activeCell.value = [point[0], point[1] - 1]
    }
  },
  deleteCell: (point: Point) => {
    const selectedRow = props.screener.paginatedRows.value[point[0]]
    const selectedField = props.screener.columns.value[point[1]].field
    props.screener.actions.updateRow(selectedRow.id, { [selectedField]: null })
  },
}

const style = computed(() => {
  const sizes = props.screener.columns.value.map(() => 'minmax(auto, 300px)')
  return { 'grid-template-columns': 'minmax(48px, min-content) ' + sizes.join(' ') }
})
</script>
