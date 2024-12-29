<template>
  <ToggleButtonGroup :ui="ui">
    <ToggleButton
      title="Match case"
      :active="props.screener.searchQuery.value.caseSensitive"
      :ui="ui?.toggleButton"
      @click="toggleOption('match-case')"
    >
      <CaseSensitiveIcon :class="ui.toggleButton.icon.class" />
    </ToggleButton>
    <ToggleButton
      title="Match word"
      :active="props.screener.searchQuery.value.wholeWord"
      :ui="ui?.toggleButton"
      @click="toggleOption('match-word')"
    >
      <WholeWordIcon :class="ui.toggleButton.icon.class" />
    </ToggleButton>
    <ToggleButton
      title="Use regular expression"
      :active="props.screener.searchQuery.value.regex"
      :ui="ui?.toggleButton"
      @click="toggleOption('match-regex')"
    >
      <RegexIcon :class="ui.toggleButton.icon.class" />
    </ToggleButton>
  </ToggleButtonGroup>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { VueScreener } from '@/interfaces/vue-screener'
import { CaseSensitiveIcon, RegexIcon, WholeWordIcon } from 'lucide-vue-next'
import ToggleButtonGroup from '../ui/toggle-button/ToggleButtonGroup.vue'
import ToggleButton, { ToggleButtonUI } from '../ui/toggle-button/ToggleButton.vue'
import { twMerge } from '../../utils/tailwind-merge.utils'

export type VueScreenerSearchOptionsUI = {
  class?: string
  toggleButton?: ToggleButtonUI & {
    icon?: {
      class?: string
    }
  }
}

const props = defineProps<{
  screener: VueScreener
  ui?: VueScreenerSearchOptionsUI
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
  const updatedSearchQuery = { ...props.screener.searchQuery.value }

  if (searchTextOption === 'match-case') {
    updatedSearchQuery.caseSensitive = !updatedSearchQuery.caseSensitive
  } else if (searchTextOption === 'match-word') {
    updatedSearchQuery.wholeWord = !updatedSearchQuery.wholeWord
  } else if (searchTextOption === 'match-regex') {
    updatedSearchQuery.regex = !updatedSearchQuery.regex
  }

  props.screener.actions.search(updatedSearchQuery)
}
</script>
