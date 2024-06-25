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
  --vs-footer__padding: 0;
  --vs-footer__color: black;
  --vs-footer__height: 40px;
  --vs-footer__display: flex;
  --vs-footer__align-items: center;
  --vs-footer__justify-content: space-between;

  // Vue screener pagination
  --vs-pagination__display: flex;
  --vs-pagination__justify-content: space-between;
  --vs-pagination__align-items: center;
  --vs-pagination__white-space: nowrap;
  --vs-pagination__width: 100%;
  --vs-pagination-info__white-space: nowrap;
  --vs-pagination-info__width: 150px;
  --vs-pagination-nav__display: flex;
  --vs-pagination-nav__padding: 0 8px !important;
  --vs-pagination-nav__margin: 0 !important;
  --vs-pagination-nav__list-style-type: none;
  --vs-pagination-button__margin: 0 10px 0 0 !important;
  --vs-pagination-button__height: 26px;
  --vs-pagination-button__padding: 0 8px;
  --vs-pagination-button__background: #efefef;
  --vs-pagination-button__border: thin solid #767676;
  --vs-pagination-button--hover__background-color: #e5e5e5;
  --vs-pagination-button--hover__border: thin solid #4f4f4f;
  --vs-pagination-button--active__background-color: #f5f5f5;
  --vs-pagination-button--active__border: thin solid #8c8c8c;
  --vs-pagination-button--active__color: blue;
  --vs-pagination-per-page__width: 150px;
  --vs-pagination-per-page__display: inline-flex;
  --vs-pagination-per-page__justify-content: flex-end;
  --vs-pagination-per-page-input__width: 60px;
  --vs-pagination-per-page-input__height: 20px;

  --vs-pagination-per-page-input__border-radius: 4px;
  --vs-pagination-per-page-input__border: thin solid #767676;
  --vs-pagination-per-page-input--focus__border: thin solid #4f4f4f;
  --vs-pagination-per-page-input__outline: none;

  // Vue screener error message
  --vs-error-message__border: thin solid red;
  --vs-error-message__color: red;

  padding: var(--vs-footer__padding);
  color: var(--vs-footer__color);
  height: var(--vs-footer__height);
  display: var(--vs-footer__display);
  align-items: var(--vs-footer__align-items);
  justify-content: var(--vs-footer__justify-content);
}
</style>
