<template>
  <ToggleButtonGroup :ui="ui">
    <ToggleButton
      title="Case sensitive"
      :active="props.screener.searchQuery.value.caseSensitive"
      :ui="ui?.toggleButton"
      @click="toggleOption('case-sensitive')"
    >
      <CaseSensitiveIcon :class="ui.toggleButton.icon.class" />
    </ToggleButton>
    <ToggleButton
      title="Whole word"
      :active="props.screener.searchQuery.value.wholeWord"
      :ui="ui?.toggleButton"
      @click="toggleOption('whole-word')"
    >
      <WholeWordIcon :class="ui.toggleButton.icon.class" />
    </ToggleButton>
    <ToggleButton
      title="Regular expression"
      :active="props.screener.searchQuery.value.regex"
      :ui="ui?.toggleButton"
      @click="toggleOption('regex')"
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

const toggleOption = (searchTextOption: 'case-sensitive' | 'whole-word' | 'regex') => {
  const updatedSearchQuery = { ...props.screener.searchQuery.value }

  if (searchTextOption === 'case-sensitive') {
    updatedSearchQuery.caseSensitive = !updatedSearchQuery.caseSensitive
  } else if (searchTextOption === 'whole-word') {
    updatedSearchQuery.wholeWord = !updatedSearchQuery.wholeWord
  } else if (searchTextOption === 'regex') {
    updatedSearchQuery.regex = !updatedSearchQuery.regex
  }

  props.screener.actions.search(updatedSearchQuery)
}
</script>
