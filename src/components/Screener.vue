<template>
  <section
    class="vs-screener"
    :class="{
      'vs-screener--scrollable': isScrollable,
      'vs-screener--scrolled-end': isScrolledEnd,
      'vs-screener--bad-data': view === 'bad-data',
      'vs-screener--no-data': view === 'no-data',
    }"
    ref="mainRef"
  >
    <div v-if="view === 'bad-data'">
      Invalid data provided. Please provide an array of objects or an array of arrays.
    </div>

    <p v-if="view === 'no-data'">No data provided</p>

    <div v-if="view === 'table'" :style="tableStyle">
      <ScreenerHeader :screener="screener">
        <template #head="headProps">
          <slot name="head" v-bind="headProps" />
        </template>
      </ScreenerHeader>
      <ScreenerBody :screener="screener">
        <template #data="dataProps">
          <slot name="data" v-bind="dataProps" />
        </template>
      </ScreenerBody>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Config } from '@/interfaces/screener'
import type { Screener } from '../interfaces/screener'
import { useScrollable } from '../hooks/use-scrollable'
import { computed } from 'vue'
import ScreenerHeader from './ScreenerHeader.vue'
import ScreenerBody from './ScreenerBody.vue'

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

const view = computed<'bad-data' | 'no-data' | 'table'>(() => {
  if (screener.hasError.value) return 'bad-data'
  if (!screener.hasData.value) return 'no-data'
  return 'table'
})

const tableStyle = computed(() => {
  return {
    display: 'grid',
    'grid-template-columns': screener.columns.value.map((item) => item.width).join(' '),
  }
})
</script>

<style lang="scss">
.vs-screener {
  --vs-screener-font-size: 14px;
  --vs-screener-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  // Vue screener border
  --vs-screener-border: thin solid black;
  --vs-screener-border--error: thin solid red;
  --vs-screener-color: black;
  --vs-screener-color--error: red;
  --vs-screener-border-radius: 8px;
  --vs-screener-overflow: auto;

  // Vue screener table

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

  // Vue screener sort icon
  --vs-sort-icon__height: 1em;
  --vs-sort-icon__width: 1em;
  --vs-sort-icon__display: inline-flex;
  --vs-sort-icon__align-items: center;
  --vs-sort-icon__float: right;
  --vs-sort-icon__cursor: pointer;
  --vs-sort-icon__transform: rotate(0deg);
  --vs-sort-icon__transition: ease-out 100ms;
  --vs-sort-icon__icon--asc__transform: rotate(-180deg);
}

.vs-screener {
  overflow: hidden;
  font-family: var(--vs-screener-font-family);
  font-size: var(--vs-screener-font-size);
  border: var(--vs-screener-border);
  border-radius: var(--vs-screener-border-radius);
  overflow: var(--vs-screener-overflow);

  &--bad-data,
  &--no-data {
    border: var(--vs-screener-border--error);
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 0;
    }
  }

  &--bad-data {
    color: var(--vs-screener-color--error);
    padding: 96px 0;
  }
}

.vs-no-data-view {
  text-align: center;
  padding: 150px 0;
  border: thin solid;
  border-radius: 8px;
}
</style>
