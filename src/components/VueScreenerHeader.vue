<template>
  <header class="vs-header">
    <div class="vs-title" v-text="screener.title.value" />
    <ScreenerSearch :screener="screener" />
    <ScreenerSearchOptions :screener="screener" :style="{ marginLeft: '4px' }" />
  </header>
</template>

<script lang="ts" setup>
import ScreenerSearch from './stuff/ScreenerSearch.vue'

import { Screener } from '../interfaces/screener'

import ScreenerSearchOptions from './stuff/ScreenerSearchOptions.vue'

defineProps<{
  screener: Screener
}>()
</script>

<style lang="scss">
.vs {
  &-header {
    // Vue screener header
    --vs-header__display: flex;
    --vs-header__align-items: center;
    --vs-header__font-size: 16px;
    --vs-header__font-weight: 400;
    --vs-header__height: 40px;
    --vs-header__padding: 0;
    --vs-header__color: black;

    // Vue screener title
    --vs-title__font-weight: 600;
    --vs-title__margin-right: auto;

    // Vue screener search
    --vs-search__margin-left: 8px;
    --vs-search__width: 200px;
    --vs-search__padding: 0 4px;
    --vs-search__box-sizing: border-box;
    --vs-search__font-size: 14px !important;
    --vs-search__font-weight: normal !important;
    --vs-search__height: 24px;
    --vs-search__border-radius: 4px;
    --vs-search__outline: none;
    --vs-search__border: 1px solid #767676;
    --vs-search--focus__border: 1px solid #4f4f4f;
    --vs-search__color: black;
    --vs-search--error__border: 2px solid red;
    --vs-search--error__outline-color: red;

    // Vue screener form checkable
    --vs-search-option__border: none;
    --vs-search-option__color: rgba(0, 0, 0, 0.5);
    --vs-search-option__cursor: pointer;
    --vs-search-option__border-radius: 4px;
    --vs-search-option__height: 20px;
    --vs-search-option__width: 20px;
    --vs-search-option__background: white;
    --vs-search-option__margin-bottom: 8px;
    --vs-search-option--active__color: #fff;
    --vs-search-option--active__background: #3e51b5;
    --vs-search-option--hover__color: #fff;
    --vs-search-option--hover__background: #3e51b5;

    display: var(--vs-header__display);
    align-items: var(--vs-header__align-items);
    font-size: var(--vs-header__font-size);
    font-weight: var(--vs-header__font-weight);
    height: var(--vs-header__height);
    padding: var(--vs-header__padding);
    color: var(--vs-header__color);
  }

  &-title {
    font-weight: var(--vs-title__font-weight);
    margin-right: var(--vs-title__margin-right);
  }

  &-search {
    margin-left: var(--vs-search__margin-left);
  }
}
</style>
