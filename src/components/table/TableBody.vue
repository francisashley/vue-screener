<template>
  <div :style="rowStyle" v-for="(item, i) in screener.items.value" :key="i" class="vs-table__row vs-table__row--record">
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
        <TableData :column="column" :item="item" />
      </slot>
    </template>
    <template v-else>&nbsp;</template>
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
    'grid-column': `1 / ${props.screener.columns.value.length + 1}`,
  }
})
</script>

<style lang="scss">
.vs-table__row {
  border-bottom: thin solid black;
}
</style>
