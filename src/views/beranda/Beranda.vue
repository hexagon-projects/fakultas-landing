<script setup lang="ts">
import Prestasi from '@/components/prestasi.vue'
import Button from '@/components/Button.vue'
import KenapaHarusFakultas from '@/components/KenapaHarusFakultas.vue'
import Mitra from '@/components/MitraSection.vue'
import Testimonial from '@/components/Testimonial.vue'
import Title from '@/components/Title.vue'
import Kegiatan from '@/components/Kegiatan.vue'
import ScrollTransition from '@/components/ScrollTransition.vue'
import { computed, onMounted, ref } from 'vue'
import { berandaStore } from '@/stores'
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue'
import ExpandableGallery from '@/components/insipra-ui/ExpandableGallery.vue'
import { formatDate, getImageUrl } from '@/core/helpers/helper'

const fasilitasImages = computed(() => {
  return berandaStore.fasilitasData.map((item) => getImageUrl(item.image))
})

const imageBaseUrl = import.meta.env.VITE_IMAGES_URL

onMounted(async () => {
  await berandaStore.getInitialData()
})
</script>
<template>
  <!-- Hero Section -->
  <ScrollTransition>
    <div class="mt-0 lg:mt-32">
      <div
        class="w-full rounded-b-[40px] lg:rounded-[32px] lg:py-40 py-60 lg:px-32 md:px-20 px-10 text-center lg:text-left bg-cover relative"
        style="
          background-image:
            linear-gradient(270deg, rgba(0, 0, 0, 0.375) 50%, rgba(0, 0, 0, 0.75) 100%),
            url('/src/assets/images/hero.jpg');
        "
      >
        <div class="lg:w-3/4 w-full grid gap-5 justify-center items-start">
          <h1 class="md:text-5xl text-3xl font-semibold text-white">
            Selamat Datang di
            <span class="text-colorPrimary">{{ berandaStore.fakultasData.name }}</span>
          </h1>
          <p class="text-white mt-3 md:w-full lg:w-3/4">
            {{ berandaStore.fakultasData.tagline }}
          </p>
          <div class="flex mt-3 gap-5 justify-center items-center lg:justify-start">
            <!-- <Button borderName="border border-white">Daftar Sekarang</Button>
            <Button className="btn-outline-light">Hubungi Admin</Button> -->
            <InteractiveHoverButton text="Daftar Sekarang"></InteractiveHoverButton>
            <InteractiveHoverButton
              text="Hubungi Admin"
              bg-color="bg-none"
            ></InteractiveHoverButton>
          </div>
        </div>

        <div
          class="absolute bottom-6 right-6 bg-white rounded-xl p-6 shadow-lg max-w-sm hidden lg:block"
        >
          <div class="flex text-amber-400 mb-2">
            <svg
              v-for="star in 5"
              :key="star"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <p class="text-gray-600 text-sm">
            Fakultas kami telah meraih Akreditasi A BAN-PT, mencerminkan standar pendidikan tinggi
            dan kualitas pengajaran terbaik.
          </p>
        </div>
      </div>
    </div>
  </ScrollTransition>

  <!-- Tentang Fakultas -->
  <ScrollTransition type="slide-left" :distance="50">
    <div class="flex lg:mt-48 mt-32 lg:gap-20 gap-5 items-center flex-col-reverse lg:flex-row">
      <div class="w-[90%] lg:w-1/2">
        <div>
          <div class="flex gap-5 items-center">
            <h5 class="text-xl hidden lg:block">
              <span class="text-colorPrimary">Tentang</span> {{ berandaStore.fakultasData.name }}
            </h5>
            <hr class="w-1/5 border-t-2 border-colorPrimary hidden lg:block" />
          </div>
          <Title class="mt-5">{{ berandaStore.fakultasData.title1 }}</Title>
          <p
            class="md:mt-7 mt-3 text-sm lg:text-base"
            v-html="berandaStore.fakultasData.description1"
          ></p>
        </div>
        <div class="flex gap-5 mt-10">
          <!-- <Button>Daftar Sekarang</Button>
          <Button className="btn-outline-primary">Selengkapnya</Button> -->
          <InteractiveHoverButton text="Daftar Sekarang"></InteractiveHoverButton>
          <InteractiveHoverButton
            text="Selengkapnya"
            bg-color="bg-none"
            border-color="border-colorPrimary"
            text-color="text-colorPrimary"
            bg-hover="bg-colorPrimary"
            text-hover="text-white"
          ></InteractiveHoverButton>
          <!-- <Button className="btn-outline-primary">Selengkapnya</Button> -->
        </div>
      </div>
      <div class="w-[90%] lg:w-1/2">
        <div
          class="relative mx-auto w-full lg:w-8/12 h-[600px] bg-no-repeat bg-cover rounded-[32px] overflow-hidden"
          style="background-image: url('/src/assets/images/dummy.jpg')"
        >
          <div
            class="absolute bottom-0 left-0 w-full h-3/4 z-10"
            style="
              background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0)
              );
              backdrop-filter: blur(15px);
              -webkit-backdrop-filter: blur(15px);
              mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
              -webkit-mask-image: linear-gradient(
                to top,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0) 100%
              );
            "
          ></div>

          <div class="relative z-20 flex flex-col gap-2 justify-end h-full text-white py-10 px-10">
            <h6 class="text-xl">Dekan Fakultas Hukum</h6>
            <h6 class="text-xl font-bold">Prof. Dr. Anthon F Susanto, S.H., M.Hum.</h6>
          </div>
        </div>
      </div>
    </div>
  </ScrollTransition>

  <!-- Sub Tentang fakultas -->
  <ScrollTransition>
    <div class="flex lg:mt-48 mt-32 lg:gap-20 gap-5 lg:px-[0%] px-[5%] flex-col lg:flex-row">
      <div class="lg:w-1/2 w-full">
        <Title>{{ berandaStore.fakultasData.title2 }}</Title>
      </div>
      <div class="lg:w-1/2 w-full">
        <p
          class="font-medium text-sm md:text-base"
          v-html="berandaStore.fakultasData.description2"
        ></p>

        <!-- <Button class="mt-10">Selengkapnya</Button> -->
        <InteractiveHoverButton text="Selengkapnya" class="mt-10"></InteractiveHoverButton>
      </div>
    </div>

    <div class="lg:mt-20 mt-10 lg:px-[0%] px-[5%] rounded-[32px]">
      <img
        :src="`${imageBaseUrl}${berandaStore.fakultasData.image2}`"
        alt=""
        class="rounded-[32px] lg:w-3/4 mx-auto max-h-[600px]"
      />
    </div>
  </ScrollTransition>

  <!-- Kenapa Harus Memilih -->
  <ScrollTransition>
    <KenapaHarusFakultas />
  </ScrollTransition>

  <!-- inovasi -->
  <ScrollTransition>
    <div
      class="lg:mt-48 mt-32 flex md:gap-20 gap-5 flex-col lg:flex-row justify-center items-center"
    >
      <div class="lg:w-1/2 w-[90%]">
        <div class="w-full h-80 bg-gray-200"></div>
      </div>
      <div class="lg:w-1/2 w-[90%] text-black">
        <h6 class="font-semibold md:text-lg">Inovasi</h6>
        <Title class="mt-5">Penelitian Unggulan dan Publikasi Terbaru</Title>
        <p class="mt-5">
          Fakultas kami berkomitmen untuk menghasilkan penelitian yang berdampak. Temukan
          karya-karya inovatif yang dihasilkan oleh para akademisi kami.
        </p>
        <div class="flex gap-5 mt-5 flex-col md:flex-row">
          <div class="md:w-1/2 w-full">
            <h3 class="text-xl font-semibold">Penelitian Terkini</h3>
            <p>Kami bangga dengan penelitian yang diakui secara internasional.</p>
          </div>
          <div class="md:w-1/2 w-full">
            <h3 class="text-xl font-semibold">Publikasi Kami</h3>
            <p>
              Jurnal kami diterbitkan secara berkala dengan kontribusi dari berbagai disiplin ilmu.
            </p>
          </div>
        </div>
        <div class="flex gap-10 mt-10">
          <!-- <Button>Selengkapnya</Button> -->
          <InteractiveHoverButton text="Selengkapnya"></InteractiveHoverButton>
        </div>
      </div>
    </div>
  </ScrollTransition>

  <!-- Mitra -->
  <ScrollTransition>
    <Mitra />
  </ScrollTransition>

  <!-- Prestasi -->
  <ScrollTransition>
    <div class="lg:mt-48 mt-32 flex relative flex-col lg:flex-row gap-10 lg:gap-0">
      <div class="w-[90%] lg:w-1/2 mx-auto lg:sticky top-40 z-10 h-fit">
        <Title>Prestasi</Title>
        <p class="text-gray-500 mt-5 text-sm md:text-base">
          Mahasiswa Universitas Pasundan terus mengukir prestasi membanggakan di berbagai bidang
          baik di tingkat nasional maupun internasional.
        </p>
        <!-- <Button class="mt-5">Selengkapnya</Button> -->
        <InteractiveHoverButton text="Selengkapnya" class="mt-5"></InteractiveHoverButton>
      </div>
      <div class="lg:w-1/2 w-full">
        <Prestasi />
      </div>
    </div>
  </ScrollTransition>

  <!-- Kegiatan Mahasiswa -->
  <ScrollTransition>
    <div class="lg:mt-48 mt-32 lg:px-0 px-[5%]">
      <Kegiatan />
    </div>
  </ScrollTransition>

  <!-- Agenda -->
  <ScrollTransition>
    <div class="lg:mt-48 mt-32 lg:px-[0%] px-[5%]">
      <div class="text-center lg:w-1/2 w-full mx-auto">
        <Title>Agenda</Title>
        <p class="text-gray-500 mt-5">Dapatkan informasi lebih lanjut tentang acara kami.</p>
        <div class="flex gap-5 justify-center flex-wrap mt-5">
          <Button
            className="text-black rounded-full"
            borderName="border border-colorPrimary"
            padding="py-2 px-4"
            >View All</Button
          >
          <Button className="" padding="py-2 px-4">Category One</Button>
        </div>
      </div>
      <div class="lg:w-1/2 w-full grid mt-10 mx-auto gap-10">
        <template v-for="data in berandaStore.agendaData" :key="item">
          <div class="flex bg-[#FAFAFA80] rounded-[32px] p-5 gap-5 flex-col md:flex-row">
            <img
              :src="getImageUrl(data.image)"
              alt=""
              class="rounded-[32px] md:w-40 w-full h-40 bg-gray-200 object-cover"
            />
            <div class="flex flex-col justify-center grow">
              <h2 class="md:text-3xl text-2xl font-semibold">{{ data.title }}</h2>
              <h6 class="text-sm md:text-base">
                <span class="">{{ formatDate(data.created_at) }}</span> •
                <span class="">{{ data.location }}</span>
              </h6>
              <p class="mt-3 text-sm md:text-base" v-html="data.description"></p>
            </div>
            <div
              class="w-fit flex flex-col md:justify-center md:items-center justify-start items-start"
            >
              <!-- <Button
              className="text-black rounded-full"
              borderName="border border-colorPrimary"
              padding="py-2 px-4"
              >Save My Spot</Button
            > -->
              <InteractiveHoverButton
                text="Save My Spot"
                bg-color="bg-none"
                border-color="border-colorPrimary"
                text-color="text-black"
                bg-hover="bg-colorPrimary"
                text-hover="text-white"
                padding="py-2 px-6"
              ></InteractiveHoverButton>
            </div>
          </div>
        </template>
      </div>
    </div>
  </ScrollTransition>

  <!-- Galeri Fasilitas -->
  <ScrollTransition>
    <div class="lg:mt-48 mt-32 px-[5%] lg:px-0">
      <div class="text-center lg:w-1/2 w-full mx-auto">
        <Title>Galeri Fasilitas</Title>
        <p class="text-gray-500 mt-5">
          Fakultas Hukum Unpas memiliki berbagai fasilitas yang mendukung proses belajar mengajar.
        </p>
      </div>
      <div
        class="w-full mt-10 gap-2 hidden md:flex h-[400px]"
        v-if="berandaStore.fasilitasData.length > 0"
      >
        <div class="w-1/5 flex justify-center items-center">
          <img
            v-if="berandaStore.fasilitasData[0]?.image"
            onerror="this.style.display='none'"
            :src="getImageUrl(berandaStore.fasilitasData[0].image)"
            class="w-full h-1/2 bg-gray-200 rounded-[20px] object-cover"
          />
          <div v-else class="w-full h-1/2 bg-gray-200 rounded-[20px]"></div>
        </div>

        <div class="w-1/5 flex flex-col gap-2 justify-center items-center py-5">
          <img
            v-if="berandaStore.fasilitasData[1]?.image"
            onerror="this.style.display='none'"
            :src="getImageUrl(berandaStore.fasilitasData[1].image)"
            class="w-full h-1/2 bg-gray-200 rounded-[20px] object-cover"
          />
          <div v-else class="w-full h-1/2 bg-gray-200 rounded-[20px]"></div>
          <img
            v-if="berandaStore.fasilitasData[2]?.image"
            onerror="this.style.display='none'"
            :src="getImageUrl(berandaStore.fasilitasData[2].image)"
            class="w-full h-1/2 bg-gray-200 rounded-[20px] object-cover"
          />
          <div v-else class="w-full h-1/2 bg-gray-200 rounded-[20px]"></div>
        </div>

        <div class="w-1/5 flex justify-center items-center">
          <img
            v-if="berandaStore.fasilitasData[3]?.image"
            onerror="this.style.display='none'"
            :src="getImageUrl(berandaStore.fasilitasData[3].image)"
            class="w-full h-full bg-gray-200 rounded-[20px] object-cover"
          />
          <div v-else class="w-full h-full bg-gray-200 rounded-[20px]"></div>
        </div>

        <div class="w-1/5 flex flex-col gap-2 justify-center items-center py-5">
          <img
            v-if="berandaStore.fasilitasData[4]?.image"
            onerror="this.style.display='none'"
            :src="getImageUrl(berandaStore.fasilitasData[4].image)"
            class="w-full h-full bg-gray-200 rounded-[20px] object-cover"
          />
          <div v-else class="w-full h-1/2 bg-gray-200 rounded-[20px]"></div>
          <img
            v-if="berandaStore.fasilitasData[5]?.image"
            onerror="this.style.display='none'"
            :src="getImageUrl(berandaStore.fasilitasData[5].image)"
            class="w-full h-1/2 bg-gray-200 rounded-[20px] object-cover"
          />
          <div v-else class="w-full h-1/2 bg-gray-200 rounded-[20px]"></div>
        </div>

        <div class="w-1/5 flex justify-center items-center">
          <img
            v-if="berandaStore.fasilitasData[6]?.image"
            onerror="this.style.display='none'"
            :src="getImageUrl(berandaStore.fasilitasData[6].image)"
            class="w-full h-1/2 bg-gray-200 rounded-[20px] object-cover"
          />
          <div v-else class="w-full h-1/2 bg-gray-200 rounded-[20px]"></div>
        </div>
      </div>

      <ExpandableGallery :images="fasilitasImages" class="mt-5 md:hidden" />
    </div>
  </ScrollTransition>

  <!-- Testimoni -->
  <ScrollTransition>
    <Testimonial />
  </ScrollTransition>

  <!-- Berita Terbaru -->
  <ScrollTransition>
    <div class="lg:mt-48 mt-32 lg:px-[0%] px-[5%]">
      <div class="flex justify-between lg:items-end flex-col lg:flex-row">
        <div class="grid gap-5">
          <h6
            class="md:px-6 md:py-2 px-4 py-1 border-2 border-colorPrimary rounded-full w-fit text-colorPrimary font-semibold text-sm md:text-base"
          >
            Latest Insight
          </h6>
          <Title>Berita Seputar <span class="text-colorPrimary">Fakultas Hukum</span></Title>
        </div>
        <!-- <Button className="btn-primary" class="w-fit mt-5 lg:mt-0">Selengkapnya</Button> -->
        <InteractiveHoverButton
          text="Selengkapnya"
          class="w-fit mt-5 lg:mt-0"
        ></InteractiveHoverButton>
      </div>

      <!-- Card Berita container -->
      <div
        class="w-full mt-10 flex flex-col lg:flex-row gap-10 lg:px-20 justify-center items-center"
      >
        <div
          v-for="data in berandaStore.beritaData"
          class="p-5 bg-white rounded-[32px] flex flex-col gap-5 h-full cursor-pointer transition hover:scale-105"
        >
          <img
            :src="getImageUrl(data.image)"
            alt=""
            class="rounded-[32px] w-full md:h-64 h-48 bg-gray-200 object-cover"
          />
          <h6
            class="text-sm font-semibold px-6 py-2 bg-[#F5F2FF] rounded-full w-fit mt text-colorPrimary"
          >
            {{ data.title }}
          </h6>
          <h1 class="md:text-xl text-lg font-semibold" v-html="data.resume"></h1>
          <hr />
          <h6 class="text-gray-500 text-sm md:text-base">
            <span>{{ formatDate(data.created_at) }}</span> | <span>4 min read</span>
          </h6>
        </div>
      </div>
    </div>
  </ScrollTransition>
</template>
<style></style>
