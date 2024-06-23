<template>
  <button
    class="vs-settings__options-button"
    :class="[{ 'vs-settings__options-button--active': checked }]"
    :title="title"
  >
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
.vs-settings {
  &__options-button {
    border: var(--vs-settings__options-button__border);
    padding: var(--vs-settings__options-button__padding);
    font-weight: var(--vs-settings__options-button__font-weight);
    color: var(--vs-settings__options-button__color);
    cursor: var(--vs-settings__options-button__cursor);
    border-radius: var(--vs-settings__options-button__border-radius);
    height: var(--vs-settings__options-button__height);
    width: var(--vs-settings__options-button__width);
    background: var(--vs-settings__options-button__background);
    margin-bottom: var(--vs-settings__options-button__margin-bottom);

    & > svg {
      height: 20px;
      width: 20px;
    }

    &--active {
      color: var(--vs-settings__options-button--active__color);
      background: var(--vs-settings__options-button--active__background);
    }

    &:hover {
      color: var(--vs-settings__options-button--hover__color);
      background: var(--vs-settings__options-button--hover__background);
    }
  }
}
</style>
