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

  --vs-head-color: var(--vs-screener-color);
  --vs-head-bg-color: white;
  --vs-head-padding: 2px 5px;
  --vs-table-cell__padding: 2px 5px;

  // Vue screener table

  // Vue screener table row
  --vs-table-row__border: thin solid black;

  // Vue screener table cell
  --vs-table-cell__border-right: thin solid black;
  --vs-table-cell__border-right--last: unset;
  --vs-table-cell__position--pinned: sticky;
  --vs-table-cell__background--pinned: white;
  --vs-table-cell__right--pinned: 0;
  --vs-table-cell__border-left--pinned: thin solid black;
  --vs-table-cell__margin-left--pinned: -1px;
  --vs-table-cell__font-weight--head: bold;
  --vs-table-cell__white-space--head: nowrap;
  --vs-table-cell__height--head: 24px;
  --vs-table-cell__gap--head: 4px;
  --vs-table-cell__bg--head: transparent;

  // Vue screener sort icon
  --vs-sort-icon__height: 1em;
  --vs-sort-icon__width: 1em;
  --vs-sort-icon__display: inline-flex;
  --vs-sort-icon__align-items: center;
  --vs-sort-icon__float: right;
  --vs-sort-icon__cursor: pointer;
  --vs-sort-icon__transform: rotate(0deg);
  --vs-sort-icon__transition: ease-out 100ms;
  --vs-sort-icon__icon__transform--asc: rotate(-180deg);
}

.vs-screener {
  overflow: hidden;
  font-family: var(--vs-screener-font-family);
  font-size: var(--vs-screener-font-size);
  border: var(--vs-screener-border);
  border-radius: var(--vs-screener-border-radius);
  overflow: var(--vs-screener-overflow);
  color: var(--vs-screener-color);

  &--bad-data,
  &--no-data {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 96px 0;

    p {
      margin: 0;
    }
  }

  &--bad-data {
    border: var(--vs-screener-border--error);
    color: var(--vs-screener-color--error);
  }
}

.vs-no-data-view {
  text-align: center;
  padding: 150px 0;
  border: thin solid;
  border-radius: 8px;
}
</style>
