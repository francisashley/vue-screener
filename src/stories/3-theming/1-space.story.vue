<template>
  <Story title="1. Space theme" source="-">
    <div class="vsc-bg-[#101827] vsc-p-4 vsc-min-h-[calc(100vh_-_16px)]">
      <div class="vsc-flex vsc-justify-between vsc-items-center vsc-mb-4 vsc-text-white">
        <h3 v-text="'Space theme'" class="vsc-text-base vsc-mb-0" />
        <div class="vsc-flex vsc-items-center vsc-gap-2">
          <ScreenerSearch
            :screener="screener"
            :ui="{
              class: 'vsc-border-[#374151] vsc-bg-[#1f2937] vsc-text-white',
            }"
          />
          <ScreenerSearchOptions
            :screener="screener"
            :ui="{
              class: 'vsc-border-[#374151] vsc-bg-[#1f2937]',
              toggleButton: {
                class:
                  'vsc-bg-[#1f2937] hover:vsc-bg-[#374151] vsc-text-white vsc-rounded-sm vsc-w-[25px] vsc-h-[25px]',
                activeClass: '!vsc-bg-[#3e51b5]',
              },
            }"
          />
        </div>
      </div>
      <VueScreener
        :screener="screener"
        class="vsc-mb-4"
        :ui="{
          tableView: {
            table: {
              class: 'vsc-border-gray-700',
              header: {
                cell: {
                  class: 'vsc-bg-gray-800 vsc-border-gray-700',
                },
              },
              row: {
                class: 'vsc-border-gray-700',
                cell: {
                  class: 'vsc-bg-gray-900 vsc-border-gray-700',
                },
              },
            },
          },
        }"
        :style="{
          '--vs-bg-color': 'transparent',
          '--vs-border-color': '#4b5563',
          '--vs-text-color': 'white',
          '--vs-border-radius': '8px',
          '--vs-cell-padding': '4px 8px',
          '--vs-header-cell-bg-color': '#1f2937',
        }"
      />
      <ScreenerPagination
        v-if="!screener.hasError.value"
        :screener="screener"
        :ui="{
          nav: {
            button: {
              class: 'vsc-text-white vsc-py-1 vsc-px-5 vsc-bg-[#1f2937] hover:vsc-bg-[#374151] vsc-border-[#374151] hover:vsc-border-[#374151]', // eslint-disable-line
              activeClass: 'vsc-border-[#374151] vsc-text-[#2463eb]',
            },
          },
          leftSide: {
            class: 'vsc-min-w-[150px]',
          },
          rightSide: {
            perPageInput: {
              class: 'vsc-bg-[#1f2937] vsc-border-[#374151] vsc-text-white',
            },
          },
        }"
      />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, ScreenerSearch, ScreenerSearchOptions, ScreenerPagination, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useVueScreener(baseData)
</script>
