<template>
  <pre class="vs-json-view">{{ JSON.stringify(data, null, 2) }}</pre>
</template>

<script lang="ts" setup>
const { data = [] } = defineProps<{ data: unknown }>()
</script>

<style>
.vs-json-view {
  font-size: 12px;
  background: #f7f7f7;
  margin: 0;
  padding: 10px;
  border: thin solid;
}
</style>
