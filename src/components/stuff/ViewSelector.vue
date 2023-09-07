<template>
  <div class="vue-screener__view-selector">
    <a
      href="#"
      @click.prevent="onSelectFormat('table')"
      :class="[
        'vue-screener__view-selector__link',
        activeFormat === 'table' && 'is-active',
      ]"
      v-text="'Table'"
    />
    <a
      href="#"
      @click.prevent="onSelectFormat('raw')"
      :class="[
        'vue-screener__view-selector__link',
        activeFormat === 'raw' && 'is-active',
      ]"
      v-text="'Raw'"
    />
  </div>
</template>

<script lang="ts" setup>
const { activeFormat = "table" } = defineProps<{
  activeFormat: "table" | "raw";
}>();

const emit = defineEmits(["select-format"]);

const onSelectFormat = (format: "raw" | "table") =>
  emit("select-format", format);
</script>

<style lang="scss">
.vue-screener {
  &__view-selector {
    font-size: 12px;
    height: 30px;
    display: flex;
    overflow: hidden;
    align-items: center;
    border-radius: 2px;
    background: #fff;
  }

  &__view-selector__link {
    text-decoration: none;
    font-weight: 500;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: #000;
  }

  &__view-selector__link.is-active {
    background: #3f51b5;
    color: #fff;
  }
}
</style>
