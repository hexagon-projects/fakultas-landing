<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue'
import Mitra from '@/components/MitraSection.vue'
import Title from '@/components/Title.vue'
import { berandaStore, kerjasamaStore } from '@/stores'
import { onMounted } from 'vue'
import { getImageUrl } from '@/core/helpers/helper'
import ScrollTransition from '@/components/ScrollTransition.vue'

const currentPage = ref(1)
const itemsPerPage = ref(6)

const totalPages = computed(() => {
  return Math.ceil(berandaStore.mitraData.length / itemsPerPage.value)
})

const paginatedPartners = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return berandaStore.mitraData.slice(start, end)
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

onMounted(() => {
  kerjasamaStore.getInitialData()
})
</script>

<template>
  <!-- Hero -->
  <ScrollTransition>
    <div
      class="flex lg:py-24 lg:gap-20 lg:mt-20 flex-col lg:flex-row items-center lg:px-0 px-[5%] text-center lg:text-left md:pt-20 pt-10"
    >
      <div class="lg:w-1/2 w-full">
        <h5 class="md:text-xl text-base font-semibold">Kolaborasi</h5>
        <Title class="mt-5">Mitra Strategis Kami</Title>
      </div>
      <div class="lg:w-1/2 w-full">
        <p class="mt-5 lg:mt-0">
          Kami menjalin kerjasama dengan berbagai institusi dan industri untuk memberikan pengalaman
          terbaik bagi mahasiswa. Bersama mitra kami, kami menciptakan peluang yang memperkaya
          pendidikan dan penelitian.
        </p>

        <div class="flex gap-5 mt-7 justify-center lg:justify-start flex-wrap">
          <!-- <Button>Daftar Sekarang</Button>
        <Button className="btn-outline-primary">Hubungi Admin</Button> -->
          <InteractiveHoverButton text="Daftar Sekarang" />
          <InteractiveHoverButton
            text="Hubungi Admin"
            bg-color="bg-none"
            border-color="border-colorPrimary"
            text-color="text-colorPrimary"
            bg-hover="bg-colorPrimary"
            text-hover="text-white"
          />
        </div>
      </div>
    </div>
  </ScrollTransition>

  <ScrollTransition>
    <div class="py-24 px-[5%] lg:px-0">
      <Title class="mt-5 text-center lg:w-1/2 w-full mx-auto">
        Program dan Proyek Kerjasama Fakultas yang Sedang Berjalan
      </Title>
      <div
        class="mt-10 grid lg:gap-20 md:gap-10 lg:px-40 md:px-20 px-0 grid-cols-1 md:grid-cols-2 gap-10 lg:flex"
      >
        <div class="text-center grid gap-5" v-for="data in 3">
          <img src="" alt="" class="w-full h-48 rounded-[20px] bg-gray-200" />
          <h5 class="font-bold text-xl">
            Inisiatif Kolaborasi untuk Meningkatkan Kualitas Pendidikan dan Penelitian
          </h5>
          <p class="">
            Fakultas kami aktif menjalin kerjasama dengan berbagai institusi untuk meningkatkan
            pengalaman belajar.
          </p>
          <button class="flex items-center justify-center">
            selengkapnya <i class="pi pi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </ScrollTransition>

  <!-- Mitra Strategis -->
  <ScrollTransition>
    <div class="my-24 px-[5%] lg:px-0">
      <div class="text-center w-full lg:w-1/2 mx-auto">
        <Title>Mitra Strategis Kami</Title>
        <p class="mt-8 text-sm lg:text-base">
          This grid captures the delicate interplay of light and shadow, creating moments of
          brilliance in each image.
        </p>
      </div>

      <div class="w-full mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:px-20">
        <template v-for="data in paginatedPartners" :key="data.id">
          <div
            class="w-full h-64 bg-gray-200 flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition relative"
            :style="{
              backgroundImage: `url(${getImageUrl(data.image)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          >
            <div
              class="bg-gradient-to-t from-black/80 via-transparent absolute inset-0 rounded-[20px]"
            ></div>
            <h6 class="text-white font-semibold z-10">{{ data.name }}</h6>
            <p class="text-white/40 z-10" v-html="data.description"></p>
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
  </ScrollTransition>

  <!-- Mitra -->
  <ScrollTransition>
    <Mitra />
  </ScrollTransition>
</template>
