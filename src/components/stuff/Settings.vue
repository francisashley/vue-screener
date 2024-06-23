<template>
  <Dropdown class="vs-settings">
    <template #icon>
      <RemixSettings3FillIcon />
    </template>
    <template #default>
      <FormHeading>Search</FormHeading>
      <div class="vs-settings__options">
        <button
          v-for="(option, i) in getOptions"
          :key="i"
          class="vs-settings__options-button"
          :class="[
            { 'vs-settings__options-button--active': option.isActive },
            'vs-settings__options-button--' + option.id,
          ]"
          :title="option.title"
          @click="toggleOption(option.id)"
        >
          <MatchCaseIcon class="vs-settings__options-button-icon" v-if="option.id === 'match-case'" />
          <MatchWordIcon class="vs-settings__options-button-icon" v-if="option.id === 'match-word'" />
          <RegularExpressionIcon class="vs-settings__options-button-icon" v-if="option.id === 'use-regex'" />
        </button>
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

  &__options-button {
    border: var(--vs-settings__options-button__border);
    padding: var(--vs-settings__options-button__padding);
    font-weight: var(--vs-settings__options-button__font-weight);
    color: var(--vs-settings__options-button__color);
    cursor: var(--vs-settings__options-button__cursor);
    border-radius: var(--vs-settings__options-button__border-radius);
    height: var(--vs-settings__options-button__height);
    width: var(--vs-settings__options-button__width);
    background: var(--vs-settings__options-button__background);
    margin-bottom: var(--vs-settings__options-button__margin-bottom);

    &-icon {
      height: 20px;
      width: 20px;
    }

    &--active {
      color: var(--vs-settings__options-button--active__color);
      background: var(--vs-settings__options-button--active__background);
    }

    &:hover {
      color: var(--vs-settings__options-button--hover__color);
      background: var(--vs-settings__options-button--hover__background);
    }
  }
}
</style>
