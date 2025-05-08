<script setup lang="ts">
import ContactAdminButton from '@/components/ContactAdminButton.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';

</script>

<template>
  <SectionLayout>
    <div class="flex lg:flex-row flex-col items-center">
      <div class="text-center lg:w-1/2 w-full mx-auto space-y-4 lg:space-y-6">
        <TitleSection text="Penelitian dan Publikasi Fakultas Kami"></TitleSection>
        <TextSection>Fakultas kami berkomitmen untuk mendorong penelitian yang inovatif dan berkualitas tinggi.
          Kami percaya bahwa penelitian adalah kunci untuk menciptakan solusi yang berdampak bagi
          masyarakat.</TextSection>
        <div class="flex lg:gap-10 gap-5 justify-center">
          <a href="https://registrasi.unpas.ac.id/register" target="_blank">
            <InteractiveHoverButton :text="'Daftar Sekarang'" />
          </a>
          <ContactAdminButton text="Hubungi Admin" bg-color="bg-none" border-color="border-colorPrimary"
          text-color="text-colorPrimary" bg-hover="bg-colorPrimary" text-hover="text-white"/>
          <!-- <InteractiveHoverButton text="Hubungi Admin" bg-color="bg-none" border-color="border-colorPrimary"
            text-color="text-colorPrimary" bg-hover="bg-colorPrimary" text-hover="text-white" /> -->
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
