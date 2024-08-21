const __resolved__virtual_storySource_srcStories1BasicUsage2ArrayOfPrimitivesStoryVue = `<template>
  <Story title="2. Array of primitives" source="-">
    <DevSandbox title="Array of primitives" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import primitivesData from '../../fixtures/primitives-data.json'

const screener = useScreener(primitivesData)
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage2ArrayOfPrimitivesStoryVue as default
};
