<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useDepartementStore } from '@/stores/departement';
import { useUnggulanStore } from '@/stores/unggulan';
import { useFakultasStore } from '@/stores/fakultas';
import { useTestimoniStore } from '@/stores/testimoni';

import ProdiHero from './sections/ProdiHero.vue';
import ImageSection from './sections/ImageSection.vue';
import ProdiProgramList from './sections/ProdiProgramList.vue';
import ProdiTestimonials from '../../components/sections/TestimonialsSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import ProdiAlasan from './sections/ProdiAlasan.vue';
import CTASection from '@/components/sections/CTASection.vue';

const prodiStore = useDepartementStore();
const uspStore = useUnggulanStore();
const fakultasStore = useFakultasStore();
const testimoniStore = useTestimoniStore();
const isLoading = ref(true);

onMounted(async () => {
  try {
    await Promise.all([
      prodiStore.fetchDepartements(),
      uspStore.fetchUnggulans(),
      fakultasStore.fetchFakultas(),
      testimoniStore.fetchTestimoni()
    ]);
  } catch (error) {
    console.error('Error loading data:', error);
  } finally {
    isLoading.value = false;
  }
});

const prodi = computed(() => prodiStore.departements);
const usp = computed(() => uspStore.unggulans);
const fakultas = computed(() => fakultasStore.fakultas);
const testimoni = computed(() => testimoniStore.testimoni);
</script>

<template>
  <MainLayout>
    <ProdiHero />
    <ImageSection :fakultas="fakultas" :is-loading="isLoading" />
    <ProdiAlasan :unggulan="usp.slice(0,4)" :fakultas="fakultas" :is-loading="isLoading" />
    <ProdiProgramList :prodiData="prodi" :fakultas="fakultas" :is-loading="isLoading" />
    <ProdiTestimonials :fakultas="fakultas" :testimoni="testimoni" :is-loading="isLoading" />
    <CTASection />
  </MainLayout>
</template>
