<script setup lang="ts">
import CTASection from '@/components/sections/CTASection.vue';
import AgendaDetailHero from './sections/AgendaDetailHero.vue';
import AgendaDetailMenu from './sections/AgendaDetailMenu.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { useAgendaStore } from '@/stores/agenda';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/post';

const route = useRoute();
const agendaStore = useAgendaStore();
const postStore = usePostStore();

onMounted(async () => {
  const slug = route.params.slug as string;
  await agendaStore.fetchAgendaBySlug(slug);
  await agendaStore.fetchAgendas();
  await postStore.fetchPosts();
});
</script>

<template>
  <MainLayout>
    <AgendaDetailHero v-if="agendaStore.currentAgenda" :agenda="agendaStore.currentAgenda" />
    <AgendaDetailMenu v-if="agendaStore.currentAgenda" :agenda="agendaStore.currentAgenda"
      :agendas="agendaStore.agendas" :posts="postStore.posts?.slice(0, 3)" />
    <CTASection />
  </MainLayout>
</template>
