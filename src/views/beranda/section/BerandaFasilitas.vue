<script setup lang="ts">
import ExpandableGallery from '@/components/insipra-ui/ExpandableGallery.vue'
import TextSection from '@/components/TextSection.vue'
import type { Fasilitas } from '@/core/types/fasilitas'
import { ref, onMounted, onUnmounted } from 'vue'
import TitleSection from '@/components/TitleSection.vue'
import ButtonSection from '@/components/ButtonSection.vue'
import SectionLayout from '@/layouts/SectionLayout.vue'

const baseUrl = import.meta.env.VITE_APP_IMG_URL
const isMobile = ref(false)
const isTablet = ref(false)
const isDesktop = ref(false)

const checkScreenSize = () => {
  const width = window.innerWidth
  isMobile.value = width < 768
  isTablet.value = width >= 768 && width < 1024
  isDesktop.value = width >= 1024
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
  <SectionLayout>
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

    <!-- Tablet View: besar | kecil | besar -->
    <div
      v-if="fasilitas.length >= 3 && isTablet"
      class="w-full px-4 py-6 flex justify-center items-end gap-4"
    >
      <div
        v-for="(item, index) in [0, 1, 2]"
        :key="index"
        class="relative group overflow-hidden rounded-3xl"
      >
        <img
          :class="[
            'rounded-3xl object-cover group-hover:scale-105 transition-transform duration-500',
            index === 1 ? 'w-[180px] h-56' : 'w-[222px] h-72',
          ]"
          :src="getImageUrl(fasilitas[index]?.image1 || '')"
          :alt="fasilitas[index]?.title || ''"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-0 rounded-3xl"
        ></div>
        <div
          class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"
        >
          <TextSection class="text-white font-bold">{{
            fasilitas[index]?.title || ''
          }}</TextSection>
        </div>
      </div>
    </div>

    <!-- Desktop View -->

    <div
      v-if="fasilitas.length > 0 && isDesktop"
      class="w-full px-4 py-6 flex justify-center items-end gap-4"
    >
      <div
        v-for="(item, index) in fasilitas"
        :key="index"
        class="relative group overflow-hidden rounded-3xl"
      >
        <img
          :class="[
            'rounded-3xl object-cover group-hover:scale-105 transition-transform duration-500',
            {
              0: 'h-96 w-[200px]', // Custom untuk index 1
              1: 'h-80 w-[222px]', // Custom untuk index 2
              2: 'h-64 w-56', // Custom untuk index 3
              3: 'h-80 w-[222px]', // Custom untuk index 4
              4: 'h-96 w-[200px]', // Custom untuk index 5
            }[index] || 'h-80 w-[222px]', // Fallback default jika index di luar 1-5
          ]"
          :src="getImageUrl(item?.image1 || '')"
          :alt="item?.title || ''"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-0 rounded-"
        ></div>
        <div
          class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"
        >
          <TextSection class="text-white font-bold">{{ item?.title || '' }}</TextSection>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <router-link to="/fasilitas">
        <ButtonSection>Selengkapnya</ButtonSection>
      </router-link>
    </div>
  </SectionLayout>
</template>
