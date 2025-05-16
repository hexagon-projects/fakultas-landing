<script lang="ts" setup>
import KurikulumCard from '@/views/prodi/components/KurikulumCard.vue'
import TitleSection from '@/components/TitleSection.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';
import type { Kurikulum } from '@/core/types/kurikulum';

defineProps<{
  kurikulum: Kurikulum[]
}>();

const marginClasses = ['lg:mt-0', 'lg:mt-28', 'lg:mt-16', 'lg:mt-8'];
</script>

<template>
  <SectionLayout>
      <div class="w-full flex justify-center items-center">
        <TitleSection class="text-colorPrimary" :text="'Kurikulum Terintegrasi'"></TitleSection>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          <KurikulumCard
            v-for="(item, index) in kurikulum"
            :key="index"
            :number="index + 1"
            :title="item.title"
            :description="item.description"
            :image="item.icon"
            :margin="marginClasses[index % marginClasses.length]"
          />
      </div>
  </SectionLayout>
</template>
