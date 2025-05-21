<script lang="ts" setup>
import TextSection from '@/components/TextSection.vue'

import type { Departement } from '@/core/types/departement'
import type { Faculty } from '@/core/types/fakultas'
import SectionLayout from '@/layouts/SectionLayout.vue'
import { useRouter } from 'vue-router'
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue'
import TitleSection from '@/components/TitleSection.vue'

defineProps<{
  prodiData: Departement[]
  fakultas: Faculty | null
}>()

const router = useRouter()

const baseUrl = import.meta.env.VITE_APP_IMG_URL

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return ''
  return `${baseUrl}/${imagePath}`
}

const navigateToDetail = (slug: string) => {
  router.push({ name: 'prodiDetail', params: { slug } })
}
</script>

<template>
  <SectionLayout>
    <div class="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 lg:gap-6">
      <div class="w-full md:w-1/2">
        <TitleSection :text="'Program Studi Unggulan: Mencetak Generasi Pemimpin Masa Depan'"></TitleSection>
      </div>
      <div class="w-full md:w-1/2">
        <TextSection>Kami menawarkan berbagai program studi yang dirancang
          untuk memenuhi kebutuhan
          industri dan perkembangan ilmu pengetahuan. Setiap program dilengkapi dengan kurikulum yang relevan
          dan pengajaran dari dosen berpengalaman. Bergabunglah dengan kami untuk memulai perjalanan akademis
          Anda.</TextSection>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
      <div v-for="(prodi, index) in prodiData" :key="index"
        class="w-full h-[298px] bg-gradient-to-b from-colorPrimary/0 to-colorPrimary/50 shadow-lg overflow-hidden p-6 flex flex-col justify-end relative rounded-[16px]">
        <!-- Gambar -->
        <img :src="getImageUrl(prodi.image1)" alt="Gambar Program Studi"
          class="absolute top-0 left-0 w-full h-full object-cover z-0" />

        <!-- Overlay (untuk efek gelap di bagian bawah) -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>

        <!-- Label dan Heading -->
        <div class="flex flex-col gap-2 z-20 relative">
          <!-- Label Akreditasi -->
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-2xl shadow-sm w-fit">
            <div class="w-3 h-3 relative">
              <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:anim="http://www.w3.org/2000/anim" anim="" anim:transform-origin="50% 50%" anim:duration="1"
                anim:ease="ease-in-out">
                <g id="Interface Essentials" clip-path="url(#clip0_3159_31142)">
                  <path id="Vector"
                    d="M6.60952 0.924591L7.97237 3.67602C8.00337 3.74585 8.05213 3.80635 8.11379 3.85146C8.17545 3.89658 8.24786 3.92475 8.3238 3.93316L11.3324 4.37888C11.4195 4.39007 11.5016 4.42582 11.5692 4.48195C11.6367 4.53808 11.6869 4.61227 11.7139 4.69586C11.7408 4.77945 11.7435 4.86898 11.7214 4.954C11.6994 5.03903 11.6537 5.11603 11.5895 5.17602L9.42095 7.32745C9.3656 7.37916 9.32406 7.44388 9.30011 7.51574C9.27616 7.5876 9.27055 7.6643 9.2838 7.73888L9.80666 10.7646C9.8218 10.8515 9.81223 10.941 9.77904 11.0227C9.74585 11.1045 9.69038 11.1753 9.61893 11.2271C9.54748 11.2789 9.46293 11.3096 9.37489 11.3158C9.28686 11.3219 9.19887 11.3032 9.12095 11.2617L6.41237 9.8303C6.34302 9.79626 6.26678 9.77855 6.18952 9.77855C6.11225 9.77855 6.03602 9.79626 5.96666 9.8303L3.25809 11.2617C3.18016 11.3032 3.09218 11.3219 3.00414 11.3158C2.9161 11.3096 2.83155 11.2789 2.7601 11.2271C2.68865 11.1753 2.63318 11.1045 2.59999 11.0227C2.5668 10.941 2.55723 10.8515 2.57237 10.7646L3.09523 7.70459C3.10848 7.63002 3.10288 7.55331 3.07892 7.48145C3.05497 7.4096 3.01343 7.34487 2.95809 7.29316L0.763802 5.17602C0.698884 5.11439 0.653231 5.03525 0.632371 4.9482C0.611512 4.86115 0.616342 4.76992 0.646277 4.68556C0.676211 4.6012 0.729966 4.52733 0.801028 4.4729C0.872091 4.41846 0.957413 4.3858 1.04666 4.37888L4.05523 3.93316C4.13117 3.92475 4.20358 3.89658 4.26524 3.85146C4.3269 3.80635 4.37566 3.74585 4.40666 3.67602L5.76952 0.924591C5.80663 0.844455 5.86589 0.77661 5.94031 0.729062C6.01473 0.681515 6.1012 0.65625 6.18952 0.65625C6.27783 0.65625 6.3643 0.681515 6.43872 0.729062C6.51314 0.77661 6.5724 0.844455 6.60952 0.924591V0.924591Z"
                    stroke="#52005C" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
                <defs>
                  <clipPath id="clip0_3159_31142">
                    <rect width="12" height="12" fill="white" transform="translate(0.189453 -0.0078125)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span class="text-[10px] font-normal text-gray-800">
              {{ prodi.akreditasi || 'Belum Ada' }}
            </span>
          </div>

          <!-- Judul -->
          <h3 class="text-xl font-bold text-white leading-snug">
            {{ prodi.name }}
          </h3>
        </div>

        <!-- Tombol -->
        <div class="mt-4 flex gap-4 z-20 w-full justify-between">
          <div class="w-1/2">
            <InteractiveHoverButton :class="'w-full'" :padding="'py-3 px-6'" :text="'Daftar'"></InteractiveHoverButton>
          </div>

          <div class="w-1/2">
            <InteractiveHoverButton :class="'w-full'" :padding="'py-3 px-6'" :text="'Selengkapnya'"
              :bg-color="'transparent'" @click="navigateToDetail(prodi.slug)"></InteractiveHoverButton>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
