const __resolved__virtual_storySource_srcStories1BasicUsage3ArrayOfMixedObjectsStoryVue = `<template>
  <Story title="3. Array of mixed objects" source="-">
    <DevSandbox title="Array of mixed objects" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'

const screener = useScreener(mixedObjectsData)
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage3ArrayOfMixedObjectsStoryVue as default
};
