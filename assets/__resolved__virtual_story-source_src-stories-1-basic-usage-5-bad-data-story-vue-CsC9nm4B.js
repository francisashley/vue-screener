const __resolved__virtual_storySource_srcStories1BasicUsage5BadDataStoryVue = `<template>
  <Story title="5. Bad data" source="-">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }">
      <h3 v-text="'Bad data'" :style="{ fontWeight: 600, fontSize: '16px', margin: 0 }" />
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
import { Screener, useScreener, ScreenerSearch, ScreenerSearchOptions, ScreenerPagination } from '../../index'
const badData: any = 'bad data'
const screener = useScreener(badData)
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage5BadDataStoryVue as default
};
