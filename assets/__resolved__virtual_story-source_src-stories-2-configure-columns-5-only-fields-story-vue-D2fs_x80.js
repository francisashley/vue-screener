const __resolved__virtual_storySource_srcStories2ConfigureColumns5OnlyFieldsStoryVue = `<template>
  <Story title="5. Only fields" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener" title="Results" />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener = useVueScreener(baseData, {
  columns: {
    id: { only: true, order: 0, width: 'minmax(50px, max-content)' },
    first_name: { only: true, order: 1 },
    last_name: { only: true, order: 2 },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns5OnlyFieldsStoryVue as default
};
