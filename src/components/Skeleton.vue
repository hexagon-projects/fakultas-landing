<template>
  <div
    class="bg-gray-200 rounded animate-pulse"
    :class="[
      size ? size : 'w-full h-4',
      rounded ? rounded : 'rounded'
    ]"
  ></div>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: ''
  },
  rounded: {
    type: String,
    default: ''
  }
});
</script>
