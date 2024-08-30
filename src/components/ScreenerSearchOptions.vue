<template>
  <ToggleButtonGroup :ui="ui">
    <ToggleButton
      title="Match case"
      :active="props.screener.searchQuery.value.searchTextOptions.matchCase"
      :ui="ui?.toggleButton"
      @click="toggleOption('match-case')"
    >
      <MatchCaseIcon :class="ui.toggleButton.icon.class" />
    </ToggleButton>
    <ToggleButton
      title="Match word"
      :active="props.screener.searchQuery.value.searchTextOptions.matchWord"
      :ui="ui?.toggleButton"
      @click="toggleOption('match-word')"
    >
      <MatchWordIcon :class="ui.toggleButton.icon.class" />
    </ToggleButton>
    <ToggleButton
      title="Use regular expression"
      :active="props.screener.searchQuery.value.searchTextOptions.matchRegex"
      :ui="ui?.toggleButton"
      @click="toggleOption('match-regex')"
    >
      <RegularExpressionIcon :class="ui.toggleButton.icon.class" />
    </ToggleButton>
  </ToggleButtonGroup>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Screener } from '@/interfaces/screener'
import MatchCaseIcon from './icons/MaterialDesignMatchCase.vue'
import MatchWordIcon from './icons/MaterialDesignMatchWord.vue'
import RegularExpressionIcon from './icons/MaterialDesignRegularExpression.vue'
import ToggleButtonGroup from './ui/toggle-button/ToggleButtonGroup.vue'
import ToggleButton, { ToggleButtonUI } from './ui/toggle-button/ToggleButton.vue'
import { twMerge } from '../utils/tailwind-merge.utils'

export type ScreenerSearchOptionsUI = {
  class?: string
  toggleButton?: ToggleButtonUI & {
    icon?: {
      class?: string
    }
  }
}

const props = defineProps<{
  screener: Screener
  ui?: ScreenerSearchOptionsUI
}>()

const uiDefaults = {
  toggleButton: {
    icon: {
      class: 'vsc-w-4 vsc-h-4',
    },
  },
}

const ui = computed(() => {
  return {
    class: props.ui?.class,
    toggleButton: {
      ...props.ui?.toggleButton,
      icon: {
        class: twMerge(uiDefaults.toggleButton.icon.class, props.ui?.toggleButton?.icon?.class),
      },
    },
  }
})

const toggleOption = (searchTextOption: 'match-case' | 'match-word' | 'match-regex') => {
  const updatedSearchTextOptions = { ...props.screener.searchQuery.value.searchTextOptions }

  if (searchTextOption === 'match-case') {
    updatedSearchTextOptions.matchCase = !updatedSearchTextOptions.matchCase
  } else if (searchTextOption === 'match-word') {
    updatedSearchTextOptions.matchWord = !updatedSearchTextOptions.matchWord
  } else if (searchTextOption === 'match-regex') {
    updatedSearchTextOptions.matchRegex = !updatedSearchTextOptions.matchRegex
  }

  props.screener.actions.search(props.screener.searchQuery.value.searchText, updatedSearchTextOptions)
}
</script>
