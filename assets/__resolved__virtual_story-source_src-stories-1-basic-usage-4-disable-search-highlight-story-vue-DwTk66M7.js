const __resolved__virtual_storySource_srcStories1BasicUsage4DisableSearchHighlightStoryVue = `<template>
  <Story title="4. Disable search highlight" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Custom title"
        :data="baseData"
        disable-search-highlight
        :columns="{ id: { width: 'minmax(50px, max-content)' } }"
      />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage4DisableSearchHighlightStoryVue as default
};
