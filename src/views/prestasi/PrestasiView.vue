<script setup lang="ts">
import { berandaStore } from '@/stores'
import { onMounted } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import PrestasiList from './sections/PrestasiList.vue'
import PrestasiHero from './sections/PrestasiHero.vue'
import CTASection from '@/components/sections/CTASection.vue'

onMounted(async () => {
  await berandaStore.getDataPrestasi()
})
</script>
<template>
  <MainLayout>
    <PrestasiHero />
    <PrestasiList :prestasi="berandaStore.prestasiData"/>
    <CTASection />
  </MainLayout>
</template>
