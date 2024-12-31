<template>
  <div
    :class="
      twMerge(
        'vsc-grid vsc-items-center vsc-justify-between vsc-text-zinc-300 vsc-text-sm vsc-gap-2 vsc-whitespace-nowrap vsc-grid-cols-[150px_auto_150px]',
        props.class,
      )
    "
  >
    <slot :screener="screener">
      <VueScreenerPaginationResults
        :total="screener.queriedRows.value.length ?? 0"
        :current-page="props.screener.searchQuery.value.page"
        :per-page="props.screener.searchQuery.value.rowsPerPage"
      />

      <VueScreenerPaginationButtons
        :total="props.screener.queriedRows.value.length"
        :per-page="props.screener.searchQuery.value.rowsPerPage"
        :current-page="props.screener.searchQuery.value.page"
        @go-to="screener.actions.goToPage"
      />

      <VueScreenerPaginationRowsPerPage
        :value="screener.searchQuery.value.rowsPerPage"
        @change="props.screener.actions.setPerPage"
        class="vsc-ml-auto"
      />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { VueScreener } from '@/interfaces/vue-screener'
import { computed, HTMLAttributes, onMounted, watch } from 'vue'
import VueScreenerPaginationRowsPerPage from '../pagination/VueScreenerPaginationRowsPerPage.vue'
import VueScreenerPaginationResults from '../pagination/VueScreenerPaginationResults.vue'
import VueScreenerPaginationButtons from '../pagination/VueScreenerPaginationButtons.vue'
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
  screener: VueScreener
  class?: HTMLAttributes['class']
}>()

const totalPages = computed((): number => {
  return Math.ceil(props.screener.queriedRows.value.length / props.screener.searchQuery.value.rowsPerPage) || 0
})

const currentPageIsInRange = computed((): boolean => {
  return totalPages.value >= props.screener.searchQuery.value.page
})

onMounted(() => {
  ensureCurrentPageIsValid()
})

watch(
  () => props.screener.queriedRows.value.length,
  () => ensureCurrentPageIsValid(),
)

const ensureCurrentPageIsValid = (): void => {
  if (!currentPageIsInRange.value) {
    props.screener.actions.goToPage(totalPages.value ? totalPages.value : 1)
  }
}
</script>
