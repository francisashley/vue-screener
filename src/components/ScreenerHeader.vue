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
    display: var(--vs-header__display);
    align-items: var(--vs-header__align-items);
    font-size: var(--vs-header__font-size);
    color: var(--vs-header__color);
    background: var(--vs-header__bg);
    font-weight: var(--vs-header__font-weight);
    padding: var(--vs-header__padding);
  }

  &-title {
    font-weight: var(--vs-header-title__font-weight);
    margin-right: var(--vs-header-title__margin-right);
  }

  &-search {
    margin-left: var(--vs-header-search__margin-left);
  }
}
</style>
