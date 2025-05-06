<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';

</script>

<template>
  <SectionLayout>
    <div class="text-center lg:w-1/2 w-full mx-auto space-y-5 lg:space-y-6">
      <TitleSection text="Sejarah, Visi, Misi, dan Pencapaian Fakultas Kami" class="text-center"></TitleSection>
      <TextSection>Fakultas kami didirikan pada tahun 1990 dengan tujuan memberikan pendidikan berkualitas
        tinggi. Kami berkomitmen untuk menciptakan lingkungan belajar yang inovatif dan inklusif,
        serta menghasilkan lulusan yang siap bersaing di dunia profesional.</TextSection>
    </div>
  </SectionLayout>
</template>
