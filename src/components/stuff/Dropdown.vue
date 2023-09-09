<template>
  <div v-on-clickaway="handleClickOutside" class="vue-screener__dropdown">
    <slot name="dropdown-button" :show="show" :toggle="toggleDropdown" />
    <transition name="vue-screener__dropdown__dropdown-content">
      <div v-if="show" class="vue-screener__dropdown__dropdown-content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { directive as vOnClickaway } from "vue3-click-away";

const show = ref<boolean>(false);

const toggleDropdown = () => (show.value = !show.value);
const handleClickOutside = () => (show.value = false);
</script>

<style lang="scss">
.vue-screener__dropdown {
  position: relative;

  &__dropdown-content {
    transform-origin: top right;
    position: absolute;
    right: 0;
    margin-top: 4px;
    width: 100px;
    background: #333333;
    border-radius: 4px;
    padding: 8px;
    color: white;
  }

  &__dropdown-content-enter-active,
  &__dropdown-content-leave-active {
    transition: all 0.2s;
  }

  &__dropdown-content-enter,
  &__dropdown-content-leave-to {
    opacity: 0;
    transform: translateY(-5px);
  }
}
</style>
