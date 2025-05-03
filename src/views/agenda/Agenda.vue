<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import AgendaHero from './sections/AgendaHero.vue';
import AgendaList from './sections/AgendaList.vue';
import BeritaList from '../berita/sections/BeritaList.vue';
import CTASection from '@/components/sections/CTASection.vue';
import { onMounted, ref } from 'vue';
import { usePostStore } from '@/stores/post';
import { useAgendaStore } from '@/stores/agenda';

const postStore = usePostStore();
const agendaStore = useAgendaStore();
const isLoading = ref(true);

onMounted(async () => {
  try {
    await Promise.all([
      postStore.fetchPosts(),
      agendaStore.fetchAgendas()
    ]);
  } catch (error) {
    console.error('Error loading data:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <MainLayout>
    <AgendaHero :agenda="agendaStore.agendas?.slice(0, 1)" :is-loading="isLoading" />
    <AgendaList :agenda="agendaStore.agendas" :is-loading="isLoading" />
    <BeritaList :posts="postStore.posts" :loading="isLoading" />
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
