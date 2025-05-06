<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';
import type { Faculty } from '@/core/types/fakultas';
import SectionLayout from '@/layouts/SectionLayout.vue';

defineProps<{
  fakultas: Faculty | null;
  isLoading?: boolean;
}>();
</script>

<template>
  <SectionLayout>
    <div class="flex lg:gap-20 gap-5 items-center flex-col lg:flex-row">
      <div class="lg:w-1/2 w-full">
        <TitleMain v-if="fakultas.name"
          :text="`Testimonial Alumni ${fakultas.name} Unpas`"></TitleMain>
      </div>
      <div class="lg:w-1/2 w-full">
        <TextSection class="text-gray-500">
          Testimonial dari mahasiswa dan alumni adalah cerminan nyata dari kualitas pendidikan yang
          kami tawarkan. Melalui pengalaman mereka, Anda dapat melihat bagaimana fakultas kami
          membentuk masa depan yang sukses.
        </TextSection>
      </div>
    </div>
  </SectionLayout>
</template>
