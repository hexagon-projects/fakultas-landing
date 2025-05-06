<script setup lang="ts">
import { berandaStore, kerjasamaStore } from '@/stores'
import { onMounted } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import KerjasamaHero from './sections/KerjasamaHero.vue'
import KerjasamaMitra from './sections/KerjasamaList.vue'
import MitraSection from '@/components/sections/MitraSection.vue'
import KerjasamaProyek from './sections/KerjasamaProyek.vue'

onMounted(() => {
  kerjasamaStore.getInitialData()
})
</script>

<template>
  <MainLayout>
    <KerjasamaHero />
    <KerjasamaProyek />
    <KerjasamaMitra :partner="berandaStore.mitraData"/>
    <MitraSection :partners="berandaStore.mitraData"/>
  </MainLayout>
</template>
