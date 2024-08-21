const __resolved__virtual_storySource_srcStories1BasicUsage8DisablePadPageLengthStoryVue = `<template>
  <Story title="8. Fixed page size" source="-">
    <DevSandbox title="Custom title" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  fixedPageSize: true,
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage8DisablePadPageLengthStoryVue as default
};
