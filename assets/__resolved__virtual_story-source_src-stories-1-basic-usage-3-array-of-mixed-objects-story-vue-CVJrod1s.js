const __resolved__virtual_storySource_srcStories1BasicUsage3ArrayOfMixedObjectsStoryVue = `<template>
  <Story title="3. Array of mixed objects" source="-">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }">
      <h3 v-text="'Array of mixed objects'" :style="{ fontWeight: 600, fontSize: '16px', margin: 0 }" />
      <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
        <ScreenerSearch :screener="screener" />
        <ScreenerSearchOptions :screener="screener" />
      </div>
    </div>
    <Screener :screener="screener" :style="{ marginBottom: '16px' }" />
    <ScreenerPagination :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { Screener, ScreenerPagination, ScreenerSearch, ScreenerSearchOptions, useScreener } from '../../index'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'
const screener = useScreener(mixedObjectsData)
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage3ArrayOfMixedObjectsStoryVue as default
};
