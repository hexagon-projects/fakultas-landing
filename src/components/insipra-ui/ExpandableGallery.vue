<template>
  <div :class="cn('flex flex-col w-full h-96 gap-2', props.class)">
    <h2 v-if="title" class="text-2xl font-bold text-center mb-4">{{ title }}</h2>
    <div
      v-for="(facility, index) in facilities"
      :key="facility.id"
      class="relative flex w-full flex-1 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:flex-[3] group"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10"
      ></div>
      <img
        class="relative w-full h-full object-cover"
        :src="getImageUrl(facility.image1 || '')"
        :alt="facility.title || ''"
      />
      <div
        class="absolute bottom-0 left-0 z-20 p-4 w-full transition-all duration-300 transform translate-y-full group-hover:translate-y-0"
      >
        <h3 class="text-white font-bold text-lg">{{ facility.title || '' }}</h3>
        <TextSection class="text-white" :weight-text="'font-bold'">{{
          facility.title || ''
        }}</TextSection>
      </div>
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
  title?: string
  bgPrimary?: string // Gradient color (e.g. 'rgba(59, 130, 246, 0.8)')
}

const baseUrl = import.meta.env.VITE_APP_IMG_URL

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400'
  return `${baseUrl}/${imagePath}`
}

const props = defineProps<Props>()
</script>
