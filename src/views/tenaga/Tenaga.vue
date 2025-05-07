<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import TenagaHero from './sections/TenagaHero.vue';
import ProdiDetailDosen from '../prodiDetail/sections/ProdiDetailDosen.vue';
import { useTeamStore } from '@/stores/team';
import { onMounted } from 'vue';
import TenagaAlasan from './sections/TenagaAlasan.vue';
import CTASection from '@/components/sections/CTASection.vue';

const teamStore = useTeamStore();

onMounted(async () => {
  await Promise.all([
    teamStore.fetchTeam()
  ]);
});
</script>

<template>
  <MainLayout>
    <TenagaHero />
    <TenagaAlasan />
    <ProdiDetailDosen :team="teamStore.teams"/>
    <CTASection />
  </MainLayout>
</template>
