<template>
  <ToggleButtonGroup :ui="ui">
    <ToggleButton
      title="Match case"
      :active="props.screener.searchTextOptions.value.includes('match-case')"
      :ui="ui?.toggleButton"
      @click="toggleOption('match-case')"
    >
      <MatchCaseIcon :class="ui.toggleButton.icon.class" />
    </ToggleButton>
    <ToggleButton
      title="Match word"
      :active="props.screener.searchTextOptions.value.includes('match-word')"
      :ui="ui?.toggleButton"
      @click="toggleOption('match-word')"
    >
      <MatchWordIcon :class="ui.toggleButton.icon.class" />
    </ToggleButton>
    <ToggleButton
      title="Use regular expression"
      :active="props.screener.searchTextOptions.value.includes('match-regex')"
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
import { SearchTextOption } from './ScreenerSearch.vue'
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

const toggleOption = (option: SearchTextOption) => {
  if (props.screener.searchTextOptions.value.includes(option)) {
    props.screener.actions.search(
      props.screener.searchText.value,
      props.screener.searchTextOptions.value.filter((activeOption) => activeOption !== option),
    )
  } else {
    props.screener.actions.search(props.screener.searchText.value, [...props.screener.searchTextOptions.value, option])
  }
}
</script>
