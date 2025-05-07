<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';
import type { Jurnal } from '@/stores/jurnal';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  jurnal: Jurnal[]
}>();
</script>

<template>
  <SectionLayout>
    <div class="lg:w-1/2 w-full mx-auto text-center">
      <div class="grid gap-5">
        <h6 class="font-semibold text-lg">Publikasi</h6>
        <TitleSection text="Jurnal dan Publikasi Terbaru Fakultas"></TitleSection>
        <TextSection>Fakultas kami berkomitmen untuk menghasilkan penelitian berkualitas tinggi. Berikut
          adalah daftar jurnal dan publikasi terbaru yang telah diterbitkan.</TextSection>
      </div>
    </div>

    <!-- Card Berita -->
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      <template v-for="(item, index) in jurnal" :key="index">
        <div
          class="w-full text-center grid gap-5 transition-all duration-300 group cursor-pointer p-5 rounded-[20px] hover:shadow-lg hoverAnimation">
          <div class="rounded-[20px] overflow-hidden">
            <img :src="getImageUrl(item.image1)" alt=""
              class="w-full h-48 lg:h-[240px] rounded-[20px] bg-gray-200 object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <h5 class="font-bold text-[18px] md:text-[20px] lg:text-[22px] transition-colors duration-300">
            {{ item.title }}
          </h5>
          <TextSection><span v-html="item.description"></span></TextSection>
        </div>
      </template>
    </div>
  </SectionLayout>
</template>

<style scoped>
.hoverAnimation:hover {
  transform: translateY(-5px);
  border: 1px solid #e5e7eb;
}
</style>
