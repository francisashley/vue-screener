<template>
  <div id="app">
    <Screener :screener="screener" />
  </div>
</template>

<script setup lang="ts">
import Screener from './components/Screener.vue'
import { useScreener } from './hooks/use-screener'

const screener = useScreener([])
</script>
