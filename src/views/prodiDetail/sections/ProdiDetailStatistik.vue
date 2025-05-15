<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import NumberTicker from '@/components/ui/number-ticker/NumberTicker.vue';
import type { Departement } from '@/core/types/departement';

import { computed } from 'vue';
const props = defineProps<{
  prodi: Departement | null;
}>();

const titleHTML = computed(() => {
  if (!props.prodi?.name) return 'Statistik';
  return `Statistik Program <span class="text-colorPrimary">Studi ${props.prodi?.name}</span> Unpas`;
});

const statistik1 = Number(props.prodi?.statistik1) || 1000;
const statistik2 = Number(props.prodi?.statistik2) || 1000;
const statistik3 = Number(props.prodi?.statistik3) || 1000;
const statistik4 = Number(props.prodi?.statistik4) || 1000;
</script>

<template>
  <div class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] gap-12 md:gap-16 lg:gap-20 flex flex-col justify-center md:flex-row md:justify-between items-center">
    <div class="w-full flex flex-col gap-4 md:gap-5 lg:gap-6">
      <div class="w-full">
        <TitleSection :text="titleHTML" :html="true" :delay="60"/>
      </div>
      <div class="w-full">
        <TextSection>
          Fakultas kami memiliki lebih dari 1.000 mahasiswa aktif yang terdaftar. Dengan dukungan 100 dosen berpengalaman, kami menawarkan 10 program studi yang berkualitas. Kami berkomitmen untuk memberikan pendidikan terbaik dan mendukung pengembangan karir mahasiswa.
        </TextSection>
      </div>
    </div>

    <div class="w-full grid grid-cols-2 lg:grid-cols-2 gap-4">
      <div class="space-y-4 border-l-2 border-text px-4 md:px-8">
        <h2 class="text-[20px] md:text-[32px] lg:text-[46px] font-bold text-colorPrimary">
          <NumberTicker :value="statistik1" :duration="5000"/>
        </h2>
        <p class="text-base lg:text-xl font-bold">Mahasiswa</p>
      </div>
      <div class="space-y-4 border-l-2 border-text px-4 md:px-8">
        <h2 class="text-[20px] md:text-[32px] lg:text-[46px] font-bold text-colorPrimary">
          <NumberTicker :value="statistik2" :duration="5000"/>
        </h2>
        <p class="text-base lg:text-xl font-bold">Lulusan</p>
      </div>
      <div class="space-y-4 border-l-2 border-text px-4 md:px-8">
        <h2 class="text-[20px] md:text-[32px] lg:text-[46px] font-bold text-colorPrimary">
          <NumberTicker :value="statistik3" :duration="5000"/>
        </h2>
        <p class="text-base lg:text-xl font-bold">Prestasi</p>
      </div>
      <div class="space-y-4 border-l-2 border-text px-4 md:px-8">
        <h2 class="text-[20px] md:text-[32px] lg:text-[46px] font-bold text-colorPrimary">
          <NumberTicker :value="statistik4" :duration="5000"/>
        </h2>
        <p class="text-base lg:text-xl font-bold">Karya Ilmiah</p>
      </div>
    </div>
  </div>
</template>
