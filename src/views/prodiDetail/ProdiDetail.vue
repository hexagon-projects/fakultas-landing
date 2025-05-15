<script setup lang="ts">
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import AboutSection from '@/views/prodiDetail/sections/ProdiDetailAbout.vue';
import DosenSection from '@/views/prodiDetail/sections/ProdiDetailDosen.vue';
import GaleriSection from '@/views/prodiDetail/sections/ProdiDetailGaleri.vue';
import HeroSection from '@/views/prodiDetail/sections/ProdiDetailHero.vue';
import PanduanSection from '@/views/prodiDetail/sections/ProdiDetailPanduan.vue';
import StatistikSection from '@/views/prodiDetail/sections/ProdiDetailStatistik.vue';
import ProdiDetailProspek from './sections/ProdiDetailProspek.vue';
import ProdiDetailPrestasi from './sections/ProdiDetailPrestasi.vue';
import ProdiDetailMitra from '../../components/sections/MitraSection.vue';
import ProdiDetailBerita from './sections/ProdiDetailBerita.vue';
import ProdiDetailAgenda from './sections/ProdiDetailAgenda.vue';
import ProdiDetailKurikulum from './sections/ProdiDetailKurikulum.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import ProdiDetailKegiatan from './sections/ProdiDetailKegiatan.vue';
import ProdiDetailPoster from './sections/ProdiDetailPoster.vue';
import CTASection from '@/components/sections/CTASection.vue';
import { useRoute } from 'vue-router';
import { useDepartementStore } from '@/stores/departement';
import { onMounted, ref, watch } from 'vue';
import { useAgendaStore } from '@/stores/agenda';
import { usePartnerStore } from '@/stores/partner';
import { usePrestasiStore } from '@/stores/prestasi';
import { useFasilitasStore } from '@/stores/fasilitas';
import { useTeamStore } from '@/stores/team';
import { useOrganisasiStore } from '@/stores/organisasi';
import { useTestimoniStore } from '@/stores/testimoni';
import { usePostStore } from '@/stores/post';
import { useProspekStore } from '@/stores/prospek';
import { useKurikulumStore } from '@/stores/kurikulum';
import { useSliderStore } from '@/stores/slider';

const route = useRoute();
const departementStore = useDepartementStore();
const agendaStore = useAgendaStore();
const partnerStore = usePartnerStore();
const prestasiStore = usePrestasiStore();
const fasilitasStore = useFasilitasStore();
const teamStore = useTeamStore();
const organisasiStore = useOrganisasiStore();
const testimoniStore = useTestimoniStore();
const postStore = usePostStore();
const prospekStore = useProspekStore();
const kurikulumStore = useKurikulumStore();
const sliderStore = useSliderStore();

const isLoading = ref(true);

const updateTitle = () => {
  if (departementStore.currentDepartement?.name) {
    document.title = `${departementStore.currentDepartement.name} - ${import.meta.env.VITE_APP_NAME}`;
  }
};

onMounted(async () => {
  try {
    const slug = route.params.slug as string;
    if (slug) {
      await departementStore.fetchDepartementBySlug(slug);
      updateTitle();
      const departementId = departementStore.currentDepartement?.id;
      if (departementId) {
        await Promise.all([
          partnerStore.fetchPartnerbyId(departementId),
          prestasiStore.fetchPrestasibyId(departementId),
          // fasilitasStore.fetchFasilitasbyId(departementId),
          teamStore.fetchTeambyId(departementId),
          organisasiStore.fetchOrganisasibyId(departementId),
          testimoniStore.fetchTestimonibyId(departementId),
          prospekStore.fetchProspekbyId(departementId),
          kurikulumStore.fetchKurikulumbyId(departementId),
          sliderStore.fetchSliderbyId(departementId)
        ]);
      }
      await Promise.all([
        fasilitasStore.fetchFasilitas(),
        agendaStore.fetchAgendas(),
        postStore.fetchPosts()
      ]);
    }
  } catch (error) {
    console.error('Error loading data:', error);
  } finally {
    isLoading.value = false;
  }
});

watch(() => departementStore.currentDepartement, updateTitle);
</script>

<template>
  <MainLayout>
    <template v-if="isLoading">
      <HeroSection :is-loading="true" :prodi-detail="null" />
      <AboutSection :is-loading="true" :prodi-detail="null" />
    </template>

    <template v-else-if="departementStore.currentDepartement">
      <HeroSection :prodi-detail="departementStore.currentDepartement" :is-loading="false" />
      <AboutSection :prodi-detail="departementStore.currentDepartement" :is-loading="false" />
      <ProdiDetailPoster :slider="sliderStore.currentSlider" :is-loading="false" />
      <StatistikSection :prodi="departementStore.currentDepartement" :is-loading="false" />
      <ProdiDetailProspek
        :prodi-detail="departementStore.currentDepartement"
        :prospek="prospekStore.currentProspek"
        :is-loading="false"
      />
      <ProdiDetailKurikulum :kurikulum="kurikulumStore.currentKurikulum" :is-loading="false" />
      <ProdiDetailMitra :partners="partnerStore.currentPartner" :is-loading="false" />
      <ProdiDetailPrestasi :prestasi="prestasiStore.currentPrestasi" :is-loading="false" />
      <GaleriSection :fasilitas="fasilitasStore.fasilitas" :is-loading="false" />
      <DosenSection :team="teamStore.currentTeams" :is-loading="false" />
      <ProdiDetailKegiatan :organisasi="organisasiStore.currentOrganizations" :is-loading="false" />
      <ProdiDetailAgenda :agenda="agendaStore.agendas" :is-loading="false" />
      <PanduanSection :is-loading="false" />
      <TestimonialsSection :testimoni="testimoniStore.currentTestimoni" :is-loading="false" />
      <ProdiDetailBerita
        :prodi-detail="departementStore.currentDepartement"
        :berita="postStore.posts?.slice(0, 3)"
        :is-loading="false"
      />
      <CTASection :is-loading="false" />
    </template>

    <template v-else>
      <div class="flex justify-center items-center min-h-screen">
        <div class="text-center">
          <p class="text-lg font-medium">Program studi tidak ditemukan</p>
        </div>
      </div>
    </template>
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
