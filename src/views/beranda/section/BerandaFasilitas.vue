<script setup lang="ts">
import ExpandableGallery from '@/components/insipra-ui/ExpandableGallery.vue'
import TextSection from '@/components/TextSection.vue'
import type { Fasilitas } from '@/core/types/fasilitas'
import { ref, onMounted, onUnmounted } from 'vue'
import TitleSection from '@/components/TitleSection.vue'

const baseUrl = import.meta.env.VITE_APP_IMG_URL
const isMobile = ref(false)

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400'
  return `${baseUrl}/${imagePath}`
}

defineProps<{
  fasilitas: Fasilitas[]
}>()
</script>

<template>
  <div class="text-center lg:w-1/2 w-full mx-auto">
    <TitleSection text="Agenda" class="text-center" />
    <TextSection class="text-gray-500 mt-5">
      Customers trust Chainex for secure automation and smart analytics. See how AI enhances their
      blockchain experience.
    </TextSection>
  </div>

  <!-- Mobile View -->
  <div class="text-center w-full mx-auto">
    <ExpandableGallery
      v-if="fasilitas.length > 0 && isMobile"
      :facilities="fasilitas"
      class="mt-5 md:hidden px-3"
    />
  </div>

  <!-- Desktop View -->

  <div
    v-if="fasilitas.length > 0 && !isMobile"
    class="w-full px-4 py-6 flex flex-wrap justify-center items-end gap-4"
  >
    <!-- Gambar 1 -->
    <div class="relative group overflow-hidden rounded-3xl">
      <img
        class="flex-1 max-w-[222px] h-96 rounded-3xl object-cover group-hover:scale-105 transition-transform duration-500"
        :src="getImageUrl(fasilitas[0]?.image1 || '')"
        :alt="fasilitas[0]?.title || ''"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-0 rounded-3xl rounded-inherit"
      ></div>
      <div
        class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"
      >
        <TextSection class="text-white font-bold">{{ fasilitas[0]?.title || '' }}</TextSection>
      </div>
    </div>

    <!-- Gambar 2 -->
    <div class="relative group overflow-hidden rounded-3xl">
      <img
        class="flex-1 max-w-[222px] h-80 rounded-3xl object-cover group-hover:scale-105 transition-transform duration-500"
        :src="getImageUrl(fasilitas[1]?.image1 || '')"
        :alt="fasilitas[1]?.title || ''"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-0 rounded-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"
      >
        <TextSection class="text-white font-bold">{{ fasilitas[1]?.title || '' }}</TextSection>
      </div>
    </div>

    <!-- Gambar 3 -->
    <div class="relative group w-56 h-64 flex-shrink-0 overflow-hidden rounded-3xl">
      <img
        class="w-56 h-64 rounded-3xl object-cover group-hover:scale-105 transition-transform duration-500"
        :src="getImageUrl(fasilitas[2]?.image1 || '')"
        :alt="fasilitas[2]?.title || ''"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-0 rounded-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"
      >
        <TextSection class="text-white font-bold">{{ fasilitas[2]?.title || '' }}</TextSection>
      </div>
    </div>

    <!-- Gambar 4 -->
    <div class="relative group overflow-hidden rounded-3xl">
      <img
        class="flex-1 max-w-[222px] h-80 rounded-3xl object-cover group-hover:scale-105 transition-transform duration-500"
        :src="getImageUrl(fasilitas[3]?.image1 || '')"
        :alt="fasilitas[3]?.title || ''"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-0 rounded-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"
      >
        <TextSection class="text-white font-bold">{{ fasilitas[3]?.title || '' }}</TextSection>
      </div>
    </div>

    <!-- Gambar 5 -->
    <div class="relative group overflow-hidden rounded-3xl">
      <img
        class="flex-1 max-w-[222px] h-96 rounded-3xl object-cover group-hover:scale-105 transition-transform duration-500"
        :src="getImageUrl(fasilitas[4]?.image1 || '')"
        :alt="fasilitas[4]?.title || ''"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-0 rounded-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"
      >
        <TextSection class="text-white font-bold">{{ fasilitas[4]?.title || '' }}</TextSection>
      </div>
    </div>
  </div>
</template>
