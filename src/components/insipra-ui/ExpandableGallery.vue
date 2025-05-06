<template>
  <div :class="cn('flex flex-col w-full h-96 gap-2', props.class)">
    <div
      v-for="facility in facilities"
      :key="facility.id"
      class="relative flex w-full flex-1 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:flex-[3]"
    >
      <img
        class="relative w-full object-cover"
        :src="getImageUrl(facility.image1)"
        :alt="facility.title"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import type { Fasilitas } from '@/core/types/fasilitas'

interface Props {
  facilities: Fasilitas[]
  class?: HTMLAttributes['class']
}

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<Props>()
</script>
