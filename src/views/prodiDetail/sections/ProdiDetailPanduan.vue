<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';
import PanduanCard from '../components/PanduanCard.vue';
import TitleSection from '@/components/TitleSection.vue';
import TextSection from '@/components/TextSection.vue';

const panduanData = [
  {
    id: 1,
    title: "Informasi Beasiswa dan Bantuan Keuangan",
    description: "Panduan lengkap untuk mendapatkan beasiswa dan bantuan keuangan",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
  },
  {
    id: 2,
    title: "Proses Pendaftaran Online",
    description: "Langkah demi langkah pendaftaran melalui sistem online",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
  },
  {
    id: 3,
    title: "Persyaratan Dokumen",
    description: "Daftar dokumen yang perlu dipersiapkan untuk pendaftaran",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "https://cdn-icons-png.flaticon.com/512/2991/2991112.png"
  }
];
</script>

<template>
  <SectionLayout>
    <div class="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 lg:gap-6">
      <div class="w-full lg:max-w-3xl flex flex-col justify-center items-center gap-2 lg:gap-4 text-center">
        <p class="text-base text-fakultas font-semibold">Pendaftaran</p>
        <TitleSection :text="'Panduan Pendaftaran dan Seleksi Program Studi'"></TitleSection>
        <TextSection>Proses pendaftaran program studi kami dirancang untuk
          memberikan kemudahan bagi calon mahasiswa. Pastikan Anda memenuhi semua persyaratan yang ditetapkan
          untuk meningkatkan peluang diterima.</TextSection>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
      <PanduanCard
        v-for="panduan in panduanData"
        :key="panduan.id"
        :title="panduan.title"
        :image="panduan.image"
        :icon="panduan.icon"
      />
    </div>
  </SectionLayout>
</template>
