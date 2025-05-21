<script setup lang="ts">
import TextSection from '@/components/TextSection.vue'
import TitleSection from '@/components/TitleSection.vue'
import TextBody from '@/components/TextBody.vue'
import type { Faculty } from '@/core/types/fakultas'
import type { Unggulan } from '@/core/types/unggulan'
import Gedung from '@/assets/gedung.jpg'
import { computed } from 'vue'
import SectionLayout from '@/layouts/SectionLayout.vue'

const baseUrl = import.meta.env.VITE_APP_IMG_URL

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return Gedung
  return `${baseUrl}/${imagePath}`
}

const props = defineProps<{
  unggulan: Unggulan[]
  fakultas: Faculty | null
}>()

const titleHTML = computed(() => {
  if (!props.fakultas?.name) return 'Kenapa Harus Memilih Unpas'
  return `Kenapa Harus Memilih <span class="text-colorPrimary font-bold">${props.fakultas.name || ''}</span> Unpas`
})
</script>

<template>
  <SectionLayout>
    <!-- Judul dan Deskripsi -->
    <div class="w-full flex justify-center items-center">
      <div
        class="w-full flex flex-col justify-center items-center text-center lg:max-w-[75%] gap-4 md:gap-5 lg:gap-6"
      >
        <div class="w-full lg:w-[86%]">
          <TitleSection class="md:text-center" :text="titleHTML" :html="true" :word-based="true" />
        </div>
        <div class="w-full flex flex-col gap-4 md:gap-5 lg:gap-6">
          <TextSection>
            Temukan berbagai program studi yang dirancang untuk mempersiapkan Anda menghadapi
            tantangan dunia kerja. Bergabunglah dengan kami dan kembangkan potensi Anda di bidang
            yang Anda cintai.
          </TextSection>
        </div>
      </div>
    </div>

    <!-- ✅ MOBILE ONLY Layout -->
    <div class="block sm:hidden w-full px-4">
      <div class="flex flex-col w-full gap-6">
        <div
          v-for="(item, index) in unggulan.slice(0,4)"
          :key="item.id"
          class="flex flex-col items-center gap-6 pb-6 border-b border-black"
        >
          <!-- Icon -->
          <div class="w-12 h-12 lg:w-[80px] lg:h-[80px] p-3 lg:p-6 bg-colorPrimary rounded-[4px] md:rounded-[8px] lg:rounded-[12px]">
            <img
              :src="getImageUrl(item.image)"
              :alt="item.title"
              class="w-full h-full object-cover svg-primary"
            />
          </div>

          <!-- Title & Description -->
          <div class="self-stretch flex flex-col justify-start items-center gap-4 text-center">
            <!-- Title -->
            <h3 class="text-[16px] md:text-[18px] lg:text-[20px] font-medium w-full">{{ item.title }}</h3>

            <!-- Description -->
            <TextBody><span  v-html="item.description"></span></TextBody>
          </div>
        </div>
      </div>
    </div>

    <!-- ✅ Tablet & Desktop Layout -->
    <div class="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-full pt-15 px-15">
      <div
        v-for="(item, index) in unggulan.slice(0,4)"
        :key="item.id"
        class="px-10"
        :class="[
          // Tablet: border kanan di kiri, tidak ada border bawah
          (index % 2 === 0 ? 'sm:border-r-2' : '') + ' sm:border-black/20',

          // Desktop
          index === 0
            ? 'lg:border-r-2/20 lg:border-l-2 lg:border-black/20'
            : 'lg:border-r-2 lg:border-black/20',
        ]"
      >
        <div class="flex flex-col items-center h-full gap-[88px]">
          <!-- Number + Title -->
          <div class="w-full flex flex-col h-40 justify-start items-start pt-10">
            <div class="mb-4">{{ index + 1 }}</div>
            <h3 class="text-[16px] md:text-[18px] lg:text-[20px] font-medium w-full">{{ item.title }}</h3>

            <!-- Description -->
          </div>

          <!-- Icon -->
          <div class="w-12 h-12 lg:w-[80px] lg:h-[80px] p-3 lg:p-6 bg-colorPrimary rounded-[4px] md:rounded-[8px] lg:rounded-[12px]">
            <img
              :src="getImageUrl(item.image)"
              :alt="item.title"
              class="w-full h-full object-cover svg-primary"
            />
          </div>

          <!-- Description -->
          <div class="flex flex-col justify-start items-start">
             <TextBody><span  v-html="item.description"></span></TextBody>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<style scoped>
.svg-primary {
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
}
</style>
