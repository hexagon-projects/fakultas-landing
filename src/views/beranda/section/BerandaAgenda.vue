<script setup lang="ts">
import Button from '@/components/Button.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Agenda } from '@/core/types/agenda';
import SectionLayout from '@/layouts/SectionLayout.vue';
import AgendaList from '@/views/agenda/sections/AgendaList.vue';

defineProps<{
  agenda: Agenda[];
  isLoading?: boolean;
}>();
</script>

<template>
  <SectionLayout>
    <div class="text-center lg:w-1/2 w-full mx-auto">
      <TitleSection text="Agenda" class="text-center"></TitleSection>
      <p class="text-gray-500 mt-5">Dapatkan informasi lebih lanjut tentang acara kami.</p>
      <div class="flex gap-5 justify-center flex-wrap mt-5">
        <Button className="text-black rounded-full" borderName="border border-colorPrimary" padding="py-2 px-4">View
          All</Button>
        <Button className="" padding="py-2 px-4">Category One</Button>
      </div>
    </div>
    <AgendaList :agenda="agenda" />
  </SectionLayout>
</template>
