<script lang="ts" setup>
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import Visi from '@/assets/visi.png'
import type { Faculty } from '@/core/types/fakultas';
import SectionLayout from '@/layouts/SectionLayout.vue';
import TextSection from '@/components/TextSection.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  fakultas: Faculty | null;
  isLoading?: boolean;
}>();
</script>

<template>
  <SectionLayout class="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-12 lg:gap-16" v-if="fakultas?.title4 && fakultas?.description4">
    <div class="lg:w-1/2 w-full">
      <div class="w-full h-full"><img :src="getImageUrl(fakultas.image4 || Visi)" :alt="fakultas?.title4" class="w-full h-full object-cover rounded-[16px] md:rounded-[24px] lg:rounded-[32px]"></div>
    </div>
    <div class="lg:w-1/2 w-full">
      <div>
        <TitleSection class="mt-7" :text="fakultas?.title4"></TitleSection>
        <TextSection class="mt-5"><span v-html="fakultas?.description4"></span></TextSection>
        <div class="flex gap-5 lg:mt-10 mt-5">
          <a href="https://registrasi.unpas.ac.id/register" target="_blank">
            <InteractiveHoverButton :text="'Daftar Sekarang'" />
          </a>
          <InteractiveHoverButton @click="$router.push('/tentang-fakultas')" text="Selengkapnya" bg-color="bg-transparent" textColor="text-colorPrimary"
            borderColor="border-colorPrimary" bgHover="bg-colorPrimary" textHover="text-white" />
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
