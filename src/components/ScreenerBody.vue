<template>
  <component
    :is="props.screener.rowConfig.value.link ? resolveComponent('router-link') : 'div'"
    :to="props.screener.rowConfig.value.getLink?.(item)"
    :href="props.screener.rowConfig.value.getLink?.(item)"
    :external="true"
    :style="rowStyle"
    v-for="(item, i) in screener.items.value"
    :key="i"
    class="vs-table__row vs-table__row--item"
  >
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
        <ScreenerBodyCell :column="column" :item="item" />
      </slot>
    </template>
    <template v-else>&nbsp;</template>
  </component>
</template>

<script lang="ts" setup>
import { computed, resolveComponent } from 'vue'
import { highlightText } from '../utils/text.utils'
import { Screener } from '../interfaces/screener'
import ScreenerBodyCell from './ScreenerBodyCell.vue'

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
  background: var(--vs-row-background);
  color: var(--vs-text-color);
  text-decoration: unset;

  &--item {
    border-top: var(--vs-row-top-border);
  }

  &--item:hover {
    background: var(--vs-row-background--hover);
  }
}
</style>
