<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';

import InovasiImg from '@/assets/inovasi.png'
</script>

<template>
  <SectionLayout>
    <div class="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-12 lg:gap-20">
      <div class="lg:w-1/2 w-[90%]">
        <div class="w-full h-fulls"><img :src="InovasiImg" alt="Poster Inovasi" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="lg:w-1/2 w-[90%] text-black space-y-6 md:space-y-7 lg:space-y-8">
        <div class="space-y-4 md:space-y-5 lg:space-y-6">
          <h6 class="font-semibold md:text-lg">Inovasi</h6>
          <TitleSection text="Penelitian Unggulan dan Publikasi Terbaru" class="mt-5"></TitleSection>
          <TextSection>Fakultas kami berkomitmen untuk menghasilkan penelitian yang berdampak. Temukan karya-karya
            inovatif yang dihasilkan oleh para akademisi kami.</TextSection>
        </div>

        <div class="flex gap-5 flex-col md:flex-row">
          <div class="md:w-1/2 w-full space-y-3 lg:space-y-4">
            <TextSection class="text-black" :weight-text="'font-bold'">Penelitian Terkini</TextSection>
            <TextSection>Kami bangga dengan penelitian yang diakui secara internasional.</TextSection>
          </div>
          <div class="md:w-1/2 w-full space-y-3 lg:space-y-4">
            <TextSection class="text-black" :weight-text="'font-bold'">Publikasi Kami</TextSection>
            <TextSection>Jurnal kami diterbitkan secara berkala dengan kontribusi dari berbagai disiplin ilmu.</TextSection>
          </div>
        </div>

        <InteractiveHoverButton @click="$router.push('/riset-dan-inovasi')" text="Selengkapnya"></InteractiveHoverButton>
      </div>
    </div>
  </SectionLayout>
</template>
