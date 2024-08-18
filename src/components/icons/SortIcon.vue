<template>
  <remix-sort-desc-icon
    class="vs-sort-icon"
    :class="{
      'vs-sort-icon__icon--asc': direction !== 'desc',
      'vs-sort-icon__icon--desc': direction === 'desc',
    }"
  />
</template>

<script lang="ts" setup>
import RemixSortDescIcon from '../icons/RemixSortDescIcon.vue'

const { direction = null } = defineProps<{
  direction?: 'asc' | 'desc'
}>()
</script>

<style lang="scss">
.vs-sort-icon {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  height: var(--vs-sort-icon-size);
  width: var(--vs-sort-icon-size);
  transform: rotate(0deg);
  transition: ease-out 100ms;

  &__icon--asc {
    transform: rotate(-180deg);
  }
}
</style>
