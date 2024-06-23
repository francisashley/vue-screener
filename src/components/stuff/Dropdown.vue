<template>
  <div v-on-clickaway="handleClickOutside" class="vs-dropdown">
    <slot name="dropdown-button" :show="show" :toggle="toggleDropdown" />
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
