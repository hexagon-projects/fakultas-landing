<script setup lang="ts">
import CTASection from '@/components/sections/CTASection.vue';
import AgendaDetailHero from './sections/AgendaDetailHero.vue';
import AgendaDetailMenu from './sections/AgendaDetailMenu.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { useAgendaStore } from '@/stores/agenda';
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/post';

const route = useRoute();
const agendaStore = useAgendaStore();
const postStore = usePostStore();
const isLoading = ref(true);

const updateTitle = () => {
  if (agendaStore.currentAgenda?.title) {
    document.title = `${agendaStore.currentAgenda.title} - ${import.meta.env.VITE_APP_NAME}`;
  }
};

onMounted(async () => {
  try {
    const slug = route.params.slug as string;
    await Promise.all([
      agendaStore.fetchAgendaBySlug(slug),
      agendaStore.fetchAgendas(),
      postStore.fetchPosts()
    ]);
    updateTitle();
  } catch (error) {
    console.error('Error loading data:', error);
  } finally {
    isLoading.value = false;
  }
});

watch(() => agendaStore.currentAgenda, updateTitle);
</script>

<template>
  <MainLayout>
    <template v-if="isLoading">
      <AgendaDetailHero :is-loading="true" />
      <AgendaDetailMenu :is-loading="true" />
    </template>
    <template v-else>
      <AgendaDetailHero v-if="agendaStore.currentAgenda" :agenda="agendaStore.currentAgenda" />
      <AgendaDetailMenu v-if="agendaStore.currentAgenda" :agenda="agendaStore.currentAgenda"
        :agendas="agendaStore.agendas" :posts="postStore.posts?.slice(0, 3)" />
    </template>
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
