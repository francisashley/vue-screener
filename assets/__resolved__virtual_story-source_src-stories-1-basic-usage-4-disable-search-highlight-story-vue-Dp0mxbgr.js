const __resolved__virtual_storySource_srcStories1BasicUsage4DisableSearchHighlightStoryVue = `<template>
  <Story title="4. Disable search highlight" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener" title="Custom title" />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useVueScreener(baseData, {
  disableSearchHighlight: true,
  columns: {
    id: {
      width: 'minmax(50px, max-content)',
    },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage4DisableSearchHighlightStoryVue as default
};
