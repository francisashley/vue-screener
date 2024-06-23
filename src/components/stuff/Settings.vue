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
            { 'vs-settings__options-button--active': option.isActive },
            'vs-settings__options-button--' + option.id,
          ]"
          :title="option.title"
          @click="toggleOption(option.id)"
        >
          {{ option.text }}
        </button>
      </div>
      <h3 class="vs-settings__heading">Presentation</h3>
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
    display: var(--vs-settings__button__display);
    align-items: var(--vs-settings__button__align-items);
    justify-content: var(--vs-settings__button__justify-content);
    background: var(--vs-settings__button__background);
    border: var(--vs-settings__button__border);
    background: var(--vs-settings__button__background);
    padding: var(--vs-settings__button__padding);
    margin-left: var(--vs-settings__button__margin-left);
    cursor: var(--vs-settings__button__cursor);
    border-radius: var(--vs-settings__button__border-radius);

    &--active {
      background-color: var(--vs-settings__button--active__background-color);
    }

    &:hover {
      background-color: var(--vs-settings__button--hover__background-color);
    }
  }

  &__button-icon {
    width: var(--vs-settings__button-icon__width);
    height: var(--vs-settings__button-icon__height);
    display: var(--vs-settings__button-icon__display);
    align-items: var(--vs-settings__button-icon__align-items);
    justify-content: var(--vs-settings__button-icon__justify-content);
    color: var(--vs-settings__button-icon__color);
  }

  &__heading {
    font-weight: var(--vs-settings__heading__font-weight);
    margin: var(--vs-settings__heading__margin);
    font-size: var(--vs-settings__heading__font-size);
    text-transform: var(--vs-settings__heading__text-transform);
    opacity: var(--vs-settings__heading__opacity);
  }

  &__options {
    display: var(--vs-settings__options__display);
    gap: var(--vs-settings__options__gap);
  }

  &__options-button {
    border: var(--vs-settings__options-button__border);
    background: var(--vs-settings__options-button__background);
    padding: var(--vs-settings__options-button__padding);
    font-weight: var(--vs-settings__options-button__font-weight);
    color: var(--vs-settings__options-button__color);
    cursor: var(--vs-settings__options-button__cursor);
    border: var(--vs-settings__options-button__border);
    background: var(--vs-settings__options-button__background);
    padding: var(--vs-settings__options-button__padding);
    font-weight: var(--vs-settings__options-button__font-weight);
    color: var(--vs-settings__options-button__color);
    cursor: var(--vs-settings__options-button__cursor);
    border-radius: var(--vs-settings__options-button__border-radius);
    height: var(--vs-settings__options-button__height);
    width: var(--vs-settings__options-button__width);
    background: var(--vs-settings__options-button__background);
    margin-bottom: var(--vs-settings__options-button__margin-bottom);

    &--match-word {
      text-decoration: var(--vs-settings__options-button--match-word__text-decoration);
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
