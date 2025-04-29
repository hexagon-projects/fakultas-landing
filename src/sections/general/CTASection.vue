<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import ctaBackground from '@/assets/ctaBackground.png'
import ctaOrang from '@/assets/ctaOrang.png'
</script>

<template>
  <SectionLayout>
    <div
      class="relative max-w-[160vh] h-[300px] sm:h-[350px] md:h-[297px] lg:h-[365px] rounded-3xl bg-cover bg-center mx-auto"
      :style="`background-image: url(${ctaBackground})`"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 h-full items-center px-4 sm:px-6 md:px-8 lg:px-12 gap-4 sm:gap-6 md:gap-0"
      >
        <!-- Text + Button Section -->
        <div
          class="order-2 md:order-1 flex flex-col items-center md:items-start gap-3 sm:gap-4 w-full text-center md:text-left"
        >
          <div
            class="text-[#f3f4f4] font-['Sora'] text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] font-bold leading-tight sm:leading-snug md:leading-[1.3] max-w-full md:max-w-[90%]"
          >
            Wujudkan Masa Depan Cemerlangmu Bersama Kami!
          </div>

          <div class="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-0">
            <button
              class="flex justify-center items-center px-4 sm:px-5 py-2 sm:py-3 rounded-full border-2 border-white/50 bg-[#f3f4f4] text-[#aa2132] text-xs sm:text-sm font-bold hover:bg-[#e0e0e0] transition-colors whitespace-nowrap"
            >
              Daftar Sekarang
            </button>
            <button
              class="flex justify-center items-center px-4 sm:px-5 py-2 sm:py-3 rounded-full border-2 border-white/50 text-[#f3f4f4] text-xs sm:text-sm font-bold hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Hubungi Kami
            </button>
          </div>
        </div>

        <!-- Image Section -->
        <div
          class="order-1 md:order-2 w-full h-[180px] sm:h-[220px] md:h-full flex items-center justify-center md:justify-end -mt-13 md: -mt-15 lg:-mt-19"
        >
          <img
            :src="ctaOrang"
            alt="Gambar Kanan"
            class="h-full object-contain object-center md:object-right scale-118"
            style="max-height: 100%"
          />
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
