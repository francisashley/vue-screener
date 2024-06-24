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
  height: var(--vs-footer__height);
  display: var(--vs-footer__display);
  align-items: var(--vs-footer__align-items);
  justify-content: var(--vs-footer__justify-content);
}
</style>
