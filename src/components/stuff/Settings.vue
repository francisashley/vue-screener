<template>
  <Dropdown class="vs-settings">
    <template #dropdown-button="{ show, toggle }">
      <button class="vs-settings__button" :class="[show && 'vs-settings__button--active']" @click="toggle">
        <RemixSettings3FillIcon class="vs-settings__button-icon" />
      </button>
    </template>
    <template #default>
      <h3 class="vs-settings__heading">Search</h3>
      <div class="vs-settings__options">
        <button
          v-for="(option, i) in getOptions"
          :key="i"
          class="vs-settings__options-button"
          :class="[
            {
              'vs-settings__options-button--active': option.isActive,
            },
            'vs-settings__options-button--' + option.id,
          ]"
          :title="option.title"
          @click="toggleOption(option.id)"
        >
          {{ option.text }}
        </button>
      </div>
      <h3 class="vs-settings__heading">Presentation</h3>
      <ViewSelector :active-format="screener.renderFormat.value" @select-format="handleSelectFormat($event)" />
    </template>
  </Dropdown>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import Dropdown from './Dropdown.vue'
import ViewSelector from './ViewSelector.vue'
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
  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    background: transparent;
    padding: 6px;
    margin-left: 4px;
    cursor: pointer;
    border-radius: 4px;

    &--active,
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  &__button-icon {
    width: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  &__heading {
    font-weight: 400;
    margin: 0 0 6px 0;
    font-size: 9px;
    text-transform: uppercase;
    opacity: 0.8;
  }

  &__options {
    display: flex;
    gap: 4px;
  }

  &__options-button {
    border: none;
    background: none;
    padding: 0 3px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border: none;
    background: none;
    padding: 0 3px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border-radius: 4px;
    height: 20px;
    width: 26px;
    background: white;
    margin-bottom: 8px;

    &--match-word {
      text-decoration: underline;
    }

    &--active,
    &:hover {
      color: #fff;
      background: #3e51b5;
    }
  }
}
</style>
