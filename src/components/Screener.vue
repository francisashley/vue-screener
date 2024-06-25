<template>
  <section
    class="vs-screener"
    :class="{ 'vs-screener--scrollable': isScrollable, 'vs-screener--scrolled-end': isScrolledEnd }"
    ref="mainRef"
  >
    <ErrorMessage
      v-if="screener.hasError.value"
      message="Invalid data was provided. Please provide an array of objects or an array of arrays."
    />
    <NoDataView v-else-if="!screener.hasData.value" />
    <Table v-else :screener="screener">
      <template #head="headProps">
        <slot name="head" v-bind="headProps" />
      </template>
      <template #data="dataProps">
        <slot name="data" v-bind="dataProps" />
      </template>
    </Table>
  </section>
</template>

<script lang="ts" setup>
import Table from './table/Table.vue'
import NoDataView from './views/NoDataView.vue'
import ErrorMessage from './stuff/ErrorMessage.vue'
import { Config } from '@/interfaces/screener'
import type { Screener } from '../interfaces/screener'
import { useScrollable } from '../hooks/use-scrollable'

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
  // Screener hook
  screener: Screener
}

const { screener } = defineProps<Props>()
const { ref: mainRef, isScrollable, isScrolledEnd } = useScrollable()
</script>

<style lang="scss">
.vs-screener {
  --vs-screener__overflow: hidden;
  --vs-screener__font-size: 14px;
  --vs-screener__font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  // Vue screener table
  --vs-table__color: black;
  --vs-table__border: 1px solid black;
  --vs-table__border-radius: 8px;
  --vs-table__overflow: auto;

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

  // Vue screener error message
  --vs-error-message__border: thin solid red;
  --vs-error-message__color: red;
}

.vs-screener {
  overflow: var(--vs-screener__overflow);
  font-family: var(--vs-screener__font-family);
  font-size: var(--vs-screener__font-size);
}
</style>
