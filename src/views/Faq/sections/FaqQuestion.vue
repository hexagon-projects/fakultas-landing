<script setup lang="ts">
import ButtonSection from '@/components/ButtonSection.vue';
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import SectionLayout from '@/layouts/SectionLayout.vue'

defineProps<{
  isLoading?: boolean;
}>();

const backgroundImageUrl = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
</script>

<template>
  <SectionLayout class="">
    <div
      class="w-full rounded-b-[32px] md:rounded-[32px] flex flex-col items-center gap-12 md:gap-20 px-5 sm:px-8 md:px-16 py-16 md:py-28 lg:py-20"
      :style="`background-image: url('${backgroundImageUrl}'); background-size: cover; background-position: center;`">
      <template v-if="isLoading">
        <div class="w-full max-w-[768px] flex flex-col items-center gap-6 md:gap-8 text-center text-white">
          <div class="h-4 w-24 bg-gray-300 animate-pulse rounded"></div>
          <div class="flex flex-col gap-2 md:gap-6 w-full">
            <div class="h-12 w-3/4 mx-auto bg-gray-300 animate-pulse rounded-lg"></div>
            <div class="h-4 w-1/2 mx-auto bg-gray-300 animate-pulse rounded"></div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-4 md:gap-6 lg:-mt-10">
          <div class="h-12 w-40 bg-gray-300 animate-pulse rounded-lg"></div>
          <div class="h-12 w-40 bg-gray-300 animate-pulse rounded-lg"></div>
        </div>
      </template>
      <template v-else>
        <div class="w-full max-w-[768px] flex flex-col items-center gap-6 md:gap-8 text-center text-white">
          <TextSection class="font-bold text-white">FAQ</TextSection>
          <div class="flex flex-col gap-2 md:gap-6">
            <TitleMain :text="'Pertanyaan Umum'"></TitleMain>
            <TextSection class="text-white">Halaman ini membantu Anda menemukan jawaban atas pertanyaan yang sering diajukan.</TextSection>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-4 md:gap-6 lg:-mt-10">
          <InteractiveHoverButton :text="'Daftar Sekarang'"></InteractiveHoverButton>
          <InteractiveHoverButton :bg-color="'bg-transparent'" :bg-hover="'bg-colorPrimary'" :border-color="'border-colorPrimary'"
            :text="'Hubungi Kami'" :text-color="'text-colorPrimary'" :text-hover="'group-hover:text-white'" />
        </div>
      </template>
    </div>
  </SectionLayout>
</template>
