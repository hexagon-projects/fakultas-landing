<script setup lang="ts">
import { berandaStore } from '@/stores'
import { onMounted } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import RisetHero from './sections/RisetHero.vue'
import ImageSection from '../prodi/sections/ImageSection.vue'
import RisetInovasi from './sections/RisetInovasi.vue'
import RisetJurnal from './sections/RisetJurnal.vue'
import CTASection from '@/components/sections/CTASection.vue'

onMounted(async () => {
  await berandaStore.getDataPortofolio()
  await berandaStore.getDataJurnal()
})
</script>
<template>
  <MainLayout>
    <RisetHero />
    <ImageSection />
    <RisetInovasi :inovasi="berandaStore.portofolioData"/>
    <RisetJurnal :jurnal="berandaStore.jurnalData"/>
    <CTASection />
  </MainLayout>
</template>
<style scoped>
.hoverAnimation:hover {
  transform: translateY(-5px);
  border: 1px solid #e5e7eb;
}
</style>
