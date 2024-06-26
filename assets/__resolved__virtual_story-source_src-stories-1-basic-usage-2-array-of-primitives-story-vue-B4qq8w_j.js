const __resolved__virtual_storySource_srcStories1BasicUsage2ArrayOfPrimitivesStoryVue = `<template>
  <Story title="2. Array of primitives" source="-">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }">
      <h3 v-text="'Array of primitives'" :style="{ fontWeight: 600, fontSize: '16px', margin: 0 }" />
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
import primitivesData from '../../fixtures/primitives-data.json'

const screener = useScreener(primitivesData)
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage2ArrayOfPrimitivesStoryVue as default
};
