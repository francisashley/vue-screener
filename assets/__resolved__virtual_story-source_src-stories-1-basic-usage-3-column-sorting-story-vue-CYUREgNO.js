const __resolved__virtual_storySource_srcStories1BasicUsage3ColumnSortingStoryVue = `<template>
  <Story title="3. Sort columns" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener1" title="Default sort field" />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener2" title="Invert sort field" />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener :screener="screener3" title="Default sort field direction" />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import baseData from '../../fixtures/data.json'

const screener1 = useVueScreener(baseData, {
  defaultSortField: 'first_name',
  columns: {
    id: { width: 'minmax(50px, max-content)' },
  },
})

const screener2 = useVueScreener(baseData, {
  defaultSortField: 'first_name',
  columns: {
    id: { width: 'minmax(50px, max-content)' },
    first_name: { invertSort: true },
  },
})

const screener3 = useVueScreener(baseData, {
  defaultSortField: 'first_name',
  defaultSortDirection: 'asc',
  columns: {
    id: { width: 'minmax(50px, max-content)' },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage3ColumnSortingStoryVue as default
};
