const __resolved__virtual_storySource_srcStories3Theming2CavernStoryVue = `<template>
  <Story title="2. Cavern theme" source="-">
    <div :style="{ 'background-color': '#171717', minHeight: 'calc(100vh - 16px)' }">
      <div
        :style="{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px',
          color: 'white',
        }"
      >
        <h3 v-text="'Cavern theme'" :style="{ fontWeight: 400, fontSize: '16px', margin: 0 }" />
        <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
          <ScreenerSearch
            :screener="screener"
            :style="{
              '--vs-border': 'thin solid #2a2b2b',
              '--vs-bg-color': '#171717',
              '--vs-color': 'white',
              '--vs-height': '30px',
            }"
          />
          <ScreenerSearchOptions
            :screener="screener"
            :style="{
              '--vs-border': 'thin solid #2a2b2b',
              '--vs-bg-color': '#171717',
              '--vs-height': '30px',
              '--vs-width': '30px',
              '--vs-icon-size': '18px',
              '--vs-option-bg': 'transparent',
              '--vs-option-bg--hover': '#2a2b2b',
              '--vs-option-bg--active': '#3e51b5',
              '--vs-option-color': 'white',
              '--vs-option-cursor': 'pointer',
              '--vs-option-border-radius': '4px',
              '--vs-option-height': '26px',
              '--vs-option-width': '26px',
              '--vs-option-margin-bottom': '8px',
              '--vs-option-color--active': '#fff',
              '--vs-option-color--hover': '#fff',
            }"
          />
        </div>
      </div>
      <Screener
        :screener="screener"
        class="vue-screener"
        :style="{
          // base styles
          '--vs-bg-color': 'transparent',
          '--vs-border-color': '#2a2b2b',
          '--vs-border': 'none',
          '--vs-text-color': 'white',
          '--vs-border-radius': '0',
          '--vs-font-size': '11px',
          // cell styles
          '--vs-cell-padding': '20px 8px',
          '--vs-cell-border-right': 'none',
          '--vs-cell-white-space': 'nowrap',
          // header cell styles
          '--vs-header-cell-font-weight': '500',
          '--vs-header-cell-font-size': '10px',
          '--vs-header-cell-text-transform': 'uppercase',
          '--vs-header-cell-padding': '8px',
          '--vs-row-background--hover': '#242424',
        }"
      />
      <ScreenerPagination
        v-if="!screener.hasError.value"
        :screener="screener"
        :style="{
          '--vs-text-color': 'white',
          '--vs-button-padding': '4px 20px',
          '--vs-button-color': 'white',
          '--vs-button-color--active': '#2463eb',
          '--vs-button-bg-color': '#171717',
          '--vs-button-bg-color--hover': '#2a2b2b',
          '--vs-button-border': 'thin solid #2a2b2b',
          '--vs-button-border--hover': 'thin solid #2a2b2b',
          '--vs-button-border--active': 'thin solid #2a2b2b',
          '--vs-text-input-border': 'thin solid #2a2b2b',
          '--vs-text-input-bg-color': '#171717',
          '--vs-text-input-color': 'white',
          '--vs-font-size': '12px',
          padding: '16px',
        }"
      />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, ScreenerSearch, ScreenerSearchOptions, ScreenerPagination, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  pick: ['', 'id', 'first_name', 'last_name', 'full_name', 'email', 'gender', 'ip_address', ''],
  rowConfig: {
    link: true,
    getLink: () => '#',
  },
  config: {
    id: { width: 'min-content' },
    first_name: { width: 'min-content' },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories3Theming2CavernStoryVue as default
};
