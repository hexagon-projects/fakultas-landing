<script setup lang="ts">
import { useSanitize } from '@/composables/useSanitize';
import TextSection from '@/components/TextSection.vue';

const { sanitizeHtml } = useSanitize()

defineProps({
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
  },
  roundedAlign: {
    type: String,
    default: 'rounded-l-[8px]'
  },
  direction: {
    type: String,
    default: 'right-0'
  }
});
</script>

<template>
  <div
    :class="['bg-colorPrimary/10 md:bg-colorPrimary/10 py-5 px-[33px] rounded-[8px] md:rounded-[16px] lg:rounded-[24px] flex gap-4 md:gap-5 lg:gap-6 relative']">
    <div :class="['space-y-2 w-fit text-left']">
      <h6 class="text-[14px] md:text-[18px] lg:text-[22px] font-bold">{{ title }}</h6>
      <TextSection><span v-html="sanitizeHtml(description)"></span></TextSection>
    </div>

    <div
      :class="['w-[5px] h-8 bg-colorPrimary absolute bottom-1/2 translate-y-1/2', roundedAlign, direction]">
    </div>
  </div>
</template>

<style>
.svg-primary {
  filter: brightness(0) saturate(100%) invert(22%) sepia(65%) saturate(2915%) hue-rotate(338deg) brightness(91%) contrast(88%);
}
</style>
