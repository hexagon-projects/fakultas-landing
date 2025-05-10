<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';

defineProps({
  number: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="flex flex-col justify-center items-center text-center gap-4 lg:gap-6 p-4">
    <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
      {{ number }}
    </div>
    <h5 class="text-[24px] md:text-[28px] lg:text-[32px] font-semibold">
      {{ title }}
    </h5>
    <TextBody class="max-w-md">
      {{ content }}
    </TextBody>
  </div>
</template>
