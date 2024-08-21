const __resolved__virtual_storySource_srcStories1BasicUsage1ArrayOfObjectsStoryVue = `<template>
  <Story title="1. Array of objects" source="-">
    <DevSandbox title="Array of objects" :screener="screener">
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData)
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage1ArrayOfObjectsStoryVue as default
};
