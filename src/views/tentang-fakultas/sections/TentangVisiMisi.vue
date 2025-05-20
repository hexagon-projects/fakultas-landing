<script lang="ts" setup>
import TitleSection from '@/components/TitleSection.vue'
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue'
import Visi from '@/assets/visi.png'
import type { Faculty } from '@/core/types/fakultas'
import SectionLayout from '@/layouts/SectionLayout.vue'
import TextSection from '@/components/TextSection.vue'
import { ref, watch } from 'vue'

const baseUrl = import.meta.env.VITE_APP_IMG_URL

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400'
  return `${baseUrl}/${imagePath}`
}

const props = defineProps<{
  fakultas: Faculty | null
  isLoading?: boolean
}>()

// Debug data
watch(
  () => props.fakultas,
  (newVal) => {
    console.log('Fakultas data:', newVal)
    if (newVal?.description4) {
      console.log('Description content:', newVal.description4)
    }
  },
  { immediate: true },
)

// Fungsi untuk memastikan list di-render dengan benar
const formatDescription = (html: string | undefined) => {
  if (!html) return ''

  return html
    .replace(/<ul>/g, '<ul style="list-style-type: disc;">')
    .replace(/<ol>/g, '<ol style="list-style-type: decimal;">')
}
</script>

<template>
  <!-- Loading State -->
  <SectionLayout v-if="isLoading">
    <div class="animate-pulse flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-16">
      <div class="lg:w-1/2 w-full h-64 bg-gray-200 rounded-[32px]"></div>
      <div class="lg:w-1/2 w-full space-y-4">
        <div class="h-10 bg-gray-200 rounded w-3/4"></div>
        <div class="h-4 bg-gray-200 rounded w-full"></div>
        <div class="h-4 bg-gray-200 rounded w-5/6"></div>
        <div class="h-4 bg-gray-200 rounded w-4/6"></div>
        <div class="flex gap-5 pt-6">
          <div class="h-10 bg-gray-200 rounded w-32"></div>
          <div class="h-10 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    </div>
  </SectionLayout>

  <!-- Data State -->
  <SectionLayout
    v-else-if="fakultas?.title4 && fakultas?.description4"
    class="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-12 lg:gap-16"
  >
    <!-- Gambar Visi Misi -->
    <div class="lg:w-1/2 w-full">
      <div class="w-full h-full">
        <img
          :src="getImageUrl(fakultas.image4 || Visi)"
          :alt="fakultas?.title4"
          class="w-full h-full object-cover rounded-[16px] md:rounded-[24px] lg:rounded-[32px] shadow-lg"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Konten Visi Misi -->
    <div class="lg:w-1/2 w-full">
      <div>
        <TitleSection class="mt-7" :text="fakultas?.title4"></TitleSection>

        <TextSection class="mt-5">
          <div v-html="formatDescription(fakultas?.description4)"></div>
        </TextSection>

        <div class="flex flex-wrap gap-5 lg:mt-10 mt-5">
          <a href="https://registrasi.unpas.ac.id/register" target="_blank">
            <InteractiveHoverButton :text="'Daftar Sekarang'" />
          </a>
          <InteractiveHoverButton
            @click="$router.push('/tentang-fakultas')"
            text="Selengkapnya"
            bg-color="bg-transparent"
            textColor="text-colorPrimary"
            borderColor="border-colorPrimary"
            bgHover="bg-colorPrimary"
            textHover="text-white"
          />
        </div>
      </div>
    </div>
  </SectionLayout>

  <!-- Empty State -->
  <SectionLayout v-else>
    <div class="text-center py-12">
      <h3 class="text-xl font-semibold text-gray-600">Data visi misi tidak tersedia</h3>
    </div>
  </SectionLayout>
</template>

<style scoped>
/* Style tambahan untuk konten HTML */
:deep() ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

:deep() ol {
  list-style-type: decimal;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

:deep() li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

:deep() h3,
:deep() h4 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: var(--color-primary);
}
</style>
