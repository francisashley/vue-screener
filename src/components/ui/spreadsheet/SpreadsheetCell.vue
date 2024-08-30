<template>
  <div
    class="vsc-w-20 vsc-flex-shrink-0 vsc-h-6 vsc-relative vsc-border-r vsc-border-zinc-700"
    :class="[
      {
        'vsc-font-bold vsc-bg-[#1f1f22] vsc-text-zinc-200 vsc-text-xs': isHeader,
        'vsc-outline vsc-outline-blue-500 vsc-outline-offset-[-1px]': isActive,
      },
    ]"
    :data-point="point[0] + ',' + point[1]"
    data-cell
  >
    <button
      class="vsc-absolute vsc-w-full vsc-h-full vsc-cursor-default vsc-outline-none"
      :class="{ 'vsc-text-start vsc-px-1 vsc-whitespace-nowrap vsc-overflow-hidden vsc-text-zinc-200': !isHeader }"
      @click="emit('click', $event)"
      @mousedown="emit('mousedown', $event)"
    >
      <slot />
    </button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  point: [rowIndex: number, colIndex: number]
  isHeader?: boolean
  isSelectable?: boolean
  isActive?: boolean
}>()

const emit = defineEmits(['click', 'mousedown'])
</script>
