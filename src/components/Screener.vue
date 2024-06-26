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
  // Container
  --vs-container-font-size: 14px;
  --vs-container-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --vs-container-border: thin solid black;
  --vs-container-border--error: thin solid red;
  --vs-container-color: black;
  --vs-container-bg-color: white;
  --vs-container-color--error: red;
  --vs-container-border-radius: 8px;
  --vs-container-overflow: auto;

  // Base Cell styles
  --vs-cell-color: var(--vs-container-color);
  --vs-cell-bg-color: var(--vs-container-bg-color);
  --vs-cell-bg-color--pinned: var(--vs-container-bg-color);
  --vs-cell-padding: 2px 5px;
  --vs-cell-border-right: thin solid black;
  --vs-cell-border-left--pinned: thin solid black;

  // Header Cell
  --vs-sort-icon-size: 1em;
  --vs-head-color: var(--vs-cell-color);
  --vs-head-bg-color: var(--vs-cell-bg-color);
  --vs-head-padding: var(--vs-cell-padding);
  --vs-head-gap: 4px;
  --vs-head-white-space: nowrap;
  --vs-head-font-weight: bold;
  --vs-head-height: 24px;
  --vs-head-bg-color: transparent;

  // Row
  --vs-row-top-border: thin solid black;
}

.vs-screener {
  overflow: hidden;
  font-family: var(--vs-container-font-family);
  font-size: var(--vs-container-font-size);
  border: var(--vs-container-border);
  border-radius: var(--vs-container-border-radius);
  overflow: var(--vs-container-overflow);
  color: var(--vs-container-color);

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
    border: var(--vs-container-border--error);
    color: var(--vs-container-color--error);
  }
}

.vs-no-data-view {
  text-align: center;
  padding: 150px 0;
  border: thin solid;
  border-radius: 8px;
}
</style>
