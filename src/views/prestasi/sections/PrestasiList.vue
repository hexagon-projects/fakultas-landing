<script setup lang="ts">
import Button from '@/components/Button.vue'
import TextSection from '@/components/TextSection.vue'
import TitleSection from '@/components/TitleSection.vue'
import type { Prestasi } from '@/core/types/Prestasi'
import SectionLayout from '@/layouts/SectionLayout.vue'
import KegiatanCard from '@/views/prodiDetail/components/KegiatanCard.vue'
import { ref, computed, watch } from 'vue'

const baseUrl = import.meta.env.VITE_APP_IMG_URL

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return ''
  return `${baseUrl}/${imagePath}`
}

const props = defineProps<{
  prestasi: Prestasi[]
  isLoading?: boolean
}>()

const itemsPerPage = 3
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(props.prestasi.length / itemsPerPage))

const paginatedPrestasi = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return props.prestasi.slice(start, start + itemsPerPage)
})

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

watch(
  () => props.prestasi,
  () => {
    currentPage.value = 1
  },
)
</script>

<!-- Template -->
<template>
  <SectionLayout>
    <div class="grid gap-5 text-center w-full lg:w-1/2 md:w-3/4 mx-auto">
      <TitleSection text="Prestasi Mahasiswa" />
      <TextSection>
        This grid captures the delicate interplay of light and shadow, creating moments of
        brilliance in each image.
      </TextSection>
      <div class="flex gap-5 justify-center flex-wrap">
        <Button class="btn-primary" padding="px-4 py-2">All</Button>
        <Button class="btn-neutral" padding="px-4 py-2">UKM</Button>
      </div>
    </div>

    <!-- Card Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      <KegiatanCard
        v-for="(item, index) in paginatedPrestasi"
        :key="item.id || index"
        :title="item.name"
        :description="item.description"
        :image="getImageUrl(item.image)"
        :index="index"
        class="cursor-pointer transition-all duration-500"
        :style="{ transitionDelay: `${index * 100}ms` }"
      />
    </div>

    <!-- Pagination Controls -->
    <div v-if="totalPages > 1" class="w-full flex justify-end mt-8">
      <div class="inline-flex items-center gap-2">
        <button
          :disabled="currentPage === 1"
          @click="prevPage"
          class="w-8 h-8 flex items-center justify-center rounded bg-gray-200 disabled:opacity-50"
        >
          ‹
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          class="w-8 h-8 flex items-center justify-center rounded text-sm font-bold"
          :class="
            currentPage === page ? 'bg-colorPrimary text-white' : 'bg-white border border-gray-300'
          "
        >
          {{ page }}
        </button>
        <button
          :disabled="currentPage === totalPages"
          @click="nextPage"
          class="w-8 h-8 flex items-center justify-center rounded bg-gray-200 disabled:opacity-50"
        >
          ›
        </button>
      </div>
    </div>
  </SectionLayout>
</template>

<style scoped>
.stagger-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.stagger-enter-active {
  transition: all 0.4s ease;
}
.stagger-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.stagger-enter-active {
  transition: all 0.4s ease;
  /* biarkan delay ditentukan per-item */
}
</style>
