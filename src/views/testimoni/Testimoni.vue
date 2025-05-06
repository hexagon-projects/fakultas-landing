<script setup lang="ts">
import { onMounted } from 'vue'
import TestimoniCarousel from '@/components/TestimoniCarousel.vue'
import { berandaStore } from '@/stores'
import MainLayout from '@/layouts/MainLayout.vue'
import TestimoniHero from './sections/TestimoniHero.vue'
import SectionLayout from '@/layouts/SectionLayout.vue'
import TestimoniList from './sections/TestimoniList.vue'
import { useFakultasStore } from '@/stores/fakultas'

const fakultasStore = useFakultasStore()

onMounted(async () => {
  await berandaStore.getDataTestimoni()
  await fakultasStore.fetchFakultas()
})
</script>
<template>
  <MainLayout>
    <TestimoniHero :fakultas="fakultasStore.fakultas" />
    <SectionLayout>
      <TestimoniCarousel />
    </SectionLayout>
    <TestimoniList :testimoni="berandaStore.testimoniData"/>
  </MainLayout>
</template>
