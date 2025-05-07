<script setup lang="ts">
import Button from '@/components/Button.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Agenda } from '@/core/types/agenda';
import SectionLayout from '@/layouts/SectionLayout.vue';
import AgendaList from '@/views/agenda/sections/AgendaList.vue';
import { ref, computed } from 'vue';

const props = defineProps<{
  agenda: Agenda[];
  isLoading?: boolean;
}>();

const selectedCategory = ref<string>('All');

// Get unique categories from agenda data
const categories = computed(() => {
  const uniqueCategories = new Set(props.agenda.map(item => item.category));
  return ['All', ...Array.from(uniqueCategories)];
});

// Filter agenda based on selected category
const filteredAgenda = computed(() => {
  if (selectedCategory.value === 'All') {
    return props.agenda;
  }
  return props.agenda.filter(item => item.category === selectedCategory.value);
});
</script>

<template>
  <SectionLayout>
    <div class="text-center lg:w-1/2 w-full mx-auto">
      <TitleSection text="Agenda" class="text-center"></TitleSection>
      <TextSection class="text-gray-500 mt-5">Dapatkan informasi lebih lanjut tentang acara kami.</TextSection>
      <div class="flex gap-5 justify-center flex-wrap mt-5">
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
    <AgendaList :agenda="filteredAgenda" :isLoading="isLoading" />
  </SectionLayout>
</template>