<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import NumberTicker from '@/components/ui/number-ticker/NumberTicker.vue';
import { useSanitize } from '@/composables/useSanitize';
import type { Faculty } from '@/core/types/fakultas';
import { computed } from 'vue';

const { sanitizeHtml } = useSanitize()

const props = defineProps<{
  fakultas: Faculty | null;
}>();

const titleHTML = computed(() => {
  if (!props.fakultas?.name) return 'Statistik';
  return `Statistik <span class="text-colorPrimary">${props.fakultas?.name}</span>`;
});

const statistik1 = Number(props.fakultas?.statistik1) || 1000;
const statistik2 = Number(props.fakultas?.statistik2) || 1000;
const statistik3 = Number(props.fakultas?.statistik3) || 1000;
const statistik4 = Number(props.fakultas?.statistik4) || 1000;
</script>

<template>
  <div class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="w-full flex flex-col gap-4 md:gap-5 lg:gap-6">
      <div class="w-full lg:w-3/5">
        <TitleSection :text="titleHTML" :html="true" :delay="60"/>
      </div>
      <div class="w-full lg:w-3/5">
        <TextSection>
          <span v-html="sanitizeHtml(fakultas?.description3 || '')"></span>
        </TextSection>
      </div>
    </div>

    <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
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
