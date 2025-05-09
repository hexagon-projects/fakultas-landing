<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Faculty } from '@/core/types/fakultas';
import SectionLayout from '@/layouts/SectionLayout.vue';
defineProps<{
  fakultas: Faculty | null;
  isLoading?: boolean;
}>();
</script>

<template>
  <SectionLayout>
    <div class="text-center w-full mx-auto space-y-5 lg:space-y-6">
      <TitleSection text="Sejarah, Visi, Misi, dan Pencapaian Fakultas Kami" class="text-center lg:w-1/2 mx-auto"></TitleSection>
      <TextSection class="lg:w-[70%] mx-auto"><span v-html="fakultas?.description3"></span></TextSection>
    </div>
  </SectionLayout>
</template>
