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
  --vs-settings__button__display: inline-flex;
  --vs-settings__button__align-items: center;
  --vs-settings__button__justify-content: center;
  --vs-settings__button__background: transparent;
  --vs-settings__button__border: 0;
  --vs-settings__button__background: transparent;
  --vs-settings__button__padding: 6px;
  --vs-settings__button__margin-left: 4px;
  --vs-settings__button__cursor: pointer;
  --vs-settings__button__border-radius: 4px;
  --vs-settings__button--active__background-color: rgba(255, 255, 255, 0.2);
  --vs-settings__button--hover__background-color: rgba(255, 255, 255, 0.2);

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

  --vs-settings__button-icon__width: 16px;
  --vs-settings__button-icon__height: 16px;
  --vs-settings__button-icon__display: inline-flex;
  --vs-settings__button-icon__align-items: center;
  --vs-settings__button-icon__justify-content: center;
  --vs-settings__button-icon__color: white;

  &__button-icon {
    width: var(--vs-settings__button-icon__width);
    height: var(--vs-settings__button-icon__height);
    display: var(--vs-settings__button-icon__display);
    align-items: var(--vs-settings__button-icon__align-items);
    justify-content: var(--vs-settings__button-icon__justify-content);
    color: var(--vs-settings__button-icon__color);
  }

  --vs-settings__heading__font-weight: 400;
  --vs-settings__heading__margin: 0 0 6px 0;
  --vs-settings__heading__font-size: 9px;
  --vs-settings__heading__text-transform: uppercase;
  --vs-settings__heading__opacity: 0.8;

  &__heading {
    font-weight: var(--vs-settings__heading__font-weight);
    margin: var(--vs-settings__heading__margin);
    font-size: var(--vs-settings__heading__font-size);
    text-transform: var(--vs-settings__heading__text-transform);
    opacity: var(--vs-settings__heading__opacity);
  }

  --vs-settings__options__display: flex;
  --vs-settings__options__gap: 4px;

  &__options {
    display: var(--vs-settings__options__display);
    gap: var(--vs-settings__options__gap);
  }

  --vs-settings__options-button__border: none;
  --vs-settings__options-button__background: none;
  --vs-settings__options-button__padding: 0 3px;
  --vs-settings__options-button__font-weight: 600;
  --vs-settings__options-button__color: rgba(0, 0, 0, 0.5);
  --vs-settings__options-button__cursor: pointer;
  --vs-settings__options-button__border: none;
  --vs-settings__options-button__background: none;
  --vs-settings__options-button__padding: 0 3px;
  --vs-settings__options-button__font-weight: 600;
  --vs-settings__options-button__color: rgba(0, 0, 0, 0.5);
  --vs-settings__options-button__cursor: pointer;
  --vs-settings__options-button__border-radius: 4px;
  --vs-settings__options-button__height: 20px;
  --vs-settings__options-button__width: 26px;
  --vs-settings__options-button__background: white;
  --vs-settings__options-button__margin-bottom: 8px;

  --vs-settings__options-button--match-word__text-decoration: underline;

  --vs-settings__options-button--active__color: #fff;
  --vs-settings__options-button--active__background: #3e51b5;
  --vs-settings__options-button--hover__color: #fff;
  --vs-settings__options-button--hover__background: #3e51b5;

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
