<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';
import LokasiCard from '../components/LokasiCard.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';

import Teknik from "@/assets/gedung/teknik.webp"
import Hukum from "@/assets/gedung/hukum.webp"
import Seni from "@/assets/gedung/ilmu seni.webp"
import Sosial from "@/assets/gedung/ilmu sosial.webp"
import Guru from "@/assets/gedung/kedokteran.webp"
import Ekonomi from "@/assets/gedung/ekonomi.webp"
import Dokter from "@/assets/gedung/kedokteran.webp"

const locations = [
  {
    id: 1,
    name: "Kampus I",
    address: "Jl. Lengkong Besar No. 68, Lengkong, Kota Bandung, Jawa Barat 40261",
    tagline: "Inspiring with Integrity",
    image: Teknik
  },
  {
    id: 2,
    name: "Kampus II",
    address: "Jl. Tamansari No. 6-8, Tamansari, Kota Bandung, Jawa Barat",
    tagline: "Life Isn't Perfect But Your Music Can Be",
    image: Hukum
  },
  {
    id: 3,
    name: "Kampus IV",
    address: "Jl. Dr. Setiabudi No. 193, Sukasari, Kota Bandung, Jawa Barat 40154",
    tagline: "FISIP Unpas Excellent",
    image: Seni
  },
  {
    id: 4,
    name: "Kampus V",
    address: "Jl. Sumatera No. 41, Bandung",
    tagline: "Mendidik dengan Hati, Menginspirasi dengan Ilmu",
    image: Sosial
  }
];
</script>

<template>
  <SectionLayout>
    <div class="flex flex-col gap-4 md:gap-5 lg:gap-6">
      <TextSection>Lokasi</TextSection>
      <TitleSection :text="'Lokasi'"></TitleSection>
      <TextSection>Temukan kampus kami dengan mudah di peta.</TextSection>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <LokasiCard v-for="location in locations" :key="location.id" :location="location" />
    </div>
  </SectionLayout>
</template>
