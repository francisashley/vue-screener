const __resolved__virtual_storySource_srcStories1BasicUsage1DataStoryVue = `<template>
  <Story title="1. Input data" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener1" title="Array of objects" />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener2" title="Array of primitives" />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener3" title="Array of mixed objects" />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import primitivesData from '../../fixtures/primitives-data.json'
import mixedObjectsData from '../../fixtures/mix-objects-data.json'

const screener1 = useVueScreener(baseData, {
  columns: {
    id: {
      width: 'minmax(50px, max-content)',
    },
  },
})

const screener2 = useVueScreener(primitivesData, {
  columns: {
    0: {
      width: 'minmax(50px, max-content)',
    },
  },
})

const screener3 = useVueScreener(mixedObjectsData)
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage1DataStoryVue as default
};
