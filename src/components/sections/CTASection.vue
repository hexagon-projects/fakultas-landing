<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import ctaBackground from '@/assets/ctaBackground.png'
import ctaOrang from '@/assets/ctaOrang.png'
import InteractiveHoverButton from '../ui/interactive-hover-button/InteractiveHoverButton.vue';
</script>

<template>
  <SectionLayout>
    <div
      class="relative max-w-[160vh] h-[300px] sm:h-[350px] md:h-[297px] lg:h-[361px] rounded-3xl bg-cover bg-center mx-auto"
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
            <InteractiveHoverButton :bg-color="'bg-white'" :text-color="'text-fakultas'" :text="'Daftar Sekarang'"></InteractiveHoverButton>
            <InteractiveHoverButton :bg-color="'bg-transparent'" :bg-hover="'bg-white'" :border-color="'border-white'" :text="'Hubungi Admin'" :text-color="'text-white'" :text-hover="'group-hover:text-fakultas'"/>
          </div>
        </div>

        <!-- Image Section -->
        <div class="order-1 md:order-2 w-full h-full relative">
          <!-- Container untuk masking bagian bawah -->
          <div
            class="absolute bottom-0 right-0 h-[85%] w-full md:h-[90%] lg:h-[95%] overflow-hidden"
          >
            <!-- Gambar dengan z-10 dan keluar di atas -->
            <img
              :src="ctaOrang"
              alt="Gambar Kanan"
              class="absolute z-10 object-contain object-bottom"
              style="height: 110%; bottom: 0; right: 0; max-width: 100%"
            />
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
