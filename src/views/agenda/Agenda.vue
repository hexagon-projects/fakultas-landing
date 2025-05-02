<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import AgendaHero from './sections/AgendaHero.vue';
import AgendaList from './sections/AgendaList.vue';
import BeritaList from '../berita/sections/BeritaList.vue';
import CTASection from '@/components/sections/CTASection.vue';
import { onMounted } from 'vue';
import { usePostStore } from '@/stores/post';
import { useAgendaStore } from '@/stores/agenda';

const postStore = usePostStore();
const agendaStore = useAgendaStore();

onMounted(async () => {
  await postStore.fetchPosts()
  await agendaStore.fetchAgendas()
});
</script>

<template>
  <MainLayout>
    <AgendaHero :agenda="agendaStore.agendas?.slice(0, 1)" />
    <AgendaList :agenda="agendaStore.agendas" />
    <BeritaList :posts="postStore.posts" />
    <CTASection />
  </MainLayout>
</template>
