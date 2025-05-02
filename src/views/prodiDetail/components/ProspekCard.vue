<script setup lang="ts">
import { useSanitize } from '@/composables/useSanitize';


const {sanitizeHtml} = useSanitize()

defineProps({
  alignText: {
    type: String,
    default: 'text-right'
  },
  flexDirection: {
    type: String,
    default: 'flex-row'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div :class="['bg-white md:bg-transparent p-2 rounded-[6px] md:rounded-[12px] lg:rounded-[24px] flex gap-4 md:gap-5 lg:gap-6 justify-end md:justify-center items-center', flexDirection]">
    <div :class="['space-y-2', alignText]">
      <p class="text-sm lg:text-base font-medium">{{ title }}</p>
      <p class="text-xs lg:text-sm"><span v-html="sanitizeHtml(description)"></span></p>
    </div>

    <div class="w-6 h-6 lg:w-12 lg:h-12 bg-colorPrimary rounded-[4px] md:rounded-[8px] lg:rounded-[16px]">
      <img :src="icon" alt="" class="w-full h-full object-cover" v-if="icon">
    </div>
  </div>
</template>
