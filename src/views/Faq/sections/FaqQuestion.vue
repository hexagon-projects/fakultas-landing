<script setup lang="ts">
import ContactAdminButton from '@/components/ContactAdminButton.vue';
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';

defineProps<{
  isLoading?: boolean;
}>();

const backgroundImageUrl = 'https://images.unsplash.com/photo-1635424239131-32dc44986b56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
</script>

<template>
  <div class="w-full md:p-4 lg:p-8 space-y-10 md:space-y-14 lg:space-y-16">
    <div class="relative w-full h-[80vh] md:h-[40vh] lg:h-[60vh] rounded-b-[32px] md:rounded-[32px]">
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black/50 z-10 rounded-b-[32px] md:rounded-[32px]"></div>

      <!-- Background image -->
      <div
        class="absolute inset-0 rounded-b-[32px] md:rounded-[32px]"
        :style="`background-image: url('${backgroundImageUrl}'); background-size: cover; background-position: center;`">
      </div>

      <!-- Content -->
      <div class="relative z-20 h-full flex flex-col justify-center items-center gap-12 md:gap-20 px-5">
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
            <a href="https://registrasi.unpas.ac.id/register" target="_blank">
              <InteractiveHoverButton :text="'Daftar Sekarang'" />
            </a>
            <ContactAdminButton :bg-color="'bg-transparent'" :bg-hover="'bg-colorPrimary'" :border-color="'border-colorPrimary'"
            :text="'Hubungi Kami'" :text-color="'text-colorPrimary'" :text-hover="'group-hover:text-white'"/>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
