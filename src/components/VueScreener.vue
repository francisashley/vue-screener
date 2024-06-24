<template>
  <section class="vs-app">
    <ScreenerHeader v-if="!screener.hasError.value && screener.hideHeader.value !== true" :screener="screener" />
    <ScreenerMain :screener="screener">
      <ErrorMessage
        v-if="screener.hasError.value"
        message="Invalid data was provided. Please provide an array of objects or an array of arrays."
      />
      <NoDataView v-else-if="!screener.hasData.value" />
      <JsonView v-else-if="screener.renderFormat.value === 'raw'" :data="screener.data.value" />
      <Table v-else :screener="screener">
        <template #head="headProps">
          <slot name="head" v-bind="headProps" />
        </template>
        <template #data="dataProps">
          <slot name="data" v-bind="dataProps" />
        </template>
      </Table>
    </ScreenerMain>
    <ScreenerFooter v-if="!screener.hasError.value" :screener="screener" />
  </section>
</template>

<script lang="ts" setup>
import ScreenerHeader from './ScreenerHeader.vue'
import ScreenerMain from './ScreenerMain.vue'
import ScreenerFooter from './ScreenerFooter.vue'
import JsonView from './views/JsonView.vue'
import Table from './table/Table.vue'
import NoDataView from './views/NoDataView.vue'
import ErrorMessage from './stuff/ErrorMessage.vue'
import { Config } from '@/interfaces/screener'
import type { Screener } from '../interfaces/screener'

type Props = {
  // The title to be displayed in the header
  title?: string
  // Configure each column
  config?: Config
  // The specific fields to be displayed in the table
  pick?: string[]
  // The fields to be excluded from the table
  omit?: string[]
  // The number of items to be displayed per page in the table
  perPage?: number
  // The current page number in the table
  currentPage?: number
  // A flag to toggle the visibility of the header
  hideHeader?: boolean
  // Screener hook
  screener: Screener
}

const { screener } = defineProps<Props>()
</script>

<style lang="scss">
.vs-app {
  // Friendly vars
  // --app-border: none;
  // --header-bg: transparent;
  // --header-color: black;
  // --header-padding: 1rem 0;
  // --title-font-size: 18px;
  // --table-border-radius: 8px;
  // --table-border: 1px solid #4b5563;

  // Vue screener
  --vs-app__overflow: hidden;
  --vs-app__font-size: 14px;
  --vs-app__font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  // Vue screener header
  --vs-header__display: flex;
  --vs-header__align-items: center;
  --vs-header__font-size: 16px;
  --vs-header__font-weight: 400;
  --vs-header__height: 40px;
  --vs-header__padding: 0;

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
  --vs-search__border: thin solid black;
  --vs-search__border-radius: 4px;
  --vs-search__border: 1px solid black;
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

  // Vue screener table
  --vs-table__color: black;
  --vs-table__border: 1px solid black;
  --vs-table__border-radius: 8px;

  // Vue screener table row
  --vs-table-row__border: thin solid black;

  // Vue screener table cell
  --vs-table-cell__border-right: thin solid black;
  --vs-table-cell__padding: 2px 5px;
  --vs-table-cell--last__border-right: unset;
  --vs-table-cell--pinned__position: sticky;
  --vs-table-cell--pinned__background: white;
  --vs-table-cell--pinned__right: 0;
  --vs-table-cell--pinned__border-left: thin solid black;
  --vs-table-cell--pinned__margin-left: -1px;
  --vs-table-cell--head__font-weight: bold;
  --vs-table-cell--head__white-space: nowrap;
  --vs-table-cell--head__height: 24px;
  --vs-table-cell--head__display: inline-flex;
  --vs-table-cell--head__align-items: center;
  --vs-table-cell--head__gap: 4px;
  --vs-table-cell--head__bg: transparent;
  --vs-table-cell--sortable__div__height: 24px;
  --vs-table-cell--sortable__div__display: inline-flex;
  --vs-table-cell--sortable__div__align-items: center;
  --vs-table-cell--sortable__div__gap: 4px;
  --vs-table-cell--sortable__div__cursor: pointer;

  // Vue screener sort selector
  --vs-sort-icon__height: 1em;
  --vs-sort-icon__width: 1em;
  --vs-sort-icon__display: inline-flex;
  --vs-sort-icon__align-items: center;
  --vs-sort-icon__float: right;
  --vs-sort-icon__cursor: pointer;
  --vs-sort-icon__transform: rotate(0deg);
  --vs-sort-icon__transition: ease-out 100ms;
  --vs-sort-icon__icon--asc__transform: rotate(-180deg);

  // Vue screener footer
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

  // Vue screener error message
  --vs-error-message__border: thin solid red;
  --vs-error-message__color: red;
}

.vs-app {
  overflow: var(--vs-app__overflow);
  font-family: var(--vs-app__font-family);
  font-size: var(--vs-app__font-size);
}
</style>
