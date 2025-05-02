<template>
  <div :class="cn('flex flex-col w-full h-96 gap-2', props.class)">
    <div
      v-for="image in images"
      :key="image"
      class="relative flex w-full flex-1 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:flex-[3]"
    >
      <img class="relative w-full object-cover" :src="image" :alt="image" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  images: string[]
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>
