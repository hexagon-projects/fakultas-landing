<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import Piala from '@/assets/piala.png'
import Sertif from '@/assets/dokumen.png'
import NumberTicker from '@/components/ui/number-ticker/NumberTicker.vue';

defineProps<{
  isLoading?: boolean;
}>();
</script>

<template>
  <div
    class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="flex flex-col justify-center items-center relative">
      <!-- Mobile -->
      <template v-if="isLoading">
        <div class="w-full flex flex-col justify-center items-center text-center relative md:hidden">
          <div class="w-full md:w-1/4 flex flex-col justify-center items-center gap-4">
            <div class="h-12 w-64 bg-gray-300 animate-pulse rounded-lg"></div>
            <div class="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
          </div>
          <div class="w-full flex">
            <div class="relative -bottom-12 w-1/2 h-32 bg-gray-300 animate-pulse"></div>
            <div class="relative -bottom-12 w-1/2 h-32 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="w-full flex flex-col justify-center items-center text-center relative md:hidden">
          <div class="w-full md:w-1/4 flex flex-col justify-center items-center gap-4">
            <TitleMain :text="'Kegiatan Mahasiswa'"></TitleMain>
            <TextSection class="text-black/40">Dari organisasi kemahasiswaan, acara seni dan budaya, hingga kegiatan
              sosial—kampus kami penuh dengan peluang untuk berkembang di luar kelas.</TextSection>
          </div>
          <div class="w-full flex">
            <div class="relative -bottom-12"><img :src="Sertif" alt=""></div>
            <div class="relative -bottom-12"><img :src="Piala" alt=""></div>
          </div>
        </div>
      </template>

      <!-- Tablet & Dekstop -->
      <template v-if="isLoading">
        <div class="w-full md:flex justify-center items-center text-center relative hidden">
          <div class="relative -bottom-28 w-1/4 h-64 bg-gray-300 animate-pulse"></div>
          <div class="w-full md:w-1/4 flex flex-col justify-center items-center gap-4 md:mb-8 lg:mb-10">
            <div class="h-12 w-64 bg-gray-300 animate-pulse rounded-lg"></div>
            <div class="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
            <div class="h-12 w-40 bg-gray-300 animate-pulse rounded-lg"></div>
          </div>
          <div class="relative -bottom-28 w-1/4 h-64 bg-gray-300 animate-pulse"></div>
        </div>
      </template>
      <template v-else>
        <div class="w-full md:flex justify-center items-center text-center relative hidden">
          <div class="relative -bottom-28"><img :src="Sertif" alt=""></div>
          <div class="w-full md:w-1/4 flex flex-col justify-center items-center gap-4 md:mb-8 lg:mb-10">
            <TitleMain :text="'Kegiatan Mahasiswa'"></TitleMain>
            <TextSection class="text-black/40">Dari organisasi kemahasiswaan, acara seni dan budaya, hingga kegiatan
              sosial—kampus kami penuh dengan peluang untuk berkembang di luar kelas.</TextSection>
            <InteractiveHoverButton :text="'Daftar Sekarang'"></InteractiveHoverButton>
          </div>
          <div class="relative -bottom-28"><img :src="Piala" alt=""></div>
        </div>
      </template>

      <div
        class="w-[80%] flex justify-evenly items-center bg-[#FAFAFA] rounded-[8px] md:rounded-[16px] lg:rounded-[32px] p-5 lg:p-10 relative z-10">
        <template v-if="isLoading">
          <div v-for="i in 3" :key="i" class="text-center">
            <div class="h-12 w-24 bg-gray-300 animate-pulse rounded-lg"></div>
            <div class="h-4 w-16 bg-gray-300 animate-pulse rounded mt-2"></div>
          </div>
        </template>
        <template v-else>
          <div class="text-center">
            <h3 class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight"><NumberTicker class="text-black" :value="26" /></h3>
            <TextBody>Kegiatan</TextBody>
          </div>

          <div class="text-center">
            <h3 class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight"><NumberTicker class="text-black" :value="26" /></h3>
            <TextBody>Organisasi</TextBody>
          </div>

          <div class="text-center">
            <h3 class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight"><NumberTicker class="text-black" :value="26" /></h3>
            <TextBody>Komunitas</TextBody>
          </div>
        </template>
      </div>
      <template v-if="isLoading">
        <div class="h-12 w-40 bg-gray-300 animate-pulse rounded-lg md:hidden"></div>
      </template>
      <template v-else>
        <InteractiveHoverButton :text="'Daftar Sekarang'" class="md:hidden"></InteractiveHoverButton>
      </template>
    </div>
  </div>
</template>
