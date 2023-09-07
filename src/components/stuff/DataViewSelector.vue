<template>
  <div class="ds-render-format">
    <a
      href="#"
      @click.prevent="onSelectFormat('table')"
      :class="[
        'ds-render-format__link',
        activeFormat === 'table' && 'is-active',
      ]"
      v-text="'Table'"
    />
    <a
      href="#"
      @click.prevent="onSelectFormat('raw')"
      :class="['ds-render-format__link', activeFormat === 'raw' && 'is-active']"
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

<style>
.ds-render-format {
  font-size: 12px;
  height: 30px;
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 2px;
  background: #fff;
}

.ds-render-format__link {
  text-decoration: none;
  font-weight: 500;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: #000;
}

.ds-render-format__link.is-active {
  background: #3f51b5;
  color: #fff;
}
</style>
