<script setup lang="ts">
import HeroSection from '@/views/kontak/sections/KontakHero.vue';
import LokasiSection from '@/views/kontak/sections/KontakLokasi.vue';
import KontakForm from './sections/KontakForm.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { useIdentityStore } from '@/stores/identity';
import { onMounted } from 'vue';

const identityStore = useIdentityStore();

onMounted(async () => {
  await identityStore.fetchIdentity();
});
</script>

<template>
  <MainLayout>
    <HeroSection :identity="identityStore.identity"/>
    <LokasiSection />
    <KontakForm />
  </MainLayout>
</template>
