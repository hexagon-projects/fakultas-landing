<script setup lang="ts">
import Button from '@/components/Button.vue'
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue'
import Title from '@/components/Title.vue'
import { getImageUrl } from '@/core/helpers/helper'
import { berandaStore } from '@/stores'
import { onMounted } from 'vue'
import ScrollTransition from '@/components/ScrollTransition.vue'

onMounted(async () => {
  await berandaStore.getDataPrestasi()
})
</script>
<template>
  <!-- Hero Section -->
  <ScrollTransition>
    <div
      class="lg:py-48 mt-10 px-[5%] lg:px-0 flex lg:gap-20 gap-5 lg:flex-row flex-col items-center relative custom-gradient"
    >
      <div class="text-center w-full md:w-3/4 lg:w-1/2 mx-auto">
        <Title>Setiap Prestasi Adalah Langkah Menuju Perubahan</Title>
        <p class="mt-8">
          Mahasiswa Universitas Pasundan terus mengukir prestasi membanggakan di berbagai bidang
          baik di tingkat nasional maupun internasional.
        </p>
        <div class="flex gap-10 mt-10 justify-center">
          <!-- <Button>Daftar Sekarang</Button> -->
          <InteractiveHoverButton text="Daftar Sekarang" />
        </div>
      </div>
    </div>
  </ScrollTransition>

  <!-- Prestasi Mahasiswa -->
  <ScrollTransition>
    <div class="lg:mt-0 mt-32 px-[5%] lg:px-0">
      <div class="grid gap-5 text-center w-full lg:w-1/2 md:w-3/4 mx-auto">
        <Title>Prestasi Mahasiswa</Title>
        <p class="text-gray-500">
          This grid captures the delicate interplay of light and shadow, creating moments of
          brilliance in each image.
        </p>
        <div class="flex gap-5 justify-center flex-wrap">
          <Button className="btn-primary" padding="px-4 py-2">All</Button>
          <Button className="btn-neutral" padding="px-4 py-2">UKM</Button>
        </div>
      </div>
      <div class="w-full mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:px-20">
        <div
          class="w-full h-64 bg-gray-200 flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition relative"
          v-for="data in berandaStore.prestasiData"
          :key="data.id"
          :style="{
            backgroundImage: `url(${getImageUrl(data.image)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
        >
          <div
            class="bg-gradient-to-t from-black/80 via-transparent to-transparent absolute inset-0 rounded-[20px]"
          ></div>
          <h6 class="text-white font-semibold z-10">{{ data.name }}</h6>
          <p class="text-white/40 z-10" v-html="data.description"></p>
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <InteractiveHoverButton text="Lihat Semua" />
      </div>
    </div>
  </ScrollTransition>
</template>
<style scoped>
.custom-gradient {
  background: radial-gradient(
    circle at center,
    rgba(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b), 0.15) 0%,
    rgba(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b), 0.05) 20%,
    transparent 35%
  );
}

/* Responsive mobile */
@media (max-width: 768px) {
  .custom-gradient {
    background: radial-gradient(
      circle at center,
      rgba(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b), 0.15) 0%,
      rgba(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b), 0.05) 40%,
      transparent 70%
    );
  }
}
</style>
