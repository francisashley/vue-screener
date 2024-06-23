<template>
  <div class="vs-view-selector">
    <a
      href="#"
      @click.prevent="onSelectFormat('table')"
      :class="['vs-view-selector__link', activeFormat === 'table' && 'vs-view-selector__link--is-active']"
      v-text="'Table'"
    />
    <a
      href="#"
      @click.prevent="onSelectFormat('raw')"
      :class="['vs-view-selector__link', activeFormat === 'raw' && 'vs-view-selector__link--is-active']"
      v-text="'Raw'"
    />
  </div>
</template>

<script lang="ts" setup>
const { activeFormat = 'table' } = defineProps<{
  activeFormat: 'table' | 'raw'
}>()

const emit = defineEmits(['select-format'])

const onSelectFormat = (format: 'table' | 'raw') => emit('select-format', format)
</script>

<style lang="scss">
.vs-view-selector {
  font-size: var(--vs-view-selector__font-size);
  height: var(--vs-view-selector__height);
  display: var(--vs-view-selector__display);
  overflow: var(--vs-view-selector__overflow);
  align-items: var(--vs-view-selector__align-items);
  border-radius: var(--vs-view-selector__border-radius);

  &__link {
    text-decoration: var(--vs-view-selector__link__text-decoration);
    font-weight: var(--vs-view-selector__link__font-weight);
    height: var(--vs-view-selector__link__height);
    display: var(--vs-view-selector__link__display);
    align-items: var(--vs-view-selector__link__align-items);
    padding: var(--vs-view-selector__link__padding);
    color: var(--vs-view-selector__link__color);
    width: var(--vs-view-selector__link__width);
    text-align: var(--vs-view-selector__link__text-align);
    justify-content: var(--vs-view-selector__link__justify-content);
    background: var(--vs-view-selector__link__background);

    &:last-child {
      border-radius: var(--vs-view-selector__link--last-child__border-radius);
    }

    &--is-active {
      background: var(--vs-view-selector__link--is-active__background);
      color: var(--vs-view-selector__link--is-active__color);
    }

    &:hover {
      background: var(--vs-view-selector__link--is-hover__background);
      color: var(--vs-view-selector__link--is-hover__color);
    }
  }
}
</style>
