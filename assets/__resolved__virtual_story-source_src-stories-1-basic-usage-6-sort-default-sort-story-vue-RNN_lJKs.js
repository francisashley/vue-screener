const __resolved__virtual_storySource_srcStories1BasicUsage6SortDefaultSortStoryVue = `<template>
  <Story title="6. Sorting / Default sort" source="-">
    <DevSandbox title="Custom title" :screener="screener">
      <Screener
        :screener="screener"
        :ui="{
          tableView: {
            table: {
              header: {
                cell: { class: 'vsc-text-blue-500', sortingClass: '!vsc-text-[gold]' },
              },
            },
          },
        }"
      />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  defaultSortField: 'first_name',
  defaultSortDirection: 'desc',
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage6SortDefaultSortStoryVue as default
};