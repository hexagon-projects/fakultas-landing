<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import Piala from '@/assets/piala.png'
import Sertif from '@/assets/dokumen.png'
import NumberTicker from '@/components/ui/number-ticker/NumberTicker.vue';

</script>

<template>
  <div
    class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="flex flex-col justify-center items-center relative">
      <!-- Mobile -->
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

      <!-- Tablet & Dekstop -->
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

      <div
        class="w-[80%] flex justify-evenly items-center bg-[#FAFAFA] rounded-[8px] md:rounded-[16px] lg:rounded-[32px] p-5 lg:p-10 relative z-10">
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

      </div>
      <InteractiveHoverButton :text="'Daftar Sekarang'" class="md:hidden"></InteractiveHoverButton>
    </div>
  </div>
</template>
