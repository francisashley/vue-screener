const __resolved__virtual_storySource_srcStories1BasicUsage7SortDefaultSortStoryVue = `<template>
  <Story title="7. Sorting / Default sort" source="-">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }">
      <h3 v-text="'Custom title'" :style="{ fontWeight: 400, fontSize: '16px', margin: 0 }" />
      <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
        <ScreenerSearch :screener="screener" />
        <ScreenerSearchOptions :screener="screener" />
      </div>
    </div>
    <Screener
      :screener="screener"
      :style="{
        marginBottom: '12px',
        '--vs-header-cell-color': 'blue',
        '--vs-header-cell-color--sorting': 'black',
      }"
    />
    <ScreenerPagination :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { Screener, ScreenerSearch, ScreenerSearchOptions, ScreenerPagination, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  defaultSort: { field: 'first_name', direction: 'desc' },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage7SortDefaultSortStoryVue as default
};
