<template>
  <div id="app">
    <Screener :screener="screener" />
  </div>
</template>

<script setup lang="ts">
import Screener from './components/Screener.vue'
import { useVueScreener } from './hooks/use-vue-screener'

const screener = useVueScreener([])
</script>
