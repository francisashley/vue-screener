const __resolved__virtual_storySource_srcStories1BasicUsage2StatesStoryVue = `<template>
  <Story title="2. States" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener title="No data" :data="[]" />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener title="Loading" :data="baseData" loading />
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener title="Bad data" :data="'bad data' as any" />
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from '../../index'
import baseData from '../../fixtures/data.json'
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage2StatesStoryVue as default
};
