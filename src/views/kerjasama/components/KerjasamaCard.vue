<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';

</script>

<template>
  <div class="flex flex-col justify-center items-center text-center gap-4 md:gap-5 lg:gap-8">
    <div class="w-full h-[198px] md:h-[216px] lg:h-[240px] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] group overflow-hidden">
      <img src="" alt="" class="w-full h-full object-cover bg-red-500 group-hover:scale-105 transition duration-500">
    </div>
    <div class="space-y-4 md:space-y-5 lg:space-y-8">
      <div class="space-y-2 lg:space-y-4">
        <h6 class="text-[18px] md:text-[20px] lg:text-[22px] font-bold">Inisiatif Kolaborasi untuk Meningkatkan Kualitas Pendidikan dan Penelitian</h6>
        <TextBody>Fakultas kami aktif menjalin kerjasama dengan berbagai institusi untuk meningkatkan pengalaman belajar.</TextBody>
      </div>
      <div class="cursor-pointer">
        <TextBody>Selengkapnya ></TextBody>
      </div>
    </div>
  </div>
</template>
