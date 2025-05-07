<script lang="ts" setup>
withDefaults(defineProps<{
  alignText?: string
  weightText?: string
}>(), {
  weightText: 'font-normal'
});
</script>

<template>
  <p :class="['text-[10px] md:text-[12px] lg:text-[16px] font-normal', alignText, weightText]">
    <slot></slot>
  </p>
</template>
