<template>
  <Story title="4. Pin to the side" source="-">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }">
      <h3 v-text="'Results'" :style="{ fontWeight: 600, fontSize: '16px', margin: 0 }" />
      <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
        <ScreenerSearch :screener="screener" />
        <ScreenerSearchOptions :screener="screener" />
      </div>
    </div>
    <Screener :screener="screener" :style="{ marginBottom: '16px' }">
      <template #head="props">
        <ScreenerHeaderCell v-if="props.column.isPinned" v-bind="props">Actions</ScreenerHeaderCell>
      </template>
      <template #data="props">
        <ScreenerBodyCell v-if="props.column.isPinned" v-bind="props">
          <div :style="{ display: 'flex', gap: '4px' }">
            <button @click="handleClickEdit(props.item)">Edit</button>
            <button @click="handleClickDelete(props.column)">Delete</button>
          </div>
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

const handleClickEdit = (item: unknown) => console.log('edit', item)
const handleClickDelete = (item: unknown) => console.log('delete', item)

const screener = useScreener(baseData, {
  pick: ['id', 'first_name', 'last_name', 'full_name', 'email', 'gender', 'ip_address', 'actions'],
  config: {
    actions: { field: 'actions', isPinned: true },
  },
})
</script>
