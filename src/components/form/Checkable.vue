<template>
  <button class="vs-checkable" :class="[{ 'vs-checkable--active': checked }]" :title="title">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  checked?: boolean
}>()
</script>

<style lang="scss">
.vs-checkable {
  border: var(--vs-checkable__border);
  padding: var(--vs-checkable__padding);
  font-weight: var(--vs-checkable__font-weight);
  color: var(--vs-checkable__color);
  cursor: var(--vs-checkable__cursor);
  border-radius: var(--vs-checkable__border-radius);
  height: var(--vs-checkable__height);
  width: var(--vs-checkable__width);
  background: var(--vs-checkable__background);
  margin-bottom: var(--vs-checkable__margin-bottom);

  & > svg {
    height: 20px;
    width: 20px;
  }

  &--active {
    color: var(--vs-checkable--active__color);
    background: var(--vs-checkable--active__background);
  }

  &:hover {
    color: var(--vs-checkable--hover__color);
    background: var(--vs-checkable--hover__background);
  }
}
</style>
