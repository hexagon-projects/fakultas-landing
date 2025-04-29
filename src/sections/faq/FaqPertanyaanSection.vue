<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'

// URL gambar latar belakang dari Unsplash
const backgroundImageUrl = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' // Ganti dengan URL gambar pilihan Anda
</script>

<template>
  <SectionLayout class="mt-0 md:-mt-10 lg:mt-5 overflow-x-hidden">
    <div
      class="w-full max-w-[1476px] mx-auto h-auto rounded-b-[32px] md:rounded-[32px] flex flex-col items-center gap-12 md:gap-20 px-5 sm:px-8 md:px-16 py-16 md:py-28 lg:py-20"
      :style="`background-image: url('${backgroundImageUrl}'); background-size: cover; background-position: center;`"
    >
      <!-- Title & Subtitle -->
      <div class="w-full max-w-[768px] flex flex-col items-center gap-6 md:gap-8 text-center">
        <div
          class="text-white text-sm md:text-base font-normal md:font-semibold font-inter md:font-roboto leading-tight md:leading-normal"
        >
          FAQ
        </div>
        <div class="flex flex-col gap-2 md:gap-6">
          <h2
            class="text-white text-xl sm:text-2xl md:text-[34px] lg:text-[46px] font-bold font-sora md:font-roboto leading-loose md:leading-[67.2px]"
          >
            Pertanyaan Umum
          </h2>
          <p
            class="text-white text-sm sm:text-base md:text-[14px] lg:text-[18px] font-normal font-inter md:font-roboto leading-tight sm:leading-relaxed"
          >
            Halaman ini membantu Anda menemukan jawaban atas pertanyaan yang sering diajukan.
          </p>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex flex-wrap justify-center gap-4 md:gap-6 lg:-mt-10">
        <button
          class="px-4 py-2 md:px-6 md:py-3 bg-[#aa2132] text-white text-xs md:text-sm font-bold rounded-full shadow-lg flex items-center gap-2"
        >
          Daftar Sekarang
          <div class="w-5 h-5 bg-white rounded-sm"></div>
        </button>
        <button
          class="px-4 py-2 md:px-6 md:py-3 border border-[#aa2132] text-[#aa2132] text-xs md:text-sm font-bold rounded-full shadow-lg flex items-center gap-2"
        >
          Hubungi Kami
          <div class="w-5 h-5 bg-[#aa2132] rounded-sm"></div>
        </button>
      </div>
    </div>
  </SectionLayout>
</template>
