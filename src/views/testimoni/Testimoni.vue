<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from 'vue'
import InteractiveHoverButton from '@/components/insipra-ui/InteractiveHoverButton.vue'
import TestimoniCarousel from '@/components/TestimoniCarousel.vue'
import Title from '@/components/Title.vue'
import { berandaStore } from '@/stores'

const currentPage = ref(1)
const itemsPerPage = ref(3)

const totalPages = computed(() => {
  return Math.ceil(berandaStore.testimoniData.length / itemsPerPage.value)
})

const paginatedTestimonials = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return berandaStore.testimoniData.slice(start, end)
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

onMounted(async () => {
  await berandaStore.getDataTestimoni();
});
</script>
<template>
  <!-- hero section -->
  <div
    class="lg:mt-48 mt-10 flex lg:gap-20 gap-5 lg:px-0 px-[5%] items-center flex-col lg:flex-row"
  >
    <div class="lg:w-1/2 w-full">
      <Title>Testimonial Alumni <span class="text-colorPrimary">Fakultas Hukum</span> Unpas</Title>
    </div>
    <div class="lg:w-1/2 w-full">
      <p class="text-gray-500">
        Testimonial dari mahasiswa dan alumni adalah cerminan nyata dari kualitas pendidikan yang
        kami tawarkan. Melalui pengalaman mereka, Anda dapat melihat bagaimana fakultas kami
        membentuk masa depan yang sukses.
      </p>
    </div>
  </div>

  <!-- testimonial Carousel -->
  <div class="lg:mt-48 mt-32 px-[5%] lg:px-0">
    <TestimoniCarousel />
  </div>

  <!-- Testimonial Mahasiswa -->
  <div class="lg:mt-48 mt-32 px-[5%] lg:px-0">
    <div class="text-center lg:w-1/2 w-full mx-auto">
      <div class="px-5 py-2 rounded-full mx-auto mb-5 w-fit bg-colorPrimary/20">
        <h6 class="font-semibold text-colorPrimary">Testimonials</h6>
      </div>
      <Title>Apa Yang Dikatakan Alumni</Title>
      <p class="text-gray-500 mt-5">
        Customers trust Chainex for secure automation and smart analytics. See how AI enhances their
        blockchain experience
      </p>
    </div>
    <div class="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <template v-for="data in paginatedTestimonials" :key="data.id">
        <div class="p-8 bg-[#00000005] rounded-[32px] flex-col flex">
          <div class="flex items-center gap-5">
            <img src="" alt="" class="rounded-full w-16 h-16 bg-gray-200" />
            <div>
              <h1 class="text-xl font-semibold">{{ data.name }}</h1>
              <h6 class="text-gray-500">{{ data.title }}</h6>
            </div>
          </div>
          <p class="mt-5 grow" v-html="data.description"></p>
          <div class="flex gap-5 mt-5">
            <InteractiveHoverButton
              text="Selengkapnya"
              padding="px-4 py-2"
              logo="pi pi-chevron-right text-white"
            />
            <InteractiveHoverButton
              text="Play"
              padding="px-4 py-2"
              background="bg-none"
              color="text-colorPrimary"
              logo="pi pi-play text-colorPrimary"
            />
          </div>
        </div>
      </template>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center items-center mt-10 gap-2">
      <!-- Previous button -->
      <button
        class="w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 text-gray-500 hover:bg-gray-300"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        <i class="pi pi-chevron-left"></i>
      </button>

      <!-- Page buttons -->
      <button
        v-for="page in displayedPages"
        :key="page"
        @click="goToPage(page)"
        :class="[
          'w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium',
          currentPage === page
            ? 'bg-colorPrimary text-white border border-colorPrimary'
            : 'text-gray-700 hover:bg-gray-100',
        ]"
      >
        {{ page === 'ellipsis' ? '...' : page }}
      </button>

      <!-- Next button -->
      <button
        class="w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 text-gray-500 hover:bg-gray-300"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        <i class="pi pi-chevron-right"></i>
      </button>
    </div>
  </div>
</template>
