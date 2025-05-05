<script setup lang="ts">
import HeroSection from '@/views/kontak/sections/KontakHero.vue';
import LokasiSection from '@/views/kontak/sections/KontakLokasi.vue';
import KontakForm from './sections/KontakForm.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { useIdentityStore } from '@/stores/identity';
import { onMounted, ref } from 'vue';
import CTASection from '@/components/sections/CTASection.vue';

const identityStore = useIdentityStore();
const isLoading = ref(true);

onMounted(async () => {
  try {
    await identityStore.fetchIdentity();
  } catch (error) {
    console.error('Error loading identity:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <MainLayout>
    <HeroSection :identity="identityStore.identity" :is-loading="isLoading" />
    <LokasiSection :is-loading="isLoading" />
    <KontakForm :is-loading="isLoading" />
    <CTASection />
  </MainLayout>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
