const __resolved__virtual_storySource_srcStories3Theming2CavernStoryVue = `<template>
  <Story title="2. Cavern theme" source="-">
    <div class="vsc-bg-[#171717] vsc-min-h-[calc(100vh_-_16px)]">
      <div class="vsc-flex vsc-p-4 vsc-justify-between vsc-items-center vsc-text-white">
        <h3 v-text="'Cavern theme'" class="vsc-text-base vsc-mb-0" />
        <div class="vsc-flex vsc-items-center vsc-gap-2">
          <ScreenerSearch
            :screener="screener"
            :ui="{
              class: 'vsc-border-[#2a2b2b] vsc-bg-[#171717] vsc-text-white vsc-h-[30px]',
            }"
          />
          <ScreenerSearchOptions
            :screener="screener"
            :ui="{
              class: 'vsc-border-[#2a2b2b] vsc-bg-[#171717] vsc-p-px vsc-h-[30px]',
              toggleButton: {
                class:
                  'vsc-bg-transparent hover:vsc-bg-[#2a2b2b] vsc-text-white vsc-rounded-sm vsc-w-[26px] vsc-h-[26px]',
                activeClass: '!vsc-bg-[#3e51b5]',
              },
            }"
          />
        </div>
      </div>
      <Screener
        :screener="screener"
        :ui="{
          tableView: {
            table: {
              class: 'vsc-border-transparent',
              header: {
                cell: {
                  class: 'vsc-bg-transparent vsc-border-transparent vsc-uppercase vsc-text-[10px] vsc-h-6 vsc-py-0',
                },
              },
              row: {
                class:
                  'vsc-border-gray-700 vsc-font-medium vsc-text-[10px] vsc-text-uppercase vsc-p-2 hover:vsc-bg-[#242424] vsc-border-[#2a2b2b]',

                cell: {
                  class: 'vsc-bg-transparent vsc-border-transparent vsc-text-[11px]',
                },
              },
            },
          },
        }"
      />
      <div class="vsc-p-4">
        <ScreenerPagination
          v-if="!screener.hasError.value"
          :screener="screener"
          :ui="{
            nav: {
              button: {
                class: 'vsc-text-white vsc-h-7 vsc-py-0 vsc-px-5 vsc-bg-[#171717] hover:vsc-bg-[#2a2b2b] vsc-border-[#2a2b2b] hover:vsc-border-[#2a2b2b]', // eslint-disable-line
                activeClass: '!vsc-border-[#2a2b2b] vsc-text-[#2463eb]',
              },
            },
            leftSide: {
              class: 'vsc-text-xs vsc-min-w-[150px]',
            },
            rightSide: {
              perPageInput: {
                class: 'vsc-bg-[#171717] vsc-border-[#2a2b2b] vsc-text-white vsc-h-7',
              },
            },
          }"
        />
      </div>
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, ScreenerSearch, ScreenerSearchOptions, ScreenerPagination, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  pick: ['', 'id', 'first_name', 'last_name', 'full_name', 'email', 'gender', 'ip_address', ''],
  columnDefs: {
    id: { width: 'min-content' },
    first_name: { width: 'min-content' },
    last_name: { width: '1fr' },
    full_name: { width: '1fr' },
    email: { width: '1fr' },
    gender: { width: '1fr' },
    ip_address: { width: '1fr' },
    '': { width: '1fr' },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories3Theming2CavernStoryVue as default
};
