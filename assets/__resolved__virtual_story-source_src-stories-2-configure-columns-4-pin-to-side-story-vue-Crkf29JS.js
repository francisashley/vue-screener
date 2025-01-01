const __resolved__virtual_storySource_srcStories2ConfigureColumns4PinToSideStoryVue = `<template>
  <Story title="4. Stick to the side" source="-">
    <DevSandbox title="Results" :screener="screener">
      <VueScreener :screener="screener" :style="{ marginBottom: '12px' }">
        <template #header-cell="props">
          <VueScreenerTableHeadCell v-if="props.column.isPinned" v-bind="props">Actions</VueScreenerTableHeadCell>
        </template>
        <template #body-cell="props">
          <VueScreenerTableCell v-if="props.column.isPinned" v-bind="props">
            <div :style="{ display: 'flex', gap: '5px', padding: '3px 0' }">
              <button
                @click="handleClickEdit(props.row)"
                class="vsc-border vsc-border-black vsc-rounded vsc-px-1.5 vsc-py-0.5 vsc-leading-none vsc-text-xs vsc-bg-neutral-100 vsc-text-black"
              >
                Edit
              </button>
              <button
                @click="handleClickDelete(props.column)"
                class="vsc-border vsc-border-black vsc-rounded vsc-px-1.5 vsc-py-0.5 vsc-leading-none vsc-text-xs vsc-bg-neutral-100 vsc-text-black"
              >
                Delete
              </button>
            </div>
          </VueScreenerTableCell>
        </template>
      </VueScreener>
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, useVueScreener } from '../../index'
import VueScreenerTableCell from '../../components/table/VueScreenerTableCell.vue'
import VueScreenerTableHeadCell from '../../components/table/VueScreenerTableHeadCell.vue'
import baseData from '../../fixtures/data.json'
import DevSandbox from '../../components/dev/Sandbox.vue'

const handleClickEdit = (row: unknown) => console.log('edit', row)
const handleClickDelete = (row: unknown) => console.log('delete', row)

const screener = useVueScreener(baseData, {
  columns: {
    actions: { isPinned: true },
  },
})
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories2ConfigureColumns4PinToSideStoryVue as default
};