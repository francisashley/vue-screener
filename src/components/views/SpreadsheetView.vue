<template>
  <div
    v-if="screener.dimensions"
    :class="ui.class"
    class="vsc-border vsc-border-zinc-700 vsc-bg-[#1f1f22] vsc-grid vsc-auto-rows-min"
    :style="style"
  >
    <!-- // Field columns -->
    <SpreadsheetRow :class="ui.row.class">
      <SpreadsheetCell is-header :point="[-1, -1]" />
      <SpreadsheetCell
        is-header
        v-for="(columnDef, ci) in props.screener.columnDefs.value"
        :key="ci"
        :point="[-1, ci]"
        :value="columnDef.field"
      />
    </SpreadsheetRow>
    <SpreadsheetRow v-for="(item, ri) in screener.paginatedItems.value" :key="ri">
      <!-- // Row index -->
      <SpreadsheetCell is-header :point="[ri, -1]" :value="ri" />
      <SpreadsheetCell
        v-for="(columnDef, ci) in props.screener.columnDefs.value"
        :key="ci"
        :point="[ri, ci]"
        :is-active="activeCell ? activeCell[0] === ri && activeCell[1] === ci : false"
        :value="item?.data[columnDef.field]"
        @select="actions.selectCell([ri, ci])"
        @select-up="actions.moveSelectionUp([ri, ci])"
        @select-right="actions.moveSelectionRight([ri, ci])"
        @select-down="actions.moveSelectionDown([ri, ci])"
        @select-left="actions.moveSelectionLeft([ri, ci])"
        @select-next="actions.moveSelectionNext([ri, ci])"
        @select-prev="actions.moveSelectionPrev([ri, ci])"
        @clear="actions.deleteCell([ri, ci])"
        @update="screener.actions.updateItem(item.id, { [columnDef.field]: $event })"
      />
    </SpreadsheetRow>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { Screener } from '../../interfaces/screener'
import { twMerge } from '../../utils/tailwind-merge.utils'
import SpreadsheetCell from '../ui/spreadsheet/SpreadsheetCell.vue'
import SpreadsheetRow from '../ui/spreadsheet/SpreadsheetRow.vue'

export type SpreadsheetViewUI = {
  class?: string
  row?: {
    class?: string
  }
}

type Point = [rowIndex: number, colIndex: number]

const props = defineProps<{
  screener: Screener
  ui?: SpreadsheetViewUI
}>()

const uiDefaults = {
  class: '',
  row: {
    class: '',
  },
}

const ui = computed(() => {
  return {
    class: twMerge(uiDefaults.class, props.ui?.class),
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
      nextPoint = [point[0] - 1, props.screener.columnDefs.value.length - 1]
    }
    activeCell.value = nextPoint
  },
  moveSelectionNext: (point: Point) => {
    let nextPoint = point as Point
    if (point[1] < props.screener.columnDefs.value.length - 1) {
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
    if (point[1] < props.screener.columnDefs.value.length - 1) {
      activeCell.value = [point[0], point[1] + 1]
    }
  },
  moveSelectionDown: (point: Point) => {
    if (point[0] < props.screener.paginatedItems.value.length - 1) {
      activeCell.value = [point[0] + 1, point[1]]
    }
  },
  moveSelectionLeft: (point: Point) => {
    if (point[1] > 0) {
      activeCell.value = [point[0], point[1] - 1]
    }
  },
  deleteCell: (point: Point) => {
    const selectedItem = props.screener.paginatedItems.value[point[0]]
    const selectedField = props.screener.columnDefs.value[point[1]].field
    props.screener.actions.updateItem(selectedItem.id, { [selectedField]: null })
  },
}

const style = computed(() => {
  const sizes = props.screener.columnDefs.value.map(() => 'minmax(auto, 300px)')
  return { 'grid-template-columns': 'minmax(48px, min-content) ' + sizes.join(' ') }
})
</script>
