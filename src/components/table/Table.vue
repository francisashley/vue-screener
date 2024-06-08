<template>
  <div :style="tableStyle" class="vs-table">
    <TableHeader :screener="screener">
      <template #head="headProps">
        <slot name="head" v-bind="headProps" />
      </template>
    </TableHeader>
    <TableBody :screener="screener">
      <template #value-cell="dataProps">
        <slot name="value-cell" v-bind="dataProps" />
      </template>
      <template #pinned-value="dataProps">
        <slot name="pinned-value" v-bind="dataProps" />
      </template>
    </TableBody>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Screener } from '@/interfaces/screener'
import TableHeader from './TableHeader.vue'
import TableBody from './TableBody.vue'

const props = defineProps<{
  screener: Screener
}>()

const tableStyle = computed(() => {
  let cols = props.screener.neueColumns.value.reduce((acc, field) => {
    const column = props.screener.neueColumns.value[field.key as any]
    let width = column?.width ?? '1fr'
    if (!isNaN(Number(width))) width = width + 'px'
    return acc + ' ' + width
  }, '')

  if (props.screener.includePinned.value) cols += ' min-content'

  return {
    display: 'grid',
    'grid-template-columns': cols,
  }
})
</script>

<style lang="scss">
.vs-table {
  color: black;
}
</style>
