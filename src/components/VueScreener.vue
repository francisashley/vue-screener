<template>
  <section class="vs-app">
    <template v-if="isValidInput">
      <ScreenerHeader v-if="includeHeader" :title="title" :screener="screener" />
      <ScreenerMain :screener="screener" :include-sticky-actions="includeStickyActions">
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
      <ScreenerFooter :screener="screener" />
    </template>
    <ErrorMessage
      v-else
      message="Invalid data was provided. Please provide an array of objects or an array of arrays."
      class="vs-error-message"
    />
  </section>
</template>

<script lang="ts" setup>
import ScreenerHeader from './ScreenerHeader.vue'
import ScreenerMain from './ScreenerMain.vue'
import ScreenerFooter from './ScreenerFooter.vue'
import ErrorMessage from './stuff/ErrorMessage.vue'
import { isValidInput as isValidInputTool } from '../utils/data.utils'
import { computed } from 'vue'
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
  defaultCurrentPage: props.currentPage,
  defaultPerPage: props.perPage,
  defaultData: props.data,
  pick: props.pick,
  omit: props.omit,
})

const isValidInput = computed((): boolean => {
  return isValidInputTool(screener.data.value)
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
