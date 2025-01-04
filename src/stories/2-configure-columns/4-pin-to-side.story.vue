<template>
  <Story title="4. Pin to the side" source="-">
    <div class="vsc-p-4 vsc-bg-zinc-800">
      <VueScreener
        title="Results"
        :data="baseData"
        :columns="{
          id: { width: 'minmax(50px, max-content)' },
          actions: { isPinned: true },
        }"
      >
        <template #head-cell:actions="props">
          <VueScreenerTableHeadCell v-bind="props">Actions</VueScreenerTableHeadCell>
        </template>
        <template #cell:actions="props">
          <VueScreenerTableCell v-bind="props">
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
    </div>
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener } from '../../index'
import VueScreenerTableCell from '../../components/table/VueScreenerTableCell.vue'
import VueScreenerTableHeadCell from '../../components/table/VueScreenerTableHeadCell.vue'
import baseData from '../../fixtures/data.json'

const handleClickEdit = (row: unknown) => console.log('edit', row)
const handleClickDelete = (row: unknown) => console.log('delete', row)
</script>
