<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import AgendaHero from './sections/AgendaHero.vue';
import AgendaList from './sections/AgendaList.vue';
import BeritaList from '../berita/sections/BeritaList.vue';
import CTASection from '@/components/sections/CTASection.vue';
import { onMounted, ref, computed } from 'vue';
import { usePostStore } from '@/stores/post';
import { useAgendaStore } from '@/stores/agenda';
import Button from '@/components/Button.vue';

const postStore = usePostStore();
const agendaStore = useAgendaStore();
const isLoading = ref(true);
const selectedCategory = ref<string>('Semua');

// Get unique categories from agenda data
const categories = computed(() => {
  if (!agendaStore.agendas) return ['Semua'];
  const uniqueCategories = new Set(agendaStore.agendas.map(item => item.category));
  return ['Semua', ...Array.from(uniqueCategories)];
});

// Filter agenda based on selected category
const filteredAgenda = computed(() => {
  if (!agendaStore.agendas) return [];
  if (selectedCategory.value === 'Semua') {
    return agendaStore.agendas;
  }
  return agendaStore.agendas.filter(item => item.category === selectedCategory.value);
});

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

    <div class="text-center lg:w-full w-full px-[20px] md:px-[60px] lg:px-[120px]">
      <div class="flex gap-5 justify-start flex-wrap mt-5">
        <Button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :className="selectedCategory === category ? 'bg-colorPrimary text-white' : 'text-black'"
          :borderName="selectedCategory === category ? '' : 'border border-colorPrimary'"
          padding="py-2 px-4"
          class="rounded-full"
        >
          {{ category }}
        </Button>
      </div>
    </div>
    
    <AgendaList :agenda="filteredAgenda" :is-loading="isLoading" />
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