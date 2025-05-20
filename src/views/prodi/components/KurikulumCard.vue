<script setup lang="ts">
import { useSanitize } from '@/composables/useSanitize'

const baseUrl = import.meta.env.VITE_APP_IMG_URL

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return ''
  return `${baseUrl}/${imagePath}`
}

const { sanitizeHtml } = useSanitize()

defineProps({
  number: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <!-- Versi Mobile -->
  <div class="md:hidden relative bg-white rounded-2xl outline outline-1 outline-zinc-300 mb-6 mx-4">
    <div class="text-left justify-center text-neutral-700 text-2xl mx-[21px] mt-[14px]">
      {{ number < 10 ? `0${number}` : number }}
    </div>

    <div class="pb-10">
      <div class="flex flex-col gap-4 px-10">
        <div class="h-10 rounded-2xl">
          <img
            v-if="image"
            :src="getImageUrl(image)"
            alt=""
            class="w-full h-full object-contain rounded-2xl"
          />
        </div>
        <div class="self-stretch flex flex-col gap-4">
          <div
            class="self-stretch text-center text-neutral-700 text-lg font-medium leading-relaxed"
          >
            {{ title }}
          </div>
          <div class="self-stretch text-center text-neutral-400 text-xs leading-none">
            <span v-html="sanitizeHtml(description)"></span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Versi Desktop -->
  <div
    :class="[
      'hidden md:block',

      'md:px-6 lg:px-8',

      'border-[#4C4C4C]/10',

      number === 1 ? 'md:border-l md:border-r' : 'md:border-r',

      number === 1 ? 'lg:border-l lg:border-r' : 'lg:border-r',
    ]"
  >
    <div
      data-button="False"
      data-icon="True"
      data-type="Icon Top Left"
      class="py-10 rounded-3xl flex flex-col gap-8"
    >
      <div class="flex items-center gap-2.5">
        <div class="w-11 h-11 relative overflow-hidden">
          <img v-if="image" :src="getImageUrl(image)" alt="" class="w-full h-full svg-primary" />
        </div>
      </div>
      <div class="flex flex-col gap-8">
        <div class="text-netral-text text-xl font-medium leading-7 md:h-15 lg:h-15 line-clamp-2">
          {{ title }}
        </div>
        <div class="text-netral-text text-base leading-normal line-clamp-6">
          <span v-html="sanitizeHtml(description)"></span>
        </div>
      </div>
    </div>
  </div>
</template>
