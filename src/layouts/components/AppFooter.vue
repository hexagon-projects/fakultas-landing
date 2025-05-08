<template>
  <div class="p-4 md:p-6 lg:p-6 w-full">
    <footer
      :class="[
        'w-full text-white p-6 mx-auto rounded-[16px] shadow-lg relative overflow-hidden bg-colorPrimary'
      ]"
    >
      <!-- Background Logo - Always on right -->
      <div class="absolute top-0 right-0 h-full opacity-50 pointer-events-none">
        <img
          :src="LogoOutline"
          alt="Logo Outline Unpas"
          loading="lazy"
          class="h-full w-auto object-contain object-right"
        />
      </div>

      <div class="max-w-full mx-auto flex flex-col gap-6 relative z-10">
        <!-- Main Content -->
        <div class="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16">
          <!-- Social Media Section -->
          <div class="flex flex-col gap-4 w-full md:w-auto lg:w-[60%]">
            <img :src="Logo" alt="Logo Universitas Pasundan" class="w-16 h-16" loading="lazy" />
            <h3 class="text-white text-2xl md:text-3xl font-bold">Terhubung Dengan Kami</h3>
            <div class="flex gap-4">
              <a
                v-for="social in socialMedia"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-[#FEF251] transition-colors duration-200 text-lg"
              >
                <i :class="social.icon" />
              </a>
            </div>
          </div>

          <!-- Navigation Links -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full">
            <!-- Navigation -->
            <div class="flex flex-col gap-3">
              <p class="text-zinc-300 text-lg font-bold">Navigasi</p>
              <nav class="flex flex-col gap-2">
                <a
                  v-for="link in navigationLinks.slice(0, 7)"
                  :key="link.path"
                  :href="link.path"
                  class="text-zinc-300 text-sm hover:text-white transition-colors duration-200"
                >
                  {{ link.label }}
                </a>
              </nav>
            </div>

            <!-- Legal -->
            <div class="flex flex-col gap-3">
              <!-- <p class="text-zinc-300 text-lg font-bold">Legal</p> -->
              <div class="mt-[23px]"></div>
              <nav class="flex flex-col gap-2">
                <a
                  v-for="link in navigationLinks.slice(7, 15)"
                  :key="link.path"
                  :href="link.path"
                  class="text-zinc-300 text-sm hover:text-white transition-colors duration-200"
                >
                  {{ link.label }}
                </a>
              </nav>
            </div>

            <!-- Location -->
            <div class="flex flex-col gap-3">
              <p class="text-zinc-300 text-lg font-bold">Lokasi</p>
              <div class="flex flex-col gap-2">
                <div
                  v-for="campus in campuses.slice(0, 1)"
                  :key="campus.name"
                  class="flex flex-col"
                >
                  <p class="text-zinc-300 text-sm">{{ campus.address }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="w-full p-3 bg-[#FEF251] rounded-2xl text-center mt-4">
          <p class="text-[#1A1A1A] text-sm md:text-md font-medium">
            © {{ new Date().getFullYear() }} Unpas Copyright and rights reserved
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/assets/logo.webp'
import '@fortawesome/fontawesome-free/css/all.min.css'
import LogoOutline from '@/assets/logo-outline1.png'

// Social media data
const socialMedia = [
  { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://x.com/univ_pasundan' },
  {
    name: 'Instagram',
    icon: 'fab fa-instagram',
    url: 'https://www.instagram.com/pmbunpas',
  },
  {
    name: 'Facebook',
    icon: 'fab fa-facebook',
    url: 'https://www.facebook.com/universitaspasundan',
  },
  { name: 'TikTok', icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@univ_pasundan' },
  {
    name: 'YouTube',
    icon: 'fab fa-youtube',
    url: 'https://www.youtube.com/@UniversitasPasundanOfficial',
  },
]

const navigationLinks = [
  { path: '/', label: 'Beranda' },
  { path: '/tentang-fakultas', label: 'Tentang' },
  { path: '/prodi', label: 'Prodi' },
  { path: '/prestasi', label: 'Prestasi' },
  { path: '/kegiatan', label: 'Kegiatan' },
  { path: '/fasilitas', label: 'Fasilitas' },
  { path: '/tenaga-pengajar', label: 'Tenaga Pengajar' },
  { path: '/riset-dan-inovasi', label: 'Penelitian & Inovasi' },
  { path: '/testimoni', label: 'Testimoni' },
  { path: '/kerjasama', label: 'Kerjasama & Mitra' },
  { path: '/berita', label: 'Berita' },
  { path: '/agenda', label: 'Agenda' },
  { path: '/Faq', label: 'Faq & Bantuan' },
  { path: '/kontak', label: 'Kontak' },
]

const campuses = [
  { name: 'Kampus I', address: 'Jl. Lengkong Besar No.68' },
  { name: 'Kampus II', address: 'Jl. Tamansari No.6-8' },
  { name: 'Kampus IV', address: 'Jl. Dr. Setiabudhi No.193' },
  { name: 'Kampus V', address: 'Jl. Sumatera No.41' },
]
</script>

<style scoped>
/* Ensure the logo doesn't overlap content on small screens */
@media (max-width: 640px) {
  .absolute {
    width: 60%;
    opacity: 0.3;
  }
}
</style>
