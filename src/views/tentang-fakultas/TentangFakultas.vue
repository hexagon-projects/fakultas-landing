<script setup lang="ts">
import Timeline from '@/components/insipra-ui/Timeline.vue'
import { berandaStore, tentangStore } from '@/stores'
import { computed, onMounted } from 'vue'
import TitleSection from '@/components/TitleSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import { usePartnerStore } from '@/stores/partner'
import DosenCard from '../prodi/components/DosenCard.vue'
import { useTeamStore } from '@/stores/team'
import MainLayout from '@/layouts/MainLayout.vue'
import TentangHero from './sections/TentangHero.vue'
import TentangSejarah from './sections/TentangSejarah.vue'
import { useFakultasStore } from '@/stores/fakultas'
import TentangVisiMisi from './sections/TentangVisiMisi.vue'
import TentangStatistik from './sections/TentangStatistik.vue'
import MitraSection from '@/components/sections/MitraSection.vue'
import SectionLayout from '@/layouts/SectionLayout.vue'
import CTASection from '@/components/sections/CTASection.vue'
import SejarahImg from '@/assets/sejarah.png'

const partnerStore = usePartnerStore();
const teamStore = useTeamStore();
const fakultasStore = useFakultasStore();

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

const historyTimeline = computed(() => {
  return tentangStore.timelineData.map((item) => ({
    id: String(item.id),
    label: item.title,
    description: item.description,
    date: item.date,
  }));
});

onMounted(async () => {
  await tentangStore.getInitialData()
  await berandaStore.getDataTestimoni()
  await partnerStore.fetchPartnersHome()
  await teamStore.fetchTeam()
  await fakultasStore.fetchFakultas()
})
</script>
<template>
  <MainLayout>
    <TentangHero :fakultas="fakultasStore.fakultas"/>
    <SectionLayout>
      <div class="flex flex-col lg:flex-row md:justify-between relative">
        <div class="lg:w-[45%] w-full h-full lg:sticky lg:top-40">
          <img :src="getImageUrl(fakultasStore.fakultas?.image3 || SejarahImg)" alt="" class="w-full h-full lg:sticky lg:top-28 z-10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
        </div>
        <div class="lg:w-1/2 w-full mt-10 md:mt-20 lg:mt-0">
          <Timeline v-if="tentangStore.timelineData.length > 0" :items="historyTimeline" />
        </div>
      </div>
    </SectionLayout>

    <TentangSejarah :fakultas="fakultasStore.fakultas" />
    <TentangVisiMisi :fakultas="fakultasStore.fakultas" />
    <TentangStatistik v-if="fakultasStore.fakultas" :fakultas="fakultasStore.fakultas" />
    <MitraSection :partners="partnerStore.partners" />
    <SectionLayout>
      <div class="grid gap-2 lg:gap-5">
        <h6 class="font-bold text-2xl">Tim</h6>
        <TitleSection v-if="fakultasStore?.fakultas?.name"
          :text="`<span class='text-colorPrimary'>${fakultasStore?.fakultas?.name}</span> Unpas`" :html="true">
        </TitleSection>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mt-12 md:mt-16 lg:mt-20">
        <DosenCard v-for="dosen in teamStore.teams.slice(0,12)" :key="dosen.id" :name="dosen.name" :title="dosen.title"
          :image="getImageUrl(dosen.image)" :facebook="dosen.fb" :instagram="dosen.ig" :youtube="dosen.yt"
          :tiktok="dosen.tiktok" />
      </div>
    </SectionLayout>
    <TestimonialsSection :testimoni="berandaStore.testimoniData" :is-loading="false" />
    <CTASection />
  </MainLayout>
</template>
