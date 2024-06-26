const __resolved__virtual_storySource_srcStories2ConfigureColumns5PickFieldsStoryVue = `<template>
  <Story title="5. Pick fields" source="-">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }">
      <h3 v-text="'Results'" :style="{ fontWeight: 600, fontSize: '16px', margin: 0 }" />
      <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
        <ScreenerSearch :screener="screener" />
        <ScreenerSearchOptions :screener="screener" />
      </div>
    </div>
    <Screener :screener="screener" :style="{ marginBottom: '12px' }" />
    <ScreenerPagination :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { Screener, ScreenerSearch, ScreenerSearchOptions, ScreenerPagination, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  pick: ['id', 'first_name', 'last_name'],
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns5PickFieldsStoryVue as default
};
