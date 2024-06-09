<template>
  <header class="vs-header">
    <div class="vs-title" v-text="screener.title.value" />
    <ScreenerSearch :screener="screener" :is-valid-query="isRegExFriendlySearchQuery" class="vs-search" />
    <Settings :screener="screener" />
  </header>
</template>

<script lang="ts" setup>
import ScreenerSearch from './stuff/ScreenerSearch.vue'
import Settings from './stuff/Settings.vue'
import { isValidRegExp } from '../utils/regex.utils'
import { computed } from 'vue'
import { Screener } from '../interfaces/screener'

type Props = {
  screener: Screener
}

const props = defineProps<Props>()

const isRegExFriendlySearchQuery = computed((): boolean => {
  return isValidRegExp(props.screener.searchQuery.value)
})
</script>

<style lang="scss">
.vs {
  &-header {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: white;
    background: black;
    font-weight: 400;
    padding: 4px 4px 4px 8px;
  }

  &-title {
    font-weight: 500;
    margin-right: auto;
  }

  &-search {
    margin-left: 8px;
  }
}
</style>
