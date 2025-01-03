const __resolved__virtual_storySource_srcStories1BasicUsage3ColumnSortingStoryVue = `<template>
  <Story title="3. Sort columns" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Default sort field"
        :data="baseData"
        default-sort-field="first_name"
        :columns="{ id: { width: 'minmax(50px, max-content)' } }"
      />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Invert sort field"
        :data="baseData"
        default-sort-field="first_name"
        :columns="{ id: { width: 'minmax(50px, max-content)' }, first_name: { invertSort: true } }"
      />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Default sort field direction"
        :data="baseData"
        default-sort-field="first_name"
        default-sort-direction="asc"
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
  __resolved__virtual_storySource_srcStories1BasicUsage3ColumnSortingStoryVue as default
};
