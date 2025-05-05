<script setup lang="ts">
import Button from '@/components/Button.vue'
import Title from '@/components/Title.vue'
import { getImageUrl } from '@/core/helpers/helper'
import { berandaStore } from '@/stores'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ScrollTransition from '@/components/ScrollTransition.vue'
import TitleMain from '@/components/TitleMain.vue'

const router = useRouter()

onMounted(async () => {
  if (router.currentRoute.value.name == 'beranda') {
    await berandaStore.getDataFasilitas(true)
  } else {
    await berandaStore.getDataFasilitas()
  }
})
</script>
<template>
  <!-- Hero -->
  <ScrollTransition>
    <div
      class="lg:mt-48 mt-10 flex lg:gap-20 gap-5 lg:px-0 px-[5%] items-center flex-col lg:flex-row text-center lg:text-left"
    >
      <div class="lg:w-1/2 w-full">
        <TitleMain text="Fasilitas Unggulan"></TitleMain>
      </div>
      <div class="lg:w-1/2 w-full">
        <p class="text-sm md:text-base">
          Fakultas kami menyediakan fasilitas modern yang mendukung proses belajar mengajar. Dari
          laboratorium canggih hingga perpustakaan lengkap, semua dirancang untuk meningkatkan
          pengalaman akademik Anda.
        </p>
      </div>
    </div>
  </ScrollTransition>

  <ScrollTransition>
    <div class="lg:mt-20 mt-10 lg:px-[0%] px-[5%] rounded-[32px]">
      <img
        src="/src/assets/images/fasilitas.jpg"
        alt=""
        class="rounded-[32px] lg:w-3/4 mx-auto max-h-[600px]"
      />
    </div>
  </ScrollTransition>

  <!-- Fasilitas -->
  <ScrollTransition>
    <div class="lg:mt-48 mt-32 px-[5%] lg:px-0">
      <div class="grid gap-5 text-center w-full lg:w-1/2 mx-auto">
        <TitleMain text="Fasilitas"></TitleMain>
        <p class="text-sm md:text-base">
          Scenes that unfold like a movie, with each image telling a cinematic story.
        </p>
        <div class="flex gap-5 justify-center flex-wrap">
          <Button className="btn-primary" padding="px-4 py-2">All</Button>
          <Button className="btn-neutral" padding="px-4 py-2">UKM</Button>
        </div>
      </div>
      <div class="mt-10 lg:px-20 md:px-10">
        <div class="lg:gap-10 md:gap-5 hidden md:grid">
          <!-- First Row - Two equal width columns -->
          <div class="flex w-full lg:gap-10 md:gap-5">
            <!-- Left Image -->
            <div class="w-1/2 h-40 rounded-[20px] bg-gray-300 relative overflow-hidden">
              <img
                v-if="berandaStore.fasilitasData[0]?.image"
                :src="getImageUrl(berandaStore.fasilitasData[0].image)"
                class="absolute inset-0 w-full h-full object-cover"
                alt="Facility image"
              />
            </div>

            <!-- Right Image -->
            <div class="w-1/2 h-40 rounded-[20px] bg-gray-300 relative overflow-hidden">
              <img
                v-if="berandaStore.fasilitasData[1]?.image"
                :src="getImageUrl(berandaStore.fasilitasData[1].image)"
                class="absolute inset-0 w-full h-full object-cover"
                alt="Facility image"
              />
            </div>
          </div>

          <!-- Second Row - Grid layout -->
          <div class="grid grid-cols-3 lg:gap-10 md:gap-5">
            <!-- Text Content Cell -->
            <div class="w-full h-40 flex flex-col justify-center gap-3">
              <h2 class="text-2xl font-bold">Laboratorium</h2>
              <p class="text-gray-500">
                Cinematic grids create a sense of movement and drama by organizing images like
                scenes from a film.
              </p>
            </div>

            <!-- Small Image Cell -->
            <div class="w-full h-40 rounded-[20px] bg-gray-300 relative overflow-hidden">
              <img
                v-if="berandaStore.fasilitasData[2]?.image"
                :src="getImageUrl(berandaStore.fasilitasData[2].image)"
                class="absolute inset-0 w-full h-full object-cover"
                alt="Facility image"
              />
            </div>

            <!-- Tall Image Cell (spanning 2 rows) -->
            <div
              class="row-span-2 w-full h-full rounded-[20px] bg-gray-300 relative overflow-hidden"
            >
              <img
                v-if="berandaStore.fasilitasData[3]?.image"
                :src="getImageUrl(berandaStore.fasilitasData[3].image)"
                class="absolute inset-0 w-full h-full object-cover"
                alt="Facility image"
              />
            </div>

            <!-- Bottom Row Images -->
            <div class="w-full h-40 rounded-[20px] bg-gray-300 relative overflow-hidden">
              <img
                v-if="berandaStore.fasilitasData[4]?.image"
                :src="getImageUrl(berandaStore.fasilitasData[4].image)"
                class="absolute inset-0 w-full h-full object-cover"
                alt="Facility image"
              />
            </div>

            <div class="w-full h-40 rounded-[20px] bg-gray-300 relative overflow-hidden">
              <img
                v-if="berandaStore.fasilitasData[5]?.image"
                :src="getImageUrl(berandaStore.fasilitasData[5].image)"
                class="absolute inset-0 w-full h-full object-cover"
                alt="Facility image"
              />
            </div>
          </div>
        </div>

        <div class="w-full mt-10 grid grid-cols-1 gap-5 md:hidden">
          <div
            class="w-full h-64 bg-gray-200 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition"
          >
            <h6 class="text-white font-semibold">Image Title</h6>
            <p class="text-white/40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div
            class="w-full h-64 bg-gray-200 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition"
          >
            <h6 class="text-white font-semibold">Image Title</h6>
            <p class="text-white/40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div
            class="w-full h-64 bg-gray-200 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition"
          >
            <h6 class="text-white font-semibold">Image Title</h6>
            <p class="text-white/40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div
            class="w-full h-64 bg-gray-200 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition"
          >
            <h6 class="text-white font-semibold">Image Title</h6>
            <p class="text-white/40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div
            class="w-full h-64 bg-gray-200 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition"
          >
            <h6 class="text-white font-semibold">Image Title</h6>
            <p class="text-white/40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div
            class="w-full h-64 bg-gray-200 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition"
          >
            <h6 class="text-white font-semibold">Image Title</h6>
            <p class="text-white/40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </ScrollTransition>
</template>
