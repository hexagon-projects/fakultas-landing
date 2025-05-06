<script setup lang="ts">
import { berandaStore } from '@/stores'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import FasilitasHero from './sections/FasilitasHero.vue'
import FasilitasList from './sections/FasilitasList.vue'

const router = useRouter()

onMounted(async () => {
  if (router.currentRoute.value.name == 'beranda') {
    await berandaStore.getDataFasilitas(true)
  } else {
    await berandaStore.getDataFasilitas()
  }
})
</script>
<template>
  <MainLayout>
    <FasilitasHero />
    <FasilitasList :fasilitas="berandaStore.fasilitasData"/>
  </MainLayout>
</template>
