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
    --vs-search__height: 26px;
    --vs-search__border-radius: 4px;
    --vs-search__outline: none;
    --vs-search__border: 1px solid #767676;
    --vs-search--focus__border: 1px solid #4f4f4f;
    --vs-search__color: black;
    --vs-search--error__border: 2px solid red;
    --vs-search--error__outline-color: red;

    // Vue screener dropdown
    --vs-dropdown__position: relative;

    // Vue screener dropdown
    --vs-dropdown-button__display: inline-flex;
    --vs-dropdown-button__align-items: center;
    --vs-dropdown-button__justify-content: center;
    --vs-dropdown-button__padding: 4px;
    --vs-dropdown-button__margin-left: 4px;
    --vs-dropdown-button__cursor: pointer;
    --vs-dropdown-button__border-radius: 4px;
    --vs-dropdown-button__color: black;
    --vs-dropdown-button__background: #efefef;
    --vs-dropdown-button__border: thin solid #767676;
    --vs-dropdown-button--hover__background-color: #e5e5e5;
    --vs-dropdown-button--hover__border: thin solid #4f4f4f;
    --vs-dropdown-button--active__background-color: #f5f5f5;
    --vs-dropdown-button--active__border: thin solid #8c8c8c;
    --vs-dropdown-button-icon__width: 16px;
    --vs-dropdown-button-icon__height: 16px;
    --vs-dropdown-content__transform-origin: top right;
    --vs-dropdown-content__position: absolute;
    --vs-dropdown-content__right: 0;
    --vs-dropdown-content__margin-top: 4px;
    --vs-dropdown-content__width: 100px;
    --vs-dropdown-content__background: #333333;
    --vs-dropdown-content__border-radius: 4px;
    --vs-dropdown-content__padding: 8px;
    --vs-dropdown-content__color: white;
    --vs-dropdown-content__z-index: 1;

    // Vue screener form heading
    --vs-form-heading__font-weight: 400;
    --vs-form-heading__margin: 0 0 6px 0;
    --vs-form-heading__font-size: 9px;
    --vs-form-heading__text-transform: uppercase;
    --vs-form-heading__opacity: 0.8;

    // Vue screener form checkable
    --vs-checkable__border: none;
    --vs-checkable__padding: 0 3px;
    --vs-checkable__font-weight: 600;
    --vs-checkable__color: rgba(0, 0, 0, 0.5);
    --vs-checkable__cursor: pointer;
    --vs-checkable__border-radius: 4px;
    --vs-checkable__height: 20px;
    --vs-checkable__width: 26px;
    --vs-checkable__background: white;
    --vs-checkable__margin-bottom: 8px;
    --vs-checkable--active__color: #fff;
    --vs-checkable--active__background: #3e51b5;
    --vs-checkable--hover__color: #fff;
    --vs-checkable--hover__background: #3e51b5;

    // Vue screener form checkable group
    --vs-checkable-group__display: flex;
    --vs-checkable-group__gap: 4px;

    // Vue screener form switch
    --vs-switch__font-size: 12px;
    --vs-switch__height: 20px;
    --vs-switch__display: flex;
    --vs-switch__overflow: hidden;
    --vs-switch__align-items: center;
    --vs-switch__border-radius: 2px;
    --vs-switch-option__text-decoration: none;
    --vs-switch-option__font-weight: 500;
    --vs-switch-option__height: 100%;
    --vs-switch-option__display: flex;
    --vs-switch-option__align-items: center;
    --vs-switch-option__padding: 0 8px;
    --vs-switch-option__color: #000;
    --vs-switch-option__width: 32px;
    --vs-switch-option__text-align: center;
    --vs-switch-option__justify-content: center;
    --vs-switch-option__background: #fff;
    --vs-switch-option--last-child__border-radius: 0 4px 4px 0;
    --vs-switch-option--active__background: #3f51b5;
    --vs-switch-option--active__color: #fff;
    --vs-switch-option--hover__background: #3f51b5;
    --vs-switch-option--hover__color: #fff;

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
