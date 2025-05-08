<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Partner } from '@/core/types/partner';
import SectionLayout from '@/layouts/SectionLayout.vue';
import { computed, ref, watchEffect } from 'vue';
import MitraCard from '../components/MitraCard.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  partner: Partner[];
  isLoading?: boolean;
}>();

const currentPage = ref(1)
const itemsPerPage = ref(6)

const totalPages = computed(() => {
  return Math.ceil(props?.partner.length / itemsPerPage.value)
})

const paginatedPartners = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return props?.partner.slice(start, end)
})

const displayedPages = computed(() => {
  const pages = []

  pages.push(1)

  if (currentPage.value > 3) {
    pages.push('ellipsis')
  }

  const startPage = Math.max(2, currentPage.value - 1)
  const endPage = Math.min(totalPages.value - 1, currentPage.value + 1)

  for (let i = startPage; i <= endPage; i++) {
    if (i > 1 && i < totalPages.value) {
      pages.push(i)
    }
  }

  if (currentPage.value < totalPages.value - 2) {
    pages.push('ellipsis')
  }

  if (totalPages.value > 1) {
    pages.push(totalPages.value)
  }

  return pages
})

const goToPage = (page: any) => {
  if (page !== 'ellipsis') {
    currentPage.value = page
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

watchEffect(() => {
  if (currentPage.value > totalPages.value && totalPages.value > 0) {
    currentPage.value = totalPages.value
  }
})
</script>

<template>
  <SectionLayout>
    <div class="my-24 px-[5%] lg:px-0">
    <div class="text-center w-full lg:w-1/2 mx-auto">
      <TitleSection text="Mitra Strategis Kami"></TitleSection>
      <TextSection></TextSection>
      <p class="mt-8 text-sm lg:text-base">
        This grid captures the delicate interplay of light and shadow, creating moments of
        brilliance in each image.
      </p>
    </div>

    <div class="w-full mt-10 md:mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
      <template v-for="data in paginatedPartners" :key="data.id">
        <MitraCard :title="data.name" :description="data.description" :image="getImageUrl(data.image)" />
      </template>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center items-center mt-10 gap-2">
      <!-- Previous button -->
      <button class="w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 text-gray-500 hover:bg-gray-300"
        :disabled="currentPage === 1" @click="prevPage">
        <i class="pi pi-chevron-left"></i>
      </button>

      <!-- Page buttons -->
      <button v-for="page in displayedPages" :key="page" @click="goToPage(page)" :class="[
        'w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium',
        currentPage === page
          ? 'bg-colorPrimary text-white border border-colorPrimary'
          : 'text-gray-700 hover:bg-gray-100',
      ]">
        {{ page === 'ellipsis' ? '...' : page }}
      </button>

      <!-- Next button -->
      <button class="w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 text-gray-500 hover:bg-gray-300"
        :disabled="currentPage === totalPages" @click="nextPage">
        <i class="pi pi-chevron-right"></i>
      </button>
    </div>
  </div>
  </SectionLayout>
</template>
