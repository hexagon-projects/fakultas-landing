<script setup lang="ts">
// import Bg from '@/assets/bg-cta.png';
import People from '@/assets/CTA.png'
import InteractiveHoverButton from '../ui/interactive-hover-button/InteractiveHoverButton.vue';
</script>

<template>
  <div class="w-full h-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px]">
    <div class="w-full h-fit relative flex flex-col">
      <div class="absolute z-10 bottom-40 md:bottom-0 w-full flex flex-col md:justify-end md:items-end">
        <div class="w-full md:w-fit flex justify-center items-center md:hidden">
          <div class="w-[85%] md:w-1/2 "><img :src=People alt=""></div>
        </div>
        <div class="w-[85%] md:w-fit hidden md:block"><img :src=People alt=""></div>
      </div>

      <div
        class="relative z-2 h-[40vh] md:h-[22vh] lg:h-[42vh] xl:h-[38vh] w-full flex flex-col md:flex-row md:justify-between md:items-center bg-fakultas space-y-3 rounded-[8px] md:rounded-[16px] lg:rounded-[32px]">
        <div class="w-full h-1/2 md:hidden">

        </div>
        <div
          class="w-full md:w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-4 lg:gap-6 h-fit px-4 py-6 md:px-12 lg:px-20 md:py-16">
          <h3 class="text-[18px] md:text-[28px] lg:text-[38px] text-white font-bold text-center md:text-left">Wujudkan
            Masa Depan Cemerlangmu Bersama Kami!</h3>
          <div class="space-x-4 lg:space-x-6">
            <!-- <ButtonSection :bg-color="'bg-white'" :border-color="'border-white'" :text-color="'text-fakultas'">Daftar
              Sekarang</ButtonSection>
            <ButtonSection :bg-color="'bg-transparent'" :border-color="'border-white'" :text-color="'text-white'">
              Hubungi Admin</ButtonSection> -->
            <InteractiveHoverButton :text="'Daftar Sekarang'"></InteractiveHoverButton>
          </div>
        </div>
        <div class="md:w-1/2"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
