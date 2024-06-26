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
  height: var(--vs-sort-icon__height);
  width: var(--vs-sort-icon__width);
  display: var(--vs-sort-icon__display);
  align-items: var(--vs-sort-icon__align-items);
  float: var(--vs-sort-icon__float);
  cursor: var(--vs-sort-icon__cursor);
  transform: var(--vs-sort-icon__transform);
  transition: var(--vs-sort-icon__transition);

  &__icon--asc {
    transform: var(--vs-sort-icon__icon__transform--asc);
  }
}
</style>
