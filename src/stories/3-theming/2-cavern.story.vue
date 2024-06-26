<template>
  <Story title="2. Cavern" source="-">
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
              '--vs-search-input-border': 'thin solid #2a2b2b',
              '--vs-search-input-bg-color': '#171717',
              '--vs-search-input-color': 'white',
              '--vs-search-input-bg-color--focus': 'var(--vs-search-input-bg-color)',
              '--vs-search-input-height': '30px',
            }"
          />
          <ScreenerSearchOptions
            :screener="screener"
            :style="{
              '--vs-search-options-container-border': 'thin solid #2a2b2b',
              '--vs-search-options-container-bg-color': '#171717',
              '--vs-search-option-background': 'transparent',
              '--vs-search-option-background--hover': '#2a2b2b',
              '--vs-search-option-background--active': '#3e51b5',
              '--vs-search-option-color': 'white',
              '--vs-search-option-cursor': 'pointer',
              '--vs-search-option-border-radius': '4px',
              '--vs-search-option-height': '26px',
              '--vs-search-option-width': '26px',
              '--vs-search-options-container-height': '30px',
              '--vs-search-options-container-width': '30px',
              '--vs-search-option-margin-bottom': '8px',
              '--vs-search-option-color--active': '#fff',
              '--vs-search-option-color--hover': '#fff',
              '--vs-search-option-svg-size': '18px',
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
})
</script>
