<script lang="ts" setup>

interface Props {
  alignText?: string;
  weightText?: string;
}

defineProps<Props>();
</script>

<template>
  <p
    :class="[
      'text-[12px] md:text-[14px] lg:text-[18px]',
      alignText,
      weightText || 'font-medium'
    ]"
  >
    <slot></slot>
  </p>
</template>
