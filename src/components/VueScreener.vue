<template>
  <section class="vs-app">
    <ScreenerHeader v-if="!screener.hasError.value && includeHeader" :screener="screener" />
    <ScreenerMain :screener="screener">
      <template #header-cell="cellProps">
        <slot name="header-cell" v-bind="cellProps" />
      </template>
      <template #value-cell="cellProps">
        <slot name="value-cell" v-bind="cellProps" />
      </template>
      <template #sticky-actions-head="cellProps">
        <slot name="sticky-actions-head" v-bind="cellProps" />
      </template>
      <template #sticky-actions-value="cellProps"> <slot name="sticky-actions-value" v-bind="cellProps" /> </template>
    </ScreenerMain>
    <ScreenerFooter v-if="!screener.hasError.value" :screener="screener" />
  </section>
</template>

<script lang="ts" setup>
import ScreenerHeader from './ScreenerHeader.vue'
import ScreenerMain from './ScreenerMain.vue'
import ScreenerFooter from './ScreenerFooter.vue'
import { useScreener } from '../hooks/use-screener'

type Props = {
  title?: string
  data?: unknown[]
  pick?: string[]
  omit?: string[]
  perPage?: number
  currentPage?: number
  includeStickyActions?: boolean
  includeHeader?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Results',
  data: () => [],
  pick: () => [],
  omit: () => [],
  perPage: 15,
  currentPage: 1,
  includeStickyActions: false,
  includeHeader: true,
})

const screener = useScreener({
  title: props.title,
  includeStickyActions: props.includeStickyActions,
  defaultCurrentPage: props.currentPage,
  defaultPerPage: props.perPage,
  defaultData: props.data,
  pick: props.pick,
  omit: props.omit,
})
</script>

<style lang="scss">
.vs-app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 14px;
  border: thin solid black;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
}
</style>
