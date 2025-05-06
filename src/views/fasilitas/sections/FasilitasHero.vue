<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';

</script>

<template>
  <div class="w-full p-5 md:p-6 lg:p-8 space-y-10 md:space-y-14 lg:space-y-16">
    <div class="flex lg:gap-20 gap-5 items-center flex-col lg:flex-row text-center lg:text-left">
      <div class="lg:w-1/2 w-full">
        <TitleMain text="Fasilitas Unggulan"></TitleMain>
      </div>
      <div class="lg:w-1/2 w-full">
        <TextSection>Fakultas kami menyediakan fasilitas modern yang mendukung proses belajar mengajar. Dari
          laboratorium canggih hingga perpustakaan lengkap, semua dirancang untuk meningkatkan
          pengalaman akademik Anda.</TextSection>
      </div>
    </div>

    <img src="/src/assets/images/fasilitas.jpg" alt="" class="rounded-[32px] w-full max-h-[600px]" />
  </div>
</template>
