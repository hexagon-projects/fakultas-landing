<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import { useSanitize } from '@/composables/useSanitize';

const {sanitizeHtml} = useSanitize()

defineProps({
  number: {
    type: Number,
    required: true
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
    default: ""
  }
});
</script>

<template>
    <div class="p-10 lg:p-12 flex flex-col justify-center items-center text-center rounded-[8px] md:rounded-[16px] lg:rounded-[32px] relative border bg-white hover:-translate-y-2 transition duration-500">
        <div class="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-10 lg:mb-14">
            <img :src="icon" alt="" class="w-full h-full" v-if="icon">
        </div>
        <div class="space-y-2 lg:space-y-4">
          <h3 class="text-lg md:text-xl lg:text-2xl font-semibold">{{ title }}</h3>
          <TextBody><span v-html="sanitizeHtml(description)"></span></TextBody>
        </div>
        <div class="p-3 lg:p-4 absolute top-0 left-4">
            <p class="text-lg md:text-xl lg:text-2xl">{{ number.toString().padStart(2, '0') }}</p>
        </div>
    </div>
</template>
