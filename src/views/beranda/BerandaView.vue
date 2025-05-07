<script setup lang="ts">
import { onMounted } from 'vue'
import { berandaStore } from '@/stores'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import ProdiDetailKegiatan from '../prodiDetail/sections/ProdiDetailKegiatan.vue'
import MitraSection from '@/components/sections/MitraSection.vue'
import { usePartnerStore } from '@/stores/partner'
import TextSection from '@/components/TextSection.vue'
import BerandaSambutan from './section/BerandaSambutan.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useSliderStore } from '@/stores/slider'
import { useFakultasStore } from '@/stores/fakultas'
import { useTestimoniStore } from '@/stores/testimoni'
import BerandaTentang from './section/BerandaTentang.vue'
import ProdiAlasan from '../prodi/sections/ProdiAlasan.vue'
import BerandaInovasi from './section/BerandaInovasi.vue'
import BerandaAgenda from './section/BerandaAgenda.vue'
import BerandaBerita from './section/BerandaBerita.vue'
import BerandaFasilitas from './section/BerandaFasilitas.vue'
import HomeSlider from '@/components/HomeSlider.vue'
import ProdiDetailPrestasi from '../prodiDetail/sections/ProdiDetailPrestasi.vue'
import CTASection from '@/components/sections/CTASection.vue'

const partnerStore = usePartnerStore();
const sliderStore = useSliderStore();
const fakultasStore = useFakultasStore();
const testimoniStore = useTestimoniStore();

onMounted(async () => {
  await berandaStore.getInitialData()
  await partnerStore.fetchPartnersHome()
  await sliderStore.fetchSlider()
  await fakultasStore.fetchFakultas()
  await testimoniStore.fetchTestimoni()
})
</script>

<template>
  <MainLayout>
    <div class="img-container">
      <HomeSlider :sliders="sliderStore.sliders" />
    </div>
    <div class="relative">
      <div class="absolute bottom-6 right-6 bg-white rounded-xl p-6 shadow-lg max-w-sm hidden lg:block z-10">
        <div class="flex text-amber-400 mb-2 gap-2">
          <svg v-for="star in 5" :key="star" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
            fill="currentColor">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>

        <TextSection>Fakultas kami telah meraih Akreditasi A BAN-PT, mencerminkan standar pendidikan tinggi dan
          kualitas pengajaran terbaik.</TextSection>
      </div>
    </div>

    <BerandaSambutan :fakultas="fakultasStore.fakultas" :dosen="berandaStore.dosenData" />
    <BerandaTentang :fakultas="fakultasStore.fakultas" />
    <ProdiAlasan :unggulan="berandaStore.ungulanData" :fakultas="fakultasStore.fakultas" />
    <BerandaInovasi />
    <MitraSection :partners="partnerStore.partners" />
    <ProdiDetailPrestasi :prestasi="berandaStore.prestasiData" />
    <ProdiDetailKegiatan :organisasi="berandaStore.organisasiData" />
    <BerandaAgenda :agenda="berandaStore.agendaData" />
    <BerandaFasilitas :fasilitas="berandaStore.fasilitasData" />
    <TestimonialsSection :testimoni="testimoniStore.testimoni" />
    <BerandaBerita :fakultas="fakultasStore.fakultas" :post="berandaStore.beritaData" />
    <CTASection />
  </MainLayout>
</template>

<style scoped>
#prestasi-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

#prestasi-scroll::-webkit-scrollbar {
  display: none;
}

.hoverAnimation:hover {
  transform: scale(1.02) translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
