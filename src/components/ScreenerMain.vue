<template>
  <main
    class="vs-main"
    :class="{ 'vs-main--is-scrollable': isScrollable, 'vs-main--is-scrolled-end': isScrolledEnd }"
    ref="mainRef"
  >
    <slot />
  </main>
</template>

<script lang="ts" setup>
import { useScrollable } from '../hooks/use-scrollable'

const { ref: mainRef, isScrollable, isScrolledEnd } = useScrollable()
</script>

<style lang="scss">
.vs-main {
  overflow-x: auto;
}
</style>
