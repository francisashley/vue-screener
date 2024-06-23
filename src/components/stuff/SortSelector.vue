<template>
  <div class="vs-sort-selector" v-if="sortDirection">
    <remix-sort-desc-icon
      class="vs-sort-selector"
      :class="{
        'vs-sort-selector__icon--desc': sortDirection === 'desc',
        'vs-sort-selector__icon--asc': sortDirection === 'asc',
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import RemixSortDescIcon from '../icons/RemixSortDescIcon.vue'

type SortDirection = null | 'asc' | 'desc'

const { sortDirection = null } = defineProps<{
  sortDirection?: SortDirection
}>()
</script>

<style lang="scss">
.vs-sort-selector {
  height: 15px;
  width: 15px;
  display: inline-flex;
  align-items: center;
  float: right;
  cursor: pointer;
  transform: rotate(0deg);
  transition: ease-out 100ms;

  &__icon--asc {
    transform: rotate(-180deg);
  }
}
</style>
