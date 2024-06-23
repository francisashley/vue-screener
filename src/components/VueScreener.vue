<template>
  <section class="vs-app">
    <ScreenerHeader v-if="!screener.hasError.value && hideHeader !== true" :screener="screener" />
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
import { useScreener } from '../hooks/use-screener'
import { Config } from '@/interfaces/screener'
import { watchEffect } from 'vue'

type Props = {
  // The title to be displayed in the header
  title?: string
  // The data to be displayed in the table
  data?: unknown[]
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
}

const {
  title = 'Results',
  data = [],
  config = {},
  pick = [],
  omit = [],
  perPage = 15,
  currentPage = 1,
  hideHeader = false,
} = defineProps<Props>()

const screener = useScreener({
  title,
  defaultCurrentPage: currentPage,
  defaultPerPage: perPage,
  defaultData: data,
  config,
  pick: pick,
  omit: omit,
})

watchEffect(() => (screener.title.value = title))
watchEffect(() => (screener.data.value = data))
watchEffect(() => (screener.config.value = config))
watchEffect(() => (screener.pick.value = pick))
watchEffect(() => (screener.omit.value = omit))
watchEffect(() => (screener.perPage.value = perPage))
watchEffect(() => (screener.currentPage.value = currentPage))
</script>

<style lang="scss">
.vs-app {
  // Vue screener
  --table__bg: #fff;
  --table__overflow: hidden;
  --table__border: thin solid black;
  --table__border-radius: 8px;
  --table__font-size: 14px;
  --table__font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  // Vue screener header
  --table-header__display: flex;
  --table-header__align-items: center;
  --table-header__font-size: 16px;
  --table-header__color: white;
  --table-header__bg: black;
  --table-header__font-weight: 400;
  --table-header__padding: 4px 4px 4px 8px;

  // Vue screener header title
  --table-header-title__font-weight: 500;
  --table-header-title__margin-right: auto;

  // Vue screener header search
  --table-header-search__margin-left: 8px;
  --table-header-search__width: 200px;
  --table-header-search__padding: 0 4px;
  --table-header-search__box-sizing: border-box;
  --table-header-search__font-size: 14px !important;
  --table-header-search__font-weight: normal !important;
  --table-header-search__height: 26px;
  --table-header-search__border: none;
  --table-header-search__border-left: thin solid;
  --table-header-search__border-radius: 4px;
  --table-header-search__border: 2px solid #fff;
  --table-header-search__color: black;
  --table-header-search--error__border: 2px solid red;
  --table-header-search--error__outline-color: red;

  // Vue screener table
  --table__color: black;

  // Vue screener table row
  --table-row__border: thin solid black;

  // Vue screener table cell
  --table-cell__border-right: thin solid black;
  --table-cell__padding: 2px 5px;
  --table-cell--is-last__border-right: unset;
  --table-cell--is-pinned__position: sticky;
  --table-cell--is-pinned__background: white;
  --table-cell--is-pinned__right: 0;
  --table-cell--is-pinned__border-left: thin solid black;
  --table-cell--is-pinned__margin-left: -1px;

  // Vue screener footer
  --table-footer__padding: 8px;

  // Vue screener dropdown
  --vs-dropdown__position: relative;
  --vs-dropdown__content__transform-origin: top right;
  --vs-dropdown__content__position: absolute;
  --vs-dropdown__content__right: 0;
  --vs-dropdown__content__margin-top: 4px;
  --vs-dropdown__content__width: 100px;
  --vs-dropdown__content__background: #333333;
  --vs-dropdown__content__border-radius: 4px;
  --vs-dropdown__content__padding: 8px;
  --vs-dropdown__content__color: white;
  --vs-dropdown__content__z-index: 1;

  // Vue screener pagination
  --vs-pagination__display: flex;
  --vs-pagination__justify-content: space-between;
  --vs-pagination__align-items: center;
  --vs-pagination__white-space: nowrap;
  --vs-pagination__color: #000;
  --vs-pagination__info__white-space: nowrap;
  --vs-pagination__info__width: 150px;
  --vs-pagination__nav__display: flex;
  --vs-pagination__nav__padding: 0 8px !important;
  --vs-pagination__nav__margin: 0 !important;
  --vs-pagination__nav__list-style-type: none;
  --vs-pagination__button__margin: 0 10px 0 0 !important;
  --vs-pagination__button--active__color: blue;
  --vs-pagination__per-page__width: 150px;
  --vs-pagination__per-page__display: inline-flex;
  --vs-pagination__per-page__justify-content: flex-end;
  --vs-pagination__per-page-input__width: 60px;
}

.vs-app {
  overflow: var(--table__overflow);
  font-family: var(--table__font-family);
  font-size: var(--table__font-size);
  border-radius: var(--table__border-radius);
  border: var(--table__border);
  background: var(--table__bg);
}
</style>
