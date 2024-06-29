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
      <slot name="bad-data">Invalid data provided. Please provide an array of objects or an array of arrays.</slot>
    </div>

    <p v-if="view === 'no-data'">
      <slot name="no-data">No data provided</slot>
    </p>

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
import type { Screener } from '../interfaces/screener'
import { useScrollable } from '../hooks/use-scrollable'
import { computed } from 'vue'
import ScreenerHeader from './ScreenerHeader.vue'
import ScreenerBody from './ScreenerBody.vue'

type Props = {
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
  --vs-text-color: black;
  --vs-text-color--error: red;
  --vs-bg-color: white;
  --vs-border-color: #767676;
  --vs-border-radius: 4px;
  --vs-font-size: 14px;
  --vs-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --vs-border: thin solid var(--vs-border-color);
  --vs-border--error: thin solid red;
  --vs-overflow: auto;

  // Base Cell styles
  --vs-cell-color: var(--vs-text-color);
  --vs-cell-bg-color: var(--vs-bg-color);
  --vs-cell-bg-color--pinned: var(--vs-bg-color);
  --vs-cell-padding: 2px 5px;
  --vs-cell-border-right: thin solid var(--vs-border-color);
  --vs-cell-border-left--pinned: thin solid var(--vs-border-color);
  --vs-cell-white-space: inherit;

  // Header Cell
  --vs-header-cell-color: var(--vs-cell-color);
  --vs-header-cell-bg-color: var(--vs-bg-color);
  --vs-header-cell-padding: var(--vs-cell-padding);
  --vs-header-cell-gap: 4px;
  --vs-header-cell-white-space: nowrap;
  --vs-header-cell-font-weight: bold;
  --vs-header-cell-font-size: inherit;
  --vs-header-cell-text-transform: inherit;
  --vs-header-cell-height: 24px;
  --vs-header-cell-color: inherit;
  --vs-header-cell-color--sorting: inherit;
  --vs-sort-icon-size: 1em;

  // Row
  --vs-row-top-border: thin solid var(--vs-border-color);
  --vs-row-background: transparent;
  --vs-row-background--hover: transparent;
}

.vs-screener {
  overflow: hidden;
  font-family: var(--vs-font-family);
  font-size: var(--vs-font-size);
  border: var(--vs-border);
  border-radius: var(--vs-border-radius);
  overflow: var(--vs-overflow);
  color: var(--vs-text-color);

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
    border: var(--vs-border--error);
    color: var(--vs-text-color--error);
  }
}

.vs-no-data-view {
  text-align: center;
  padding: 150px 0;
  border: thin solid;
  border-radius: 8px;
}
</style>
