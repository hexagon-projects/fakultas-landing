<script lang="ts" setup>
defineProps<{
  alignText?: string
  weightText?: {
    type: string,
    default: 'font-normal'
  }
}>();
</script>

<template>
  <p :class="['text-[10px] md:text-[12px] lg:text-[16px] font-normal', alignText, weightText]">
    <slot></slot>
  </p>
</template>
