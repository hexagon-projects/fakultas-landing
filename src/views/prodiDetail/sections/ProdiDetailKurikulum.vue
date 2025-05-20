<script lang="ts" setup>
import KurikulumCard from '@/views/prodi/components/KurikulumCard.vue'
import TitleSection from '@/components/TitleSection.vue'
import SectionLayout from '@/layouts/SectionLayout.vue'
import type { Kurikulum } from '@/core/types/kurikulum'

defineProps<{
  kurikulum: Kurikulum[]
}>()
</script>

<template>
  <SectionLayout>
    <div class="w-full flex justify-center items-center">
      <TitleSection class="text-colorPrimary" :text="'Kurikulum Terintegrasi'"></TitleSection>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <KurikulumCard
        v-for="(item, index) in kurikulum.slice(0, 4)"
        :key="index"
        :number="index + 1"
        :title="item.title"
        :description="item.description"
        :image="item.icon"
      />
    </div>
  </SectionLayout>
</template>
