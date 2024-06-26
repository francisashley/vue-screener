<template>
  <Story title="1. Space" source="-">
    <div :style="{ 'background-color': '#101827', padding: '16px', minHeight: 'calc(100vh - 16px)' }">
      <div
        :style="{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          color: 'white',
        }"
      >
        <h3 v-text="'Space theme'" :style="{ fontWeight: 400, fontSize: '16px', margin: 0 }" />
        <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
          <ScreenerSearch
            :screener="screener"
            :style="{
              '--vs-search-input-border': 'thin solid #374151',
              '--vs-search-input-bg-color': '#1f2937',
              '--vs-search-input-color': 'white',
            }"
          />
          <ScreenerSearchOptions
            :screener="screener"
            :style="{
              '--vs-search-options-container-border': 'thin solid #374151',
              '--vs-search-options-container-bg-color': '#1f2937',
              '--vs-search-option-background': '#1f2937',
              '--vs-search-option-background--hover': '#374151',
              '--vs-search-option-background--active': '#3e51b5',
              '--vs-search-option-color': 'white',
              '--vs-search-option-cursor': 'pointer',
              '--vs-search-option-border-radius': '4px',
              '--vs-search-option-height': '20px',
              '--vs-search-option-width': '20px',
              '--vs-search-option-margin-bottom': '8px',
              '--vs-search-option-color--active': '#fff',
              '--vs-search-option-color--hover': '#fff',
            }"
          />
        </div>
      </div>
      <Screener
        :screener="screener"
        class="vue-screener"
        :style="{
          '--vs-bg-color': 'transparent',
          '--vs-border-color': '#4b5563',
          '--vs-text-color': 'white',
          '--vs-border-radius': '8px',
          '--vs-cell-padding': '4px 8px',
          '--vs-header-cell-bg-color': '#1f2937',
          marginBottom: '16px',
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
          '--vs-button-bg-color': '#1f2937',
          '--vs-button-bg-color--hover': '#374151',
          '--vs-button-border': 'thin solid #374151',
          '--vs-button-border--hover': 'thin solid #374151',
          '--vs-button-border--active': 'thin solid #374151',
          '--vs-text-input-border': 'thin solid #374151',
          '--vs-text-input-bg-color': '#1f2937',
          '--vs-text-input-color': 'white',
        }"
      />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, ScreenerSearch, ScreenerSearchOptions, ScreenerPagination, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData)
</script>
