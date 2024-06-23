<template>
  <Dropdown class="vs-settings">
    <template #icon>
      <RemixSettings3FillIcon />
    </template>
    <template #default>
      <FormHeading>Search</FormHeading>
      <CheckableGroup :options="getOptions" @toggle="toggleOption($event)" />
      <FormHeading>Presentation</FormHeading>
      <Switch
        :value="screener.renderFormat.value"
        :options="[
          { label: 'Table', value: 'table' },
          { label: 'Raw', value: 'raw' },
        ]"
        @select="handleSelectFormat($event)"
      />
    </template>
  </Dropdown>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import Dropdown from './Dropdown.vue'
import Switch from '../form/Switch.vue'
import CheckableGroup from '../form/CheckableGroup.vue'
import FormHeading from '../form/Heading.vue'
import RemixSettings3FillIcon from '../icons/RemixSettings3FillIcon.vue'
import { Screener } from '@/interfaces/screener'

export type SearchQueryOption = 'match-case' | 'match-word' | 'use-regex'

const props = defineProps<{
  screener: Screener
}>()

type SearchQueryInternalOption = {
  id: SearchQueryOption
  title: string
  isActive?: boolean
}

const options = ref<SearchQueryInternalOption[]>([
  { id: 'match-case', title: 'Match case' },
  { id: 'match-word', title: 'Match word' },
  { id: 'use-regex', title: 'Use regular expression' },
])

const getOptions = computed<SearchQueryInternalOption[]>(() => {
  return options.value.map((option: SearchQueryInternalOption) => ({
    ...option,
    isActive: props.screener.searchOptions.value.includes(option.id),
  }))
})

const toggleOption = (option: SearchQueryOption) => {
  if (props.screener.searchOptions.value.includes(option)) {
    props.screener.actions.search(
      props.screener.highlightQuery.value,
      props.screener.searchOptions.value.filter((activeOption) => activeOption !== option),
    )
  } else {
    props.screener.actions.search(props.screener.highlightQuery.value, [...props.screener.searchOptions.value, option])
  }
}

const handleSelectFormat = (format: 'table' | 'raw') => {
  props.screener.renderFormat.value = format
}
</script>

<style lang="scss"></style>
