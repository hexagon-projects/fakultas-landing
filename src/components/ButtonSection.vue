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
      'py-3 px-6 lg:py-3 lg:px-6 text-[10px] md:text-[12px] lg:text-[16px] font-bold rounded-full cursor-pointer',
      bgColor || 'bg-colorPrimary',
      border || 'border-[3px]',
      borderColor || 'border-outline/50',
      textColor || 'text-netral'
    ]">
    <slot></slot>
  </button>
</template>
