<template>
  <div class="vs-checkable-group">
    <Checkable
      v-for="(option, i) in options"
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
</template>

<script lang="ts" setup>
import Checkable from '../form/Checkable.vue'
import MatchCaseIcon from '../icons/MaterialDesignMatchCase.vue'
import MatchWordIcon from '../icons/MaterialDesignMatchWord.vue'
import RegularExpressionIcon from '../icons/MaterialDesignRegularExpression.vue'

defineProps<{
  options: { id: string; title: string; isActive?: boolean }[]
}>()

const emit = defineEmits(['toggle'])

const toggleOption = (id: string) => {
  emit('toggle', id)
}
</script>

<style lang="scss">
.vs-checkable-group {
  display: var(--vs-checkable-group__display);
  gap: var(--vs-checkable-group__gap);
}
</style>
