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
  position: relative;

  &__content {
    transform-origin: top right;
    position: absolute;
    right: 0;
    margin-top: 4px;
    width: 100px;
    background: #333333;
    border-radius: 4px;
    padding: 8px;
    color: white;
    z-index: 1;
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
