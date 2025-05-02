<script lang="ts" setup>
import ProgramStudiGrid from '@/views/prodi/components/ProgramStudiGrid.vue'
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Departement } from '@/core/types/departement';
import type { Faculty } from '@/core/types/fakultas';

defineProps<{
  prodiData: Departement[];
  fakultas: Faculty;
}>();
</script>

<template>
  <div
    class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 lg:gap-6">
      <div class="w-full md:w-1/2">
        <TitleSection :text="'Program Studi Unggulan: Mencetak Generasi Pemimpin Masa Depan'"></TitleSection>
      </div>
      <div class="w-full md:w-1/2">
        <TextSection>Kami menawarkan berbagai program studi yang dirancang
          untuk memenuhi kebutuhan
          industri dan perkembangan ilmu pengetahuan. Setiap program dilengkapi dengan kurikulum yang relevan
          dan pengajaran dari dosen berpengalaman. Bergabunglah dengan kami untuk memulai perjalanan akademis
          Anda.</TextSection>
      </div>
    </div>

    <ProgramStudiGrid :prodiDatas="prodiData" />
  </div>
</template>
