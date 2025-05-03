<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';

defineProps<{
  isLoading?: boolean;
}>();
</script>

<template>
  <div class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="w-full flex justify-center items-center">
      <div class="w-full flex flex-col justify-center items-center text-center lg:max-w-[75%] gap-4 md:gap-5 lg:gap-6">
        <template v-if="isLoading">
          <div class="w-full lg:max-w-3xl h-16 bg-gray-300 animate-pulse rounded-lg"></div>

          <div class="w-full space-y-3">
            <div class="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
            <div class="h-4 w-5/6 mx-auto bg-gray-300 animate-pulse rounded"></div>
            <div class="h-4 w-2/3 mx-auto bg-gray-300 animate-pulse rounded"></div>
          </div>

          <div class="w-full flex justify-center space-x-4 lg:space-x-6">
            <div class="h-12 w-32 bg-gray-300 animate-pulse rounded-lg"></div>
            <div class="h-12 w-32 bg-gray-300 animate-pulse rounded-lg"></div>
          </div>
        </template>
        <template v-else>
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
        </template>
      </div>
    </div>
  </div>
</template>
