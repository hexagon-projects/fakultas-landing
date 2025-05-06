<script setup lang="ts">
import ctaBackground from '@/assets/ctaBackground.png'
import ctaOrang from '@/assets/ctaOrang.png'
import InteractiveHoverButton from '../ui/interactive-hover-button/InteractiveHoverButton.vue';
</script>

<template>
  <div class="w-full px-[20px] py-[64px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[80px] space-y-12 md:space-y-16 lg:space-y-20">
    <div
      class="relative max-w-[160vh] h-[300px] sm:h-[350px] md:h-[297px] lg:h-[361px] rounded-3xl bg-cover bg-center mx-auto"
      :style="`background-image: url(${ctaBackground})`">
      <div
        class="grid grid-cols-1 md:grid-cols-2 h-full items-center px-4 sm:px-6 md:px-8 lg:px-12 gap-4 sm:gap-6 md:gap-0">
        <!-- Text + Button Section -->
        <div
          class="order-2 md:order-1 flex flex-col items-center md:items-start gap-3 sm:gap-4 w-full text-center md:text-left">
          <div
            class="text-[#f3f4f4] font-['Sora'] text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] font-bold leading-tight sm:leading-snug md:leading-[1.3] max-w-full md:max-w-[90%]">
            Wujudkan Masa Depan Cemerlangmu Bersama Kami!
          </div>

          <div class="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-0">
            <InteractiveHoverButton :bg-color="'bg-white'" :text-color="'text-colorPrimary'" :bg-hover="'bg-colorPrimary'" :text-hover="'text-white'" :border-hover="'border-white'" :text="'Daftar Sekarang'"></InteractiveHoverButton>
            <InteractiveHoverButton :bg-color="'bg-colorPrimary'" :bg-hover="'bg-white'"
              :border-color="'border-white'" :text="'Hubungi Admin'" :text-color="'text-white'"
              :text-hover="'text-colorPrimary'" :border-hover="'border-white'" />
          </div>
        </div>

        <!-- Image Section - Optimized for mobile -->
        <div class="order-1 md:order-2 w-full h-full relative -mt-3 md:mt-0 lg:mt-0">
          <!-- Mobile version (centered and larger) -->
          <div class="md:hidden absolute inset-0 flex items-center justify-center">
            <div class="h-[200px] w-full flex items-center justify-center overflow-visible">
              <img :src="ctaOrang" alt="Gambar Kanan" class="z-10 object-contain"
                style="height: 100%; max-height: 250px; width: auto" />
            </div>
          </div>

          <!-- Desktop version (original effect) -->
          <div class="hidden md:block absolute bottom-0 right-0 md:h-[120%] lg:h-[120%] w-full overflow-hidden">
            <img :src="ctaOrang" alt="Gambar Kanan" class="absolute z-10 object-contain object-bottom"
              style="height: 110%; bottom: 0; right: 0; max-width: 100%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
