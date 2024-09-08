const __resolved__virtual_storySource_srcStories1BasicUsage9EditableStoryVue = `<template>
  <Story title="9. Editable" source="-">
    <DevSandbox title="Editable" :screener="screener" can-toggle-editable>
      <Screener :screener="screener" />
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import DevSandbox from '../../components/dev/Sandbox.vue'
import baseData from '../../fixtures/data.json'

const screener = useScreener(baseData, {
  editable: true,
  defaultItemsPerPage: 20,
  onCellChanged: (event) => console.log('CellChangedEvent >>>', event),
  onItemChanged: (event) => console.log('ItemChangedEvent >>>', event),
  onChanged: (event) => console.log('ChangedEvent >>>', event),
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage9EditableStoryVue as default
};
