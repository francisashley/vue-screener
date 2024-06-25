<template>
  <div :style="rowStyle" v-for="(item, i) in screener.items.value" :key="i" class="vs-table__row vs-table__row--item">
    <template v-if="item">
      <slot
        v-for="(column, j) in screener.columns.value"
        name="data"
        :column="column"
        :item="item"
        :key="j"
        :highlight="highlightText"
        :highlight-value="screener.highlightQuery.value"
      >
        <TableDataCell :column="column" :item="item" />
      </slot>
    </template>
    <template v-else>&nbsp;</template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { highlightText } from '../../utils/text.utils'
import { Screener } from '../../interfaces/screener'
import TableDataCell from './TableDataCell.vue'

const props = defineProps<{
  screener: Screener
}>()

const rowStyle = computed(() => {
  return {
    display: 'grid',
    'grid-template-columns': 'subgrid',
    'grid-column': `1 / ${props.screener.columns.value.length + 1}`,
  }
})
</script>

<style lang="scss">
.vs-table__row.vs-table__row--item {
  border-top: var(--vs-table-row__border);
}
</style>
