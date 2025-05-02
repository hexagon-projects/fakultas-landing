<script setup lang="ts">
import ButtonSection from '@/components/ButtonSection.vue';
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
</script>

<template>
  <div class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="w-full flex justify-center items-center">
      <div class="w-full flex flex-col justify-center items-center text-center lg:max-w-[75%] gap-4 md:gap-5 lg:gap-6">
        <div class="w-full lg:max-w-3xl">
          <TitleMain class="md:text-center" :text="'Program Studi Unggulan untuk Masa Depan Anda'"></TitleMain>
        </div>
        <div class="w-full flex flex-col gap-4 md:gap-5 lg:gap-6">
          <TextSection>Temukan berbagai program studi yang dirancang untuk mempersiapkan Anda
            menghadapi
            tantangan dunia kerja. Bergabunglah dengan kami dan kembangkan potensi Anda di bidang yang Anda
            cintai.</TextSection>
          <div class="w-full space-x-4 lg:space-x-6">
            <InteractiveHoverButton :text="'Daftar Sekarang'"></InteractiveHoverButton>
            <InteractiveHoverButton :bg-color="'bg-transparent'" :bg-hover="'bg-colorPrimary'" :border-color="'border-colorPrimary'" :text="'Hubungi Admin'" :text-color="'text-colorPrimary'" :text-hover="'group-hover:text-white'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
