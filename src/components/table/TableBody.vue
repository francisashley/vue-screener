<template>
  <div :style="rowStyle" v-for="(row, i) in screener.rows.value" :key="i" class="vs-table__row vs-table__row--record">
    <slot
      :name="cell.isPinned ? 'pinned-value' : 'value-cell'"
      :cell="cell"
      v-for="(cell, j) in row"
      :key="j"
      :highlight="highlightText"
      :highlight-value="screener.highlightQuery.value"
    >
      <TableData :cell="cell" />
    </slot>
    <!-- Fill empty rows on last page -->
    <template v-if="!row">&nbsp;</template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { highlightText } from '../../utils/text.utils'
import { Screener } from '../../interfaces/screener'
import TableData from './TableData.vue'

const props = defineProps<{
  screener: Screener
}>()

const rowStyle = computed(() => {
  return {
    display: 'grid',
    'grid-template-columns': 'subgrid',
    'grid-column': `1 / ${props.screener.neueColumns.value.length + 1}`,
  }
})
</script>

<style lang="scss">
.vs-table__row {
  border-bottom: thin solid black;
}
</style>
