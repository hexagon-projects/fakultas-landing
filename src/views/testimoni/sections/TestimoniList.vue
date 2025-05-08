<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import type { Testimonial } from '@/core/types/testimoni';
import SectionLayout from '@/layouts/SectionLayout.vue';
import { computed, ref, watchEffect } from 'vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  testimoni: Testimonial[];
  isLoading?: boolean;
}>();

const currentPage = ref(1)
const itemsPerPage = ref(3)
const showModal = ref(false)
const selectedTestimonial = ref<Testimonial | null>(null)

const totalPages = computed(() => {
  return Math.ceil(props?.testimoni.length / itemsPerPage.value)
})

const paginatedTestimonials = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return props?.testimoni.slice(start, end)
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

const openTestimonialModal = (testimonial: Testimonial) => {
  selectedTestimonial.value = testimonial
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

watchEffect(() => {
  if (currentPage.value > totalPages.value && totalPages.value > 0) {
    currentPage.value = totalPages.value
  }
})
</script>

<template>
  <SectionLayout>
    <div class="text-center lg:w-1/2 w-full mx-auto">
      <div class="px-5 py-2 rounded-full mx-auto mb-5 w-fit bg-colorPrimary/20">
        <h6 class="font-semibold text-colorPrimary">Testimonials</h6>
      </div>
      <TitleSection text="Apa Yang Dikatakan Alumni"></TitleSection>
      <TextSection class="text-gray-500 mt-5">
        Customers trust Chainex for secure automation and smart analytics. See how AI enhances their
        blockchain experience
      </TextSection>
    </div>
    <div class="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <template v-for="data in paginatedTestimonials" :key="data.id">
        <div class="p-8 bg-[#00000005] rounded-[32px] flex-col flex">
          <div class="flex items-center gap-5">
            <img :src="getImageUrl(data.image)" alt="" class="rounded-full object-cover w-16 h-16 bg-gray-200" />
            <div class="space-y-2 md:space-y-4">
              <h1 class="text-[10px] md:text-[12px] lg:text-[16px] font-semibold">{{ data.name }}</h1>
              <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-gray-500">{{ data.title }}</h6>
            </div>
          </div>
          <p class="text-[10px] md:text-[12px] lg:text-[16px] mt-5 grow line-clamp-5" v-html="data.description"></p>
          <div class="flex gap-5 mt-5">
            <InteractiveHoverButton
              text="Selengkapnya"
              padding="px-6 py-2"
              @click="openTestimonialModal(data)"
            />
            <InteractiveHoverButton text="Play" padding="px-6 py-2" bg-color="bg-none" text-color="text-colorPrimary"
              border-color="border-colorPrimary" bg-hover="bg-colorPrimary" text-hover="text-white" />
          </div>
        </div>
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

    <!-- Testimonial Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
        <div class="p-8">
          <div class="flex justify-between items-start mb-6">
            <div class="flex items-center gap-5">
              <img
                :src="getImageUrl(selectedTestimonial?.image || '')"
                alt=""
                class="rounded-full object-cover w-16 h-16 bg-gray-200"
              />
              <div class="space-y-2">
                <h1 class="text-lg font-semibold">{{ selectedTestimonial?.name }}</h1>
                <h6 class="text-gray-500">{{ selectedTestimonial?.title }}</h6>
              </div>
            </div>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
              <i class="pi pi-times text-xl"></i>
            </button>
          </div>
          <div class="prose max-w-none" v-html="selectedTestimonial?.description"></div>
          <div class="flex justify-end mt-6">
            <InteractiveHoverButton @click="closeModal" :text="'Tutup'" />
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
