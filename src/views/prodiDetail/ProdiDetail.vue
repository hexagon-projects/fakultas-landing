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
import { onMounted, ref } from 'vue';
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

onMounted(async () => {
  const slug = route.params.slug as string;
  if (slug) {
    await departementStore.fetchDepartementBySlug(slug);
    const departementId = departementStore.currentDepartement?.id;
    if (departementId) {
      await partnerStore.fetchPartnerbyId(departementId); // id
      await prestasiStore.fetchPrestasibyId(departementId); // id
      await fasilitasStore.fetchFasilitasbyId(departementId); // id
      await teamStore.fetchTeambyId(departementId); // id
      await organisasiStore.fetchOrganisasibyId(departementId) // id
      await testimoniStore.fetchTestimonibyId(departementId) // id
      await prospekStore.fetchProspekbyId(departementId) //id
      await kurikulumStore.fetchKurikulumbyId(departementId) // id
      await sliderStore.fetchSliderbyId(departementId) // id
    }
    isLoading.value = false;
  }
  await agendaStore.fetchAgendas();
  await postStore.fetchPosts()
});

</script>

<template>
  <MainLayout>
    <template v-if="isLoading">
      <div class="w-full h-[90vh] flex justify-center items-center text-center py-10">Memuat data...</div>
    </template>
    <template v-else-if="departementStore.currentDepartement">
      <HeroSection :prodi-detail="departementStore.currentDepartement" />
      <AboutSection :prodi-detail="departementStore.currentDepartement" />
      <ProdiDetailPoster :slider="sliderStore.currentSlider" />
      <StatistikSection :prodi-data="departementStore.currentDepartement" />
      <ProdiDetailProspek :prodi-detail="departementStore.currentDepartement" :prospek="prospekStore.currentProspek" />
      <ProdiDetailKurikulum :kurikulum="kurikulumStore.currentKurikulum" />
      <ProdiDetailMitra :partners="partnerStore.currentPartner" />
      <ProdiDetailPrestasi :prestasi="prestasiStore.currentPrestasi" />
      <GaleriSection :fasilitas="fasilitasStore.currentFasilitas" />
      <DosenSection :team="teamStore.currentTeams" />
      <ProdiDetailKegiatan :organisasi="organisasiStore.currentOrganizations" />
      <ProdiDetailAgenda :agenda="agendaStore.agendas" />
      <PanduanSection /> <!-- Statis -->
      <TestimonialsSection :testimoni="testimoniStore.currentTestimoni" />
      <ProdiDetailBerita :prodi-detail="departementStore.currentDepartement" :berita="postStore.posts?.slice(0, 3)" />
      <CTASection />
    </template>
  </MainLayout>
</template>
