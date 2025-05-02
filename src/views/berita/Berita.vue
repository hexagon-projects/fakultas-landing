<script setup lang="ts">
import AcaraSection from '@/views/berita/sections/BeritaAcara.vue';
import BeritaListSection from '@/views/berita/sections/BeritaList.vue';
import HeroSection from '@/views/berita/sections/BeritaHero.vue';
import CTASection from '@/components/sections/CTASection.vue';
import MainLayout from '@/layouts/MainLayout.vue';

import { computed, onMounted } from 'vue';
import { usePostStore } from '@/stores/post';
import { useAgendaStore } from '@/stores/agenda';

const postStore = usePostStore();
const agendaStore = useAgendaStore();

onMounted(async () => {
  await postStore.fetchPosts();
  await agendaStore.fetchAgendas();
});

const posts = computed(() => postStore.posts);
const agenda = computed(() => agendaStore.agendas)
const loading = computed(() => postStore.loading);
const error = computed(() => postStore.error);
</script>

<template>
  <MainLayout>
    <HeroSection :berita="posts" />
    <BeritaListSection :posts="posts" :loading="loading" :error="error" />
    <AcaraSection :acara="agenda?.slice(0, 3)" />
    <CTASection />
  </MainLayout>
</template>
