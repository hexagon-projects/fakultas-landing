<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue'
//   import Title from "./Title.vue";
import Text from '@/components/Text.vue'
import Logo from '@/assets/images/logo.webp'
import LogoOutline from '@/assets/images/logo-outline1.png'
import Title from '@/components/Title.vue'
//   import FakultasService from "../fetching/fakultas";

// Lazy load icons
//   const FaYoutube = defineAsyncComponent(() => import("react-icons/fa").then(m => m.FaYoutube));
//   const FaFacebookSquare = defineAsyncComponent(() => import("react-icons/fa").then(m => m.FaFacebookSquare));
//   const FaSquareXTwitter = defineAsyncComponent(() => import("react-icons/fa6").then(m => m.FaSquareXTwitter));
//   const RiInstagramFill = defineAsyncComponent(() => import("react-icons/ri").then(m => m.RiInstagramFill));
//   const AiFillTikTok = defineAsyncComponent(() => import("react-icons/ai").then(m => m.AiFillTikTok));

// State
const fakultas = ref([
  { id: 1, name: 'Fakultas Ekonomi dan Bisnis', slug: 'feb' },
  { id: 2, name: 'Fakultas Hukum', slug: 'fh' },
  { id: 3, name: 'Fakultas Ilmu Komunikasi', slug: 'fikom' },
  { id: 4, name: 'Fakultas Teknik', slug: 'ft' },
  { id: 5, name: 'Fakultas Ilmu Sosial dan Ilmu Politik', slug: 'fisip' },
  { id: 6, name: 'Fakultas Kesehatan', slug: 'fk' },
  { id: 7, name: 'Fakultas Pertanian', slug: 'fp' },
  { id: 8, name: 'Fakultas Psikologi', slug: 'fpsikologi' },
])
const navigasiLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Fakultas & Prodi', href: '/fakultas' },
  { label: 'Jalur & Jadwal', href: '/jalur' },
  { label: 'Fasilitas', href: '/fasilitas' },
  { label: 'Mahasiswa & Alumni', href: '/mahasiswa-dan-alumni' },
  { label: 'Prestasi', href: '/prestasi' },
  { label: 'Dukungan', href: '/dukungan' },
  { label: 'Artikel', href: '/artikel' },
  { label: 'Mitra', href: '/mitra' },
  { label: 'Testimoni', href: '/testimoni' },
  { label: 'FAQ & Bantuan', href: '/faq' },
  { label: 'Kontak', href: '/kontak' },
]

const lokasi = [
  { kampus: 'Kampus I', alamat: 'Jl. Lengkong Besar No.68' },
  { kampus: 'Kampus II', alamat: 'Jl. Tamansari No.6-8' },
  { kampus: 'Kampus IV', alamat: 'Jl. Dr. Setiabudhi No.193' },
  { kampus: 'Kampus V', alamat: 'Jl. Sumatera No.41' },
]
</script>
<template>
  <section
    class="bg-colorPrimary text-white p-4 md:p-6 lg:p-8 m-2 md:m-6 lg:m-6 mb-20 md:mb-20 lg:mb-6 rounded-xl md:rounded-2xl lg:rounded-4xl relative overflow-hidden"
  >
    <div class="absolute -top-0 left-25 md:left-[70%] w-full h-full opacity-50 object-cover">
      <img
        :src="LogoOutline"
        alt="Logo Outline Unpas"
        loading="lazy"
        class="h-[60vh] lg:h-[65vh] object-cover object-left"
      />
    </div>

    <div
      class="w-full flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 lg:gap-8 bg-cover bg-no-repeat overflow-hidden"
    >
      <div class="w-full md:w-fit space-y-4 text-white mb-4 md:mb-0">
        <img
          :src="Logo"
          alt="Logo Universitas Pasundan"
          class="w-14 h-14 md:w-16 md:h-16"
          loading="lazy"
        />
        <Title class="text-white lg:text-4xl">Terhubung Dengan Kami</Title>
        <div class="flex justify-start gap-3">
          <i class="pi pi-instagram text-3xl" style="color: white;"></i>
          <i class="pi pi-facebook text-3xl" style="color: white;"></i>
          <i class="pi pi-twitter text-3xl" style="color: white;"></i>
          <i class="pi pi-tiktok text-3xl" style="color: white;"></i>
          <i class="pi pi-youtube text-3xl" style="color: white;"></i>
        </div>
      </div>

      <div class="w-8/12 flex justify-between md:justify-around items-start gap-10">
        <div class="space-y-4">
          <Text sizeMobile="text-sm" :text="'Navigasi'" weight="font-semibold" color="text-white" />
          <div class="flex flex-col gap-4 items-start">
            <a
              v-for="(nav, idx) in navigasiLinks"
              :key="idx"
              :href="nav.href"
              class="text-xs hover:font-medium cursor-pointer"
            >
              {{ nav.label }}
            </a>
          </div>
        </div>

        <div class="space-y-4 hidden lg:block">
          <Text sizeMobile="text-sm" :text="'Fakultas'" weight="font-semibold" color="text-white" />
          <div class="flex flex-col gap-4 items-start">
            <a
              v-for="item in fakultas"
              :key="item.id"
              :href="`/fakultas/${item.slug}`"
              class="text-xs hover:font-medium max-w-[200px] cursor-pointer"
            >
              {{ item.name }}
            </a>
          </div>
        </div>

        <div class="justify-around md:flex-col gap-4 flex flex-col">
          <Text sizeMobile="text-sm" :text="'Lokasi'" weight="font-semibold" color="text-white" />
          <div
            v-for="(location, idx) in lokasi"
            :key="idx"
            class="flex flex-col justify-center items-start gap-2"
          >
            <a href="" class="text-xs hover:font-bold cursor-pointer">{{ location.kampus }}</a>
            <a href="" class="text-xs hover:font-bold cursor-pointer">{{ location.alamat }}</a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="text-black mt-8 w-full text-center py-4 bg-primary rounded-lg md:rounded-2xl lg:rounded-4xl"
    >
      <Text
        sizeMobile="text-xs md:text-xs lg:text-xs"
        :text="`© ${new Date().getFullYear()} Unpas Copyright and rights reserved`"
      />
    </div>
  </section>
</template>
