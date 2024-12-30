<template>
  <ToggleButtonGroup>
    <ToggleButton
      title="Case sensitive"
      :active="props.screener.searchQuery.value.caseSensitive"
      :class="toggleButtonClass"
      :active-class="toggleButtonActiveClass"
      @click="toggleOption('case-sensitive')"
    >
      <CaseSensitiveIcon :class="twMerge('vsc-w-4 vsc-h-4', props.iconClass)" />
    </ToggleButton>
    <ToggleButton
      title="Whole word"
      :active="props.screener.searchQuery.value.wholeWord"
      :class="toggleButtonClass"
      :active-class="toggleButtonActiveClass"
      @click="toggleOption('whole-word')"
    >
      <WholeWordIcon :class="twMerge('vsc-w-4 vsc-h-4', props.iconClass)" />
    </ToggleButton>
    <ToggleButton
      title="Regular expression"
      :active="props.screener.searchQuery.value.regex"
      :class="toggleButtonClass"
      :active-class="toggleButtonActiveClass"
      @click="toggleOption('regex')"
    >
      <RegexIcon :class="twMerge('vsc-w-4 vsc-h-4', props.iconClass)" />
    </ToggleButton>
  </ToggleButtonGroup>
</template>

<script lang="ts" setup>
import { VueScreener } from '@/interfaces/vue-screener'
import { CaseSensitiveIcon, RegexIcon, WholeWordIcon } from 'lucide-vue-next'
import ToggleButtonGroup from '../ui/toggle-button/ToggleButtonGroup.vue'
import ToggleButton from '../ui/toggle-button/ToggleButton.vue'
import { twMerge } from '../../utils/tailwind-merge.utils'

const props = defineProps<{
  screener: VueScreener
  toggleButtonClass?: string
  toggleButtonActiveClass?: string
  iconClass?: string
}>()

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
