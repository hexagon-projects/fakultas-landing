<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';
import type { Portofolio } from '@/core/types/portofolio';

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
          class="p-5 flex lg:gap-10 gap-5 w-full md:w-full rounded-[20px] flex-col transition-all duration-300 group cursor-pointer hoverAnimation shadow-gray-300/5 hover:shadow-black/5 shadow-xl hover:shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]"
          :class="[index % 2 == 0 ? 'lg:flex-row-reverse' : 'lg:flex-row']">
          <div class="rounded-[20px] bg-[#F0F0F0] lg:w-5/12 w-full h-40 overflow-hidden">
            <img :src="getImageUrl(data.image1)" alt=""
              class="object-cover rounded-[20px] w-full h-full transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div class="lg:w-7/12 w-full grid gap-5">
            <h4 class="text-[18px] md:text-[20px] lg:text-[22px] font-bold transition-colors duration-300 ">
              {{ data.title }}
            </h4>
            <TextSection class="transition-colors duration-300 group-hover:text-gray-800"><span v-html="data.description"></span></TextSection>
            <div class="w-fit">
              <InteractiveHoverButton text="Selengkapnya" :bg-color="'bg-transparent'" :border-color="'border-colorPrimary'" :text-color="'text-colorPrimary'" :bg-hover="'bg-colorPrimary'" :text-hover="'text-white'"/>
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- <div class="text-center">
      <InteractiveHoverButton text="Selengkapnya" />
    </div> -->
  </SectionLayout>
</template>
