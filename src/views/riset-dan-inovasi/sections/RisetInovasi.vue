<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';
import type { Portofolio } from '@/stores/portofolio';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  inovasi: Portofolio[]
}>();
</script>

<template>
  <SectionLayout>
    <div class="mx-auto text-center lg:w-1/2 w-full">
      <div class="space-y-4 lg:space-y-6">
        <TitleSection text="Inovasi Terkini: Penelitian Unggulan dari Fakultas Kami" class="mt-7"></TitleSection>
        <TextSection>Fakultas kami bangga mempersembahkan penelitian terbaru yang memberikan dampak
          signifikan di bidangnya. Temukan lebih lanjut tentang proyek-proyek inovatif yang
          dipimpin oleh tim peneliti kami yang berpengalaman.</TextSection>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-10">
      <template v-for="(data, index) in inovasi" :key="index">
        <div
          class="p-5 flex lg:gap-10 gap-5 w-4/5 bg-[#F0F0F0] rounded-[20px] flex-col transition-all duration-300 group cursor-pointer hoverAnimation hover:shadow-xl"
          :class="[index % 2 == 0 ? 'lg:flex-row-reverse' : 'lg:flex-row']">
          <div class="rounded-[20px] bg-gray-300 lg:w-5/12 w-full h-40 overflow-hidden">
            <img :src="getImageUrl(data.image1)" alt=""
              class="object-cover rounded-[20px] w-full h-full transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div class="lg:w-7/12 w-full grid gap-5">
            <h4 class="text-base md:text-lg font-bold transition-colors duration-300 ">
              {{ data.title }}
            </h4>
            <p class="text-sm md:text-base transition-colors duration-300 group-hover:text-gray-800"
              v-html="data.description"></p>
            <InteractiveHoverButton text="Selengkapnya" bg-color="bg-none" border-color="border-colorPrimary"
              text-color="text-colorPrimary" bg-hover="bg-colorPrimary" text-hover="text-white" padding="px-5 py-2"
              class="w-fit transition-all duration-300 group-hover:scale-[1.02]" />
          </div>
        </div>
      </template>
    </div>

    <div class="text-center">
      <InteractiveHoverButton text="Selengkapnya" />
    </div>
  </SectionLayout>
</template>
