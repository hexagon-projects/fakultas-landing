<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';

</script>

<template>
  <SectionLayout>
    <div
      class="flex flex-col lg:flex-row items-center text-center lg:text-left">
      <div class="lg:w-1/2 w-full">
        <h5 class="md:text-xl text-base font-semibold">Kolaborasi</h5>
        <TitleMain text="Mitra Strategis Kami" class="mt-5"></TitleMain>
      </div>
      <div class="lg:w-1/2 w-full">
        <TextSection>Kami menjalin kerjasama dengan berbagai institusi dan industri untuk memberikan pengalaman
          terbaik bagi mahasiswa. Bersama mitra kami, kami menciptakan peluang yang memperkaya
          pendidikan dan penelitian.</TextSection>

        <div class="flex gap-5 mt-7 justify-center lg:justify-start flex-wrap">
          <InteractiveHoverButton text="Daftar Sekarang" />
          <InteractiveHoverButton text="Hubungi Admin" bg-color="bg-none" border-color="border-colorPrimary"
            text-color="text-colorPrimary" bg-hover="bg-colorPrimary" text-hover="text-white" />
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
