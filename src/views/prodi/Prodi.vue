<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useDepartementStore } from '@/stores/departement'
import { useUnggulanStore } from '@/stores/unggulan'
import { useFakultasStore } from '@/stores/fakultas'
import { useTestimoniStore } from '@/stores/testimoni'

import ProdiHero from './sections/ProdiHero.vue'
import ImageSection from './sections/ImageSection.vue'
import ProdiProgramList from './sections/ProdiProgramList.vue'
import ProdiTestimonials from '../../components/sections/TestimonialsSection.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import ProdiAlasan from './sections/ProdiAlasan.vue'
import Loading from '@/components/Loading.vue'

const prodiStore = useDepartementStore()
const uspStore = useUnggulanStore()
const fakultasStore = useFakultasStore()
const testimoniStore = useTestimoniStore()

onMounted(async () => {
  await prodiStore.fetchDepartements()
  await uspStore.fetchUnggulans()
  await fakultasStore.fetchFakultas()
  await testimoniStore.fetchTestimoni()
})

const prodi = computed(() => prodiStore.departements)
const usp = computed(() => uspStore.unggulans)
const fakultas = computed(() => fakultasStore.fakultas)
const testimoni = computed(() => testimoniStore.testimoni)
</script>

<template>
  <MainLayout>
    <loading v-if="prodiStore.loading" class="-mt-[125px]" />
    <ProdiHero />
    <ImageSection :fakultas="fakultas" />
    <ProdiAlasan :unggulan="usp" :fakultas="fakultas" />
    <ProdiProgramList :prodiData="prodi" :fakultas="fakultas" />
    <ProdiTestimonials :fakultas="fakultas" :testimoni="testimoni" />
  </MainLayout>
</template>
