<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import { useSanitize } from '@/composables/useSanitize';

const { sanitizeHtml } = useSanitize();

defineProps<{
  title?: string;
  description?: string;
  location?: string;
  image?: string;
  date?: {
    dayName: string;
    day: number;
    month: string;
    year: number;
    fullDate: string;
  };
}>();

defineEmits(['click']);
</script>

<template>
  <div class="space-y-4 lg:space-y-6 cursor-pointer group hover:-translate-y-2 transition duration-500" @click="$emit('click')">
    <div class="w-full h-56 md:h-64 lg:h-72 relative">
      <div class="w-full h-full rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden">
        <img
          :src="image || 'https://placehold.co/600x400'"
          :alt="title || 'Gambar acara'"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        >
      </div>
      <div
        v-if="date"
        class="absolute top-4 right-4 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] bg-white py-3 px-6 text-center"
      >
        <p class="text-xs lg:text-sm">{{ date.dayName }}</p>
        <p class="text-2xl lg:text-[32px] font-bold">{{ date.day }}</p>
        <p class="text-xs lg:text-sm">{{ date.month }} {{ date.year }}</p>
      </div>
    </div>

    <div class="space-y-2 lg:space-y-4">
      <p class="text-sm font-semibold">Acara</p>
      <div class="space-y-2">
        <div>
          <h3 class="text-[18px] md:text-[20px] lg:text-[24px] font-bold">{{ title || 'Judul Acara' }}</h3>
          <TextBody v-if="location">{{ location }}</TextBody>
        </div>

        <TextBody v-if="description">
          <span class="line-clamp-3" v-html="sanitizeHtml(description)"></span>
        </TextBody>
      </div>
      <TextBody class="hover:text-Color-FH transition-colors cursor-pointer">Lihat Acara ></TextBody>
    </div>
  </div>
</template>

<style scoped>
.hover\:text-Color-FH:hover {
  color: #aa2132;
}
</style>
