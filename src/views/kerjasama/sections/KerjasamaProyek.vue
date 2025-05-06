<script setup lang="ts">
import TitleSection from '@/components/TitleSection.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';
import KerjasamaCard from '../components/KerjasamaCard.vue';

</script>

<template>
  <SectionLayout>
    <div class="w-full lg:w-[60%] text-center mx-auto">
      <TitleSection :text="'Program dan Proyek Kerjasama Fakultas yang Sedang Berjalan'"></TitleSection>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
      <KerjasamaCard />
      <KerjasamaCard />
      <KerjasamaCard />
    </div>
  </SectionLayout>
</template>
