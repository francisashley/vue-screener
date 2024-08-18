<template>
  <ScreenerCell
    :value="item.fields[column.field]?.htmlValue"
    :is-first="column.isFirst"
    :is-last="column.isLast"
    :has-value="item.fields[column.field]?.hasValue"
    :is-pinned="column.isPinned"
    :type="item.fields[column.field]?.type"
    :class="['vs-table__cell--value', column.isPinned && 'vs-table__cell--pinned']"
  >
    <slot />
  </ScreenerCell>
</template>

<script lang="ts" setup>
import { Column, Item } from '../interfaces/screener'
import ScreenerCell from './ScreenerCell.vue'

defineProps<{ column: Column; item: Item }>()
</script>
