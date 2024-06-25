<template>
  <Story title="4. Pin to the side" group="configure-columns" source="-">
    <ScreenerHeader :screener="screener" />
    <VueScreener :screener="screener">
      <template #head="props">
        <Head v-if="props.column.isPinned" v-bind="props">Actions</Head>
      </template>
      <template #data="props">
        <Data v-if="props.column.isPinned" v-bind="props">
          <div :style="{ display: 'flex', gap: '4px' }">
            <button @click="handleClickEdit(props.item)">Edit</button>
            <button @click="handleClickDelete(props.column)">Delete</button>
          </div>
        </Data>
      </template>
    </VueScreener>
    <ScreenerFooter :screener="screener" />
  </Story>
</template>

<script lang="ts" setup>
import { VueScreener, Header as ScreenerHeader, Footer as ScreenerFooter } from '../../index'
import baseData from '../../fixtures/data.json'
import Head from '../../components/table/TableHead.vue'
import Data from '../../components/table/TableData.vue'
import { useScreener } from '../../hooks/use-screener'

const handleClickEdit = (item: unknown) => console.log('edit', item)
const handleClickDelete = (item: unknown) => console.log('delete', item)

const screener = useScreener(baseData, {
  title: 'Results',
  pick: ['id', 'first_name', 'last_name', 'full_name', 'email', 'gender', 'ip_address', 'actions'],
  config: {
    actions: { field: 'actions', isPinned: true },
  },
})
</script>
