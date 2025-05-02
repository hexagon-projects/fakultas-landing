<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import KegiatanHero from './sections/KegiatanHero.vue';
import ProdiDetailKegiatan from '../prodiDetail/sections/ProdiDetailKegiatan.vue';
import { onMounted } from 'vue';
import { useOrganisasiStore } from '@/stores/organisasi';

const organisasiStore = useOrganisasiStore();

onMounted(async () => {
  await organisasiStore.fetchOrganisasi();
});
</script>

<template>
  <MainLayout>
    <KegiatanHero />
    <ProdiDetailKegiatan :organisasi="organisasiStore.organizations"/>
  </MainLayout>
</template>
