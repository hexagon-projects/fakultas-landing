<script setup lang="ts">
import AcaraSection from '@/views/berita/sections/BeritaAcara.vue';
import BeritaListSection from '@/views/berita/sections/BeritaList.vue';
import HeroSection from '@/views/berita/sections/BeritaHero.vue';
import CTASection from '@/components/sections/CTASection.vue';
import MainLayout from '@/layouts/MainLayout.vue';

import { computed, onMounted, ref } from 'vue';
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

const posts = computed(() => postStore.posts);
const agenda = computed(() => agendaStore.agendas);
const error = computed(() => postStore.error);
</script>

<template>
  <MainLayout>
    <HeroSection :berita="posts" :is-loading="isLoading" />
    <BeritaListSection :posts="posts" :loading="isLoading" :error="error" />
    <AcaraSection :acara="agenda?.slice(0, 3)" :is-loading="isLoading" />
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
