const __resolved__virtual_storySource_srcStories4Recipes4PinnedMenuStoryVue = `<template>
  <Story title="1. Pinned menu" source="-">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }">
      <h3 v-text="'Results'" :style="{ fontWeight: 400, fontSize: '16px', margin: 0 }" />
      <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
        <ScreenerSearch :screener="screener" />
        <ScreenerSearchOptions :screener="screener" />
      </div>
    </div>
    <Screener :screener="screener" :style="{ marginBottom: '12px' }">
      <template #head="props">
        <ScreenerHeaderCell v-if="props.column.isPinned" v-bind="props">Menu</ScreenerHeaderCell>
      </template>
      <template #data="props">
        <ScreenerBodyCell v-if="props.column.isPinned" v-bind="props">
          <select>
            <option>A menu</option>
            <option>Item A</option>
            <option>Item b</option>
          </select>
        </ScreenerBodyCell>
      </template>
    </Screener>
    <ScreenerPagination :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { Screener, ScreenerSearch, ScreenerSearchOptions, ScreenerPagination, useScreener } from '../../index'
import baseData from '../../fixtures/data.json'
import ScreenerHeaderCell from '../../components/ScreenerHeaderCell.vue'
import ScreenerBodyCell from '../../components/ScreenerBodyCell.vue'

const screener = useScreener(baseData, {
  pick: ['id', 'first_name', 'last_name', 'full_name', 'email', 'gender', 'ip_address', 'menu'],
  config: {
    menu: { label: '', field: 'menu', isPinned: true },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories4Recipes4PinnedMenuStoryVue as default
};
