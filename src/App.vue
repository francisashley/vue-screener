<template>
  <div id="app">
    <VueScreener :screener="screener" />
  </div>
</template>

<script setup lang="ts">
import VueScreener from './components/VueScreener.vue'
import { useVueScreener } from './hooks/use-vue-screener'

const screener = useVueScreener([])
</script>
