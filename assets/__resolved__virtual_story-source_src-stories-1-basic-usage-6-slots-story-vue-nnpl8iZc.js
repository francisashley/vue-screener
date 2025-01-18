const __resolved__virtual_storySource_srcStories1BasicUsage6SlotsStoryVue = `<template>
  <Story title="6. Slots" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener title="Override header" :data="baseData">
        <template #header>
          <span class="vsc-text-yellow-400">Header overridden</span>
        </template>
      </VueScreener>
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener title="Override footer" :data="baseData">
        <template #footer>
          <span class="vsc-text-yellow-400">Footer overridden</span>
        </template>
      </VueScreener>
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener title="Override viewport" :data="baseData">
        <template #viewport>
          <span class="vsc-text-yellow-400">Viewport overridden</span>
        </template>
      </VueScreener>
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener title="Override viewport table state" :data="baseData">
        <template #table>
          <div class="vsc-text-yellow-400 vsc-p-4">Viewport table overridden</div>
        </template>
      </VueScreener>
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener title="Override viewport loading state" :data="baseData" loading>
        <template #loading>
          <div class="vsc-text-yellow-400 vsc-p-4">Loading...</div>
        </template>
      </VueScreener>
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener title="Override viewport error state" :data="invalidData">
        <template #error>
          <div class="vsc-text-yellow-400 vsc-p-4">Overridden error state</div>
        </template>
      </VueScreener>
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener title="Override Table Head Cell" :data="baseData">
        <template #head-cell:id="props">
          <VueScreenerTableHeadCell v-bind="props">
            <div class="vsc-text-yellow-400" v-html="props.column.field ?? props.column.label" />
          </VueScreenerTableHeadCell>
        </template>
      </VueScreener>
    </div>
    <br />
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener title="Override Table Cell" :data="baseData">
        <template #cell:id="props">
          <VueScreenerTableCell v-bind="props">
            <div class="vsc-text-yellow-400" v-html="props.cell.htmlValue" />
          </VueScreenerTableCell>
        </template>
      </VueScreener>
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, VueScreenerTableCell, VueScreenerTableHeadCell } from '../../index'
import baseData from '../../fixtures/data.json'
const invalidData: any = 'this is invalid data'
<\/script>
`;
export {
  __resolved__virtual_storySource_srcStories1BasicUsage6SlotsStoryVue as default
};
