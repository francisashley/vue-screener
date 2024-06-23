<template>
  <footer class="vs-footer">
    <Pagination :screener="screener" />
  </footer>
</template>

<script lang="ts" setup>
import Pagination from './stuff/Pagination.vue'
import { Screener } from '../interfaces/screener'

type Props = {
  screener: Screener
}

defineProps<Props>()
</script>

<style lang="scss">
.vs-footer {
  padding: var(--vs-footer__padding);
  color: var(--vs-footer__color);
}
</style>
