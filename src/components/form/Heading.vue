<template>
  <h3 class="vs-form-heading"><slot /></h3>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.vs-form-heading {
  font-weight: var(--vs-form-heading__font-weight);
  margin: var(--vs-form-heading__margin);
  font-size: var(--vs-form-heading__font-size);
  text-transform: var(--vs-form-heading__text-transform);
  opacity: var(--vs-form-heading__opacity);
}
</style>
