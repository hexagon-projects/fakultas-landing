<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';
import PrestasiCard from '../components/PrestasiCard.vue';
import TitleSection from '@/components/TitleSection.vue';
import TextSection from '@/components/TextSection.vue';
import type { Prestasi } from '@/core/types/Prestasi';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import { computed } from 'vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  prestasi: Prestasi[]
}>();

// Hanya ambil 6 prestasi pertama
const limitedPrestasi = computed(() => {
  return props.prestasi.slice(0, 6);
});
</script>

<template>
  <SectionLayout>
    <div class="w-full flex h-[70vh] md:h-[80vh]">
      <div
        class="w-full h-full flex flex-col lg:flex-row lg:justify-between items-start gap-4 md:gap-5 lg:gap-6 relative">
        <div class="w-full lg:w-[40%] flex flex-col justify-between items-start lg:h-full">
          <div class="lg:sticky lg:top-28 z-10">
            <div class="w-full space-y-2 lg:h-[80%]">
              <TitleSection :text="'Prestasi'"></TitleSection>
              <TextSection>Mahasiswa Universitas Pasundan terus mengukir prestasi
                membanggakan di berbagai bidang baik di tingkat nasional maupun internasional.</TextSection>
              <div class="pt-0 md:pt-6 lg:pt-8">
                <InteractiveHoverButton @click="$router.push('/prestasi')" :text="'Selengkapnya'">
                </InteractiveHoverButton>
              </div>
            </div>
          </div>

          <div class="lg:flex items-center gap-4 md:gap-5 lg:gap-6 hidden">
            <TextSection class="text-colorPrimary" :weight-text="'font-semibold'">Scroll Down</TextSection>
            <div class="">
              <div class="scrolldown">
                <div class="chevrons">
                  <div class="chevrondown"></div>
                  <div class="chevrondown"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tablet & Dekstop -->
        <div id="prestasi-scroll" class="hidden md:flex w-full lg:w-[60%] h-full overflow-y-auto cursor-pointer">
          <div class="w-1/2">
            <div class="w-full h-[22vh]"></div>
            <template v-for="(item, index) in limitedPrestasi" :key="item.id">
              <template v-if="index % 2 !== 0">
                <PrestasiCard :rounded="'rounded-l-[8px] md:rounded-l-[16px] lg:rounded-l-[32px]'"
                  :image="getImageUrl(item.image)" :title="item.title" :description="item.description"
                  :number="String(index + 1).padStart(2, '0')" />
                <div class="w-full h-[16vh]"></div>
              </template>
            </template>
          </div>
          <div class="w-1/2">
            <template v-for="(item, index) in limitedPrestasi" :key="item.id">
              <template v-if="index % 2 === 0">
                <PrestasiCard :rounded="'rounded-r-[8px] md:rounded-r-[16px] lg:rounded-r-[32px]'"
                  :image="getImageUrl(item.image)" :title="item.title" :description="item.description"
                  :number="String(index + 1).padStart(2, '0')" />
                <div class="w-full h-[16vh]"></div>
              </template>
            </template>
          </div>
        </div>

        <!-- Mobile -->
        <div class="w-full grid grid-cols-1 overflow-y-scroll md:hidden gap-4 md:gap-5">
          <template v-for="(item, index) in limitedPrestasi" :key="item.id">
            <PrestasiCard :rounded="'rounded-[16px] md:rounded-[24px] lg:rounded-[32px]'"
              :image="getImageUrl(item.image)" :title="item.title" :description="item.description"
              :number="String(index + 1).padStart(2, '0')" />
          </template>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<style>
#prestasi-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

#prestasi-scroll::-webkit-scrollbar {
  display: none;
}
</style>
