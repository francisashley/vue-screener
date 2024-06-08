<template>
  <main
    class="vs-main"
    :class="{ 'vs-main--is-scrollable': isScrollable, 'vs-main--is-scrolled-end': isScrolledEnd }"
    ref="mainRef"
  >
    <ErrorMessage
      v-if="hasError"
      message="Invalid data was provided. Please provide an array of objects or an array of arrays."
      class="vs-error-message"
    />
    <TableView
      v-else-if="hasData && screener.renderFormat.value === 'table'"
      :screener="screener"
      :fields="getFields"
      :rows="screener.paginatedData.value"
      :include-sticky-actions="includeStickyActions"
    >
      <template #header-cell="cellProps">
        <slot name="header-cell" v-bind="cellProps" />
      </template>
      <template #value-cell="cellProps">
        <slot name="value-cell" v-bind="cellProps" />
      </template>
      <template #sticky-actions-head="cellProps">
        <slot name="sticky-actions-head" v-bind="cellProps" />
      </template>
      <template #sticky-actions-value="cellProps">
        <slot name="sticky-actions-value" v-bind="cellProps" />
      </template>
    </TableView>
    <JsonView v-else-if="hasData" :data="screener.paginatedData.value" />
    <NoDataView v-else />
  </main>
</template>

<script lang="ts" setup>
import JsonView from './views/JsonView.vue'
import TableView from './views/TableView.vue'
import NoDataView from './views/NoDataView.vue'
import { getFields as getFieldsTool } from '../utils/data.utils'
import { computed } from 'vue'
import { useScrollable } from '../hooks/use-scrollable'
import { Screener } from '@/interfaces/screener'
import ErrorMessage from './stuff/ErrorMessage.vue'

type Props = {
  screener: Screener
  includeStickyActions?: boolean
  hasError?: boolean
}

const props = defineProps<Props>()

const { ref: mainRef, isScrollable, isScrolledEnd } = useScrollable()

const getFields = computed((): string[] => {
  return getFieldsTool(props.screener.normalisedData.value)
})

const hasData = computed((): boolean => {
  return props.screener.paginatedData.value.filter((row) => row !== null).length > 0
})
</script>

<style lang="scss">
.vs-main {
  overflow-x: auto;
}
</style>
