<script lang="ts" setup>
// Cara yang benar untuk TypeScript interface
interface Props {
  bgColor?: string;
  border?: string
  borderColor?: string;
  textColor?: string;
}

defineProps<Props>();
</script>

<template>
  <button
    :class="[
      'p-3 lg:p-4 text-xs lg:text-sm font-bold rounded-full cursor-pointer',
      bgColor || 'bg-colorPrimary',
      border || 'border-[3px]',
      borderColor || 'border-outline/50',
      textColor || 'text-netral'
    ]">
    <slot></slot>
  </button>
</template>
