<template>
  <Story title="4. Stick to the side" source="-">
    <DevSandbox title="Results" :screener="screener">
      <Screener :screener="screener" :style="{ marginBottom: '12px' }">
        <template #table-head="props">
          <TableCell v-if="props.column.isSticky" v-bind="props">Actions</TableCell>
        </template>
        <template #table-cell="props">
          <TableCell v-if="props.column.isSticky" v-bind="props">
            <div :style="{ display: 'flex', gap: '5px', padding: '3px 0' }">
              <button
                @click="handleClickEdit(props.item)"
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
          </TableCell>
        </template>
      </Screener>
    </DevSandbox>
  </Story>
</template>

<script lang="ts" setup>
import { Screener, useScreener } from '../../index'
import TableCell from '../../components/ui/table/TableCell.vue'
import baseData from '../../fixtures/data.json'
import DevSandbox from '../../components/dev/Sandbox.vue'

const handleClickEdit = (item: unknown) => console.log('edit', item)
const handleClickDelete = (item: unknown) => console.log('delete', item)

const screener = useScreener(baseData, {
  pick: ['id', 'first_name', 'last_name', 'full_name', 'email', 'gender', 'ip_address', 'actions'],
  columnDefs: {
    actions: { field: 'actions', isSticky: true },
  },
})
</script>
