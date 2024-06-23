<template>
  <Dropdown class="vs-settings">
    <template #icon>
      <RemixSettings3FillIcon />
    </template>
    <template #default>
      <FormHeading>Search</FormHeading>
      <div class="vs-settings__options">
        <Checkable
          v-for="(option, i) in getOptions"
          :key="i"
          :title="option.title"
          @click="toggleOption(option.id)"
          :checked="option.isActive"
        >
          <MatchCaseIcon v-if="option.id === 'match-case'" />
          <MatchWordIcon v-else-if="option.id === 'match-word'" />
          <RegularExpressionIcon v-else-if="option.id === 'use-regex'" />
        </Checkable>
      </div>
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
import Checkable from '../form/Checkable.vue'
import FormHeading from '../form/Heading.vue'
import MatchCaseIcon from '../icons/MaterialDesignMatchCase.vue'
import MatchWordIcon from '../icons/MaterialDesignMatchWord.vue'
import RegularExpressionIcon from '../icons/MaterialDesignRegularExpression.vue'
import RemixSettings3FillIcon from '../icons/RemixSettings3FillIcon.vue'
import { Screener } from '@/interfaces/screener'

export type SearchQueryOption = 'match-case' | 'match-word' | 'use-regex'

const props = defineProps<{
  screener: Screener
}>()

type SearchQueryInternalOption = {
  id: SearchQueryOption
  title: string
  text: string
  isActive?: boolean
}

const options = ref<SearchQueryInternalOption[]>([
  { id: 'match-case', title: 'Match case', text: 'Aa' },
  { id: 'match-word', title: 'Match word', text: 'ab' },
  { id: 'use-regex', title: 'Use regular expression', text: '.*' },
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

<style lang="scss">
.vs-settings {
  &__options {
    display: var(--vs-settings__options__display);
    gap: var(--vs-settings__options__gap);
  }

  &__options-button-icon {
    height: var(--vs-settings__options-button-icon__height);
    width: var(--vs-settings__options-button-icon__width);
  }
}
</style>
