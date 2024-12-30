<template>
  <template v-if="!total">Showing 0 results</template>
  <template v-else> Showing {{ firstIndex }}-{{ lastIndex }} of {{ total }} </template>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  total: number
  currentPage: number
  perPage: number
}>()

const firstIndex = computed(() => props.currentPage * props.perPage - props.perPage + 1)
const lastIndex = computed(() => Math.min(props.currentPage * props.perPage, props.total))
</script>
