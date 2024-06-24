<template>
  <div v-on-clickaway="handleClickOutside" class="vs-dropdown">
    <button class="vs-dropdown__button" :class="[show && 'vs-dropdown__button--active']" @click="toggleDropdown">
      <slot name="icon" />
    </button>
    <transition name="vs-dropdown__content">
      <div v-if="show" class="vs-dropdown__content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { directive as vOnClickaway } from 'vue3-click-away'

const show = ref<boolean>(false)

const toggleDropdown = () => (show.value = !show.value)
const handleClickOutside = () => (show.value = false)
</script>

<style lang="scss">
.vs-dropdown {
  position: var(--vs-dropdown__position);

  &__button {
    display: var(--vs-dropdown-button__display);
    align-items: var(--vs-dropdown-button__align-items);
    justify-content: var(--vs-dropdown-button__justify-content);
    background: var(--vs-dropdown-button__background);
    border: var(--vs-dropdown-button__border);
    background: var(--vs-dropdown-button__background);
    padding: var(--vs-dropdown-button__padding);
    margin-left: var(--vs-dropdown-button__margin-left);
    cursor: var(--vs-dropdown-button__cursor);
    border-radius: var(--vs-dropdown-button__border-radius);
    color: var(--vs-dropdown-button__color);

    & > svg {
      width: var(--vs-dropdown-button-icon__width);
      height: var(--vs-dropdown-button-icon__height);
    }

    &:hover:not(#{&}--active) {
      background-color: var(--vs-dropdown-button--hover__background-color);
      border: var(--vs-dropdown-button--hover__border);
    }

    &:active,
    &--active {
      background-color: var(--vs-dropdown-button--active__background-color);
      border: var(--vs-dropdown-button--active__border);
    }
  }

  &__content {
    transform-origin: var(--vs-dropdown-content__transform-origin);
    position: var(--vs-dropdown-content__position);
    right: var(--vs-dropdown-content__right);
    margin-top: var(--vs-dropdown-content__margin-top);
    width: var(--vs-dropdown-content__width);
    background: var(--vs-dropdown-content__background);
    border-radius: var(--vs-dropdown-content__border-radius);
    padding: var(--vs-dropdown-content__padding);
    color: var(--vs-dropdown-content__color);
    z-index: var(--vs-dropdown-content__z-index);
  }

  &__content-enter-active,
  &__content-leave-active {
    transition: all 0.2s;
  }

  &__content-enter,
  &__content-leave-to {
    opacity: 0;
    transform: translateY(-5px);
  }
}
</style>
