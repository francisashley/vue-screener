<template>
  <div class="vs-switch">
    <a
      v-for="option in options"
      :key="option.value"
      href="#"
      @click.prevent="onSelectFormat(option.value)"
      :class="['vs-switch-option', option.value === value && 'vs-switch-option--is-active']"
      v-text="option.label"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  value: string
  options: { label: string; value: string }[]
}>()

const emit = defineEmits(['select'])

const onSelectFormat = (format: string) => emit('select', format)
</script>

<style lang="scss">
.vs-switch {
  font-size: var(--vs-switch__font-size);
  height: var(--vs-switch__height);
  display: var(--vs-switch__display);
  overflow: var(--vs-switch__overflow);
  align-items: var(--vs-switch__align-items);
  border-radius: var(--vs-switch__border-radius);

  &-option {
    text-decoration: var(--vs-switch-option__text-decoration);
    font-weight: var(--vs-switch-option__font-weight);
    height: var(--vs-switch-option__height);
    display: var(--vs-switch-option__display);
    align-items: var(--vs-switch-option__align-items);
    padding: var(--vs-switch-option__padding);
    color: var(--vs-switch-option__color);
    width: var(--vs-switch-option__width);
    text-align: var(--vs-switch-option__text-align);
    justify-content: var(--vs-switch-option__justify-content);
    background: var(--vs-switch-option__background);

    &:last-child {
      border-radius: var(--vs-switch-option--last-child__border-radius);
    }

    &--is-active {
      background: var(--vs-switch-option--is-active__background);
      color: var(--vs-switch-option--is-active__color);
    }

    &:hover {
      background: var(--vs-switch-option--is-hover__background);
      color: var(--vs-switch-option--is-hover__color);
    }
  }
}
</style>
