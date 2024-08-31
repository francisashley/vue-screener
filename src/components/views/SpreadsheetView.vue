<template>
  <div v-if="screener.dimensions" :ui="ui.spreadsheetView" class="vsc-border vsc-border-zinc-700">
    <!-- // Field columns -->
    <SpreadsheetRow>
      <SpreadsheetCell is-header :point="[-1, -1]" />
      <SpreadsheetCell is-header v-for="(columnDef, ci) in props.screener.columnDefs.value" :key="ci" :point="[-1, ci]">
        {{ columnDef.field }}
      </SpreadsheetCell>
    </SpreadsheetRow>
    <SpreadsheetRow v-for="(item, ri) in screener.paginatedItems.value" :key="ri">
      <!-- // Row index -->
      <SpreadsheetCell is-header :point="[ri, -1]">
        {{ ri }}
      </SpreadsheetCell>
      <SpreadsheetCell
        :point="[ri, ci]"
        v-for="(columnDef, ci) in props.screener.columnDefs.value"
        :key="ci"
        :is-active="activeCell ? activeCell[0] === ri && activeCell[1] === ci : false"
        @click="actions.selectCell([ri, ci])"
      >
        {{ item?.data[columnDef.field] }}
      </SpreadsheetCell>
    </SpreadsheetRow>
  </div>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref } from 'vue'
import type { Screener } from '../../interfaces/screener'
import { twMerge } from '../../utils/tailwind-merge.utils'
import SpreadsheetCell from '../ui/spreadsheet/SpreadsheetCell.vue'
import SpreadsheetRow from '../ui/spreadsheet/SpreadsheetRow.vue'

export type SpreadsheetViewUI = {
  spreadsheetView?: {
    class: string
  }
}

type Point = [rowIndex: number, colIndex: number]

const props = defineProps<{
  screener: Screener
  ui?: SpreadsheetViewUI
}>()

const uiDefaults = {
  spreadsheetView: {
    class: '',
  },
}

const ui = computed(() => {
  return {
    spreadsheetView: twMerge(uiDefaults.spreadsheetView?.class, props.ui?.spreadsheetView?.class),
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
    props.screener.actions.updateItem({ ...selectedItem, data: { ...selectedItem.data, [selectedField]: null } })
  },
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!activeCell.value) return

  switch (event.code) {
    case 'Backspace':
      actions.deleteCell(activeCell.value)
      break
    case 'Tab':
      if (event.shiftKey) {
        actions.moveSelectionPrev(activeCell.value)
      } else {
        actions.moveSelectionNext(activeCell.value)
      }
      break
    case 'ArrowUp':
      event.preventDefault()
      actions.moveSelectionUp(activeCell.value)
      break
    case 'ArrowRight':
      event.preventDefault()
      actions.moveSelectionRight(activeCell.value)
      break
    case 'ArrowDown':
      event.preventDefault()
      actions.moveSelectionDown(activeCell.value)
      break
    case 'ArrowLeft':
      event.preventDefault()
      actions.moveSelectionLeft(activeCell.value)
      break
  }
}

document.addEventListener('keydown', handleKeydown)

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>
