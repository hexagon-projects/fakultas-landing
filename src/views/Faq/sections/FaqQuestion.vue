<script setup lang="ts">
import ButtonSection from '@/components/ButtonSection.vue';
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import SectionLayout from '@/layouts/SectionLayout.vue'

const backgroundImageUrl = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
</script>

<template>
  <SectionLayout class="">
    <div
      class="w-full rounded-b-[32px] md:rounded-[32px] flex flex-col items-center gap-12 md:gap-20 px-5 sm:px-8 md:px-16 py-16 md:py-28 lg:py-20"
      :style="`background-image: url('${backgroundImageUrl}'); background-size: cover; background-position: center;`">
      <div class="w-full max-w-[768px] flex flex-col items-center gap-6 md:gap-8 text-center text-white">
        <TextSection class="font-bold">FAQ</TextSection>
        <div class="flex flex-col gap-2 md:gap-6">
          <TitleMain :text="'Pertanyaan Umum'"></TitleMain>
          <TextSection>Halaman ini membantu Anda menemukan jawaban atas pertanyaan yang sering diajukan.</TextSection>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-4 md:gap-6 lg:-mt-10">
        <!-- <ButtonSection>Daftar Sekarang</ButtonSection>
        <ButtonSection :border-color="'border-fakultas'" :bg-color="'bg-transparent'" :text-color="'text-fakultas'">Hubungi Kami</ButtonSection> -->
        <InteractiveHoverButton :text="'Daftar Sekarang'"></InteractiveHoverButton>
        <InteractiveHoverButton :bg-color="'bg-transparent'" :bg-hover="'bg-fakultas'" :border-color="'border-fakultas'"
          :text="'Hubungi Kami'" :text-color="'text-fakultas'" :text-hover="'group-hover:text-white'" />
      </div>
    </div>
  </SectionLayout>
</template>
