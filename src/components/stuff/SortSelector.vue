<template>
  <div class="vs-sort-selector">
    <sort-icon class="vs-sort-selector__icon vs-sort-selector__icon--none" v-if="sortDirection === null" />
    <sort-up-icon class="vs-sort-selector__icon vs-sort-selector__icon--asc" v-else-if="sortDirection === 'asc'" />
    <sort-down-icon class="vs-sort-selector__icon vs-sort-selector__icon--desc" v-else-if="sortDirection === 'desc'" />
  </div>
</template>

<script lang="ts" setup>
import SortIcon from '../icons/SortIcon.vue'
import SortUpIcon from '../icons/SortUpIcon.vue'
import SortDownIcon from '../icons/SortDownIcon.vue'

type SortDirection = null | 'asc' | 'desc'

const { sortDirection = null } = defineProps<{
  sortDirection?: SortDirection
}>()
</script>

<style lang="scss">
.vs-sort-selector {
  margin-left: auto;
  height: 24px;
  display: inline-flex;
  align-items: center;
  float: right;
  cursor: pointer;
}
</style>
