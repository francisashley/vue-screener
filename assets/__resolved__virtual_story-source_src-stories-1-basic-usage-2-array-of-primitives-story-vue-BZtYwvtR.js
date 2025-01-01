const __resolved__virtual_storySource_srcStories1BasicUsage2ArrayOfPrimitivesStoryVue = `<template>
  <Story title="2. Array of primitives" source="-">
    <DevSandbox title="Array of primitives" :screener="screener">
      <VueScreener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import primitivesData from '../../fixtures/primitives-data.json'

const screener = useVueScreener(primitivesData)
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage2ArrayOfPrimitivesStoryVue as default
};
