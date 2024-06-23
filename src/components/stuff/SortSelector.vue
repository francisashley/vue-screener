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
  --vs-sort-selector__height: 1em;
  --vs-sort-selector__width: 1em;
  --vs-sort-selector__display: inline-flex;
  --vs-sort-selector__align-items: center;
  --vs-sort-selector__float: right;
  --vs-sort-selector__cursor: pointer;
  --vs-sort-selector__transform: rotate(0deg);
  --vs-sort-selector__transition: ease-out 100ms;

  height: var(--vs-sort-selector__height);
  width: var(--vs-sort-selector__width);
  display: var(--vs-sort-selector__display);
  align-items: var(--vs-sort-selector__align-items);
  float: var(--vs-sort-selector__float);
  cursor: var(--vs-sort-selector__cursor);
  transform: var(--vs-sort-selector__transform);
  transition: var(--vs-sort-selector__transition);

  --vs-sort-selector__icon--asc__transform: rotate(-180deg);

  &__icon--asc {
    transform: var(--vs-sort-selector__icon--asc__transform);
  }
}
</style>
