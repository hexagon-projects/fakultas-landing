<script setup lang="ts">
import Prestasi from '@/components/prestasi.vue'
import Button from '@/components/Button.vue'
import KenapaHarusFakultas from '@/components/KenapaHarusFakultas.vue'
import Mitra from '@/components/MitraSection.vue'
import Testimonial from '@/components/Testimonial.vue'
import Kegiatan from '@/components/Kegiatan.vue'
import ScrollTransition from '@/components/ScrollTransition.vue'
import { computed, onMounted, ref } from 'vue'
import { berandaStore } from '@/stores'
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue'
import ExpandableGallery from '@/components/insipra-ui/ExpandableGallery.vue'
import { formatDate, getImageUrl } from '@/core/helpers/helper'
import TitleMain from '@/components/TitleMain.vue'
import TitleSection from '@/components/TitleSection.vue'

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
        class="w-full rounded-b-[40px] lg:rounded-[32px] lg:py-40 py-60 lg:px-32 md:px-20 px-10 text-center lg:text-left bg-cover relative img-box"
        style="
          background-image:
            linear-gradient(270deg, rgba(0, 0, 0, 0.375) 50%, rgba(0, 0, 0, 0.75) 100%),
            url('/src/assets/images/hero.jpg');
        "
      >
        <div class="lg:w-3/4 w-full grid gap-5 justify-center items-start">
          <TitleMain
            v-if="berandaStore.fakultasData.name"
            :text="`Selamat Datang di <span class='text-colorPrimary'>${berandaStore.fakultasData.name}</span>`"
            :html="true"
            class="text-white text-3xl lg:text-5xl font-bold"
          ></TitleMain>
          <!-- <h1 class="md:text-5xl text-3xl font-semibold text-white">
            Selamat Datang di
            <span class="text-colorPrimary">{{ berandaStore.fakultasData.name }}</span>
          </h1> -->
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
      </div>
    </div>
  </ScrollTransition>

  <div class="relative">
    <div
      class="absolute bottom-6 right-6 bg-white rounded-xl p-6 shadow-lg max-w-sm hidden lg:block z-10"
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
        Fakultas kami telah meraih Akreditasi A BAN-PT, mencerminkan standar pendidikan tinggi dan
        kualitas pengajaran terbaik.
      </p>
    </div>
  </div>

  <!-- Tentang Fakultas -->
  <div class="flex lg:mt-48 mt-32 lg:gap-20 gap-5 items-center flex-col-reverse lg:flex-row">
    <div class="w-[90%] lg:w-1/2">
      <ScrollTransition>
        <div>
          <div class="flex gap-5 items-center">
            <h5 class="text-xl hidden lg:block">
              <span class="text-colorPrimary">Tentang</span> {{ berandaStore.fakultasData.name }}
            </h5>
            <hr class="w-1/5 border-t-2 border-colorPrimary hidden lg:block" />
          </div>
          <TitleSection
            v-if="berandaStore.fakultasData.title1"
            :text="`${berandaStore.fakultasData.title1}`"
          ></TitleSection>
          <p
            class="md:mt-7 mt-3 text-sm lg:text-base"
            v-html="berandaStore.fakultasData.description1"
          ></p>
        </div>
      </ScrollTransition>
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
            -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
          "
        ></div>

        <div class="relative z-20 flex flex-col gap-2 justify-end h-full text-white py-10 px-10">
          <h6 class="text-xl">Dekan Fakultas Hukum</h6>
          <h6 class="text-xl font-bold">Prof. Dr. Anthon F Susanto, S.H., M.Hum.</h6>
        </div>
      </div>
    </div>
  </div>

  <!-- Sub Tentang fakultas -->
  <div class="flex lg:mt-48 mt-32 lg:gap-20 gap-5 lg:px-[0%] px-[5%] flex-col lg:flex-row">
    <div class="lg:w-1/2 w-full">
      <TitleSection
        v-if="berandaStore.fakultasData.title2"
        :text="`${berandaStore.fakultasData.title2}`"
      ></TitleSection>
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

  <!-- Kenapa Harus Memilih -->
  <KenapaHarusFakultas />

  <!-- inovasi -->
  <div class="lg:mt-48 mt-32 flex md:gap-20 gap-5 flex-col lg:flex-row justify-center items-center">
    <div class="lg:w-1/2 w-[90%]">
      <div class="w-full h-80 bg-gray-200"></div>
    </div>
    <div class="lg:w-1/2 w-[90%] text-black">
      <h6 class="font-semibold md:text-lg">Inovasi</h6>
      <TitleSection text="Penelitian Unggulan dan Publikasi Terbaru" class="mt-5"></TitleSection>
      <p class="mt-5">
        Fakultas kami berkomitmen untuk menghasilkan penelitian yang berdampak. Temukan karya-karya
        inovatif yang dihasilkan oleh para akademisi kami.
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

  <!-- Mitra -->
  <Mitra />

  <!-- Prestasi -->
  <div class="lg:mt-48 mt-32 flex relative flex-col lg:flex-row gap-10 lg:gap-0">
    <div class="w-[90%] lg:w-1/2 mx-auto lg:sticky top-40 z-10 h-fit">
      <TitleSection text="Prestasi"></TitleSection>
      <p class="text-gray-500 mt-5 text-sm md:text-base">
        Mahasiswa Universitas Pasundan terus mengukir prestasi membanggakan di berbagai bidang baik
        di tingkat nasional maupun internasional.
      </p>
      <!-- <Button class="mt-5">Selengkapnya</Button> -->
      <InteractiveHoverButton text="Selengkapnya" class="mt-5"></InteractiveHoverButton>
    </div>
    <div class="lg:w-1/2 w-full">
      <Prestasi />
    </div>
  </div>

  <!-- Kegiatan Mahasiswa -->
  <div class="lg:mt-48 mt-32 lg:px-0 px-[5%]">
    <Kegiatan />
  </div>

  <!-- Agenda -->
  <div class="lg:mt-48 mt-32 lg:px-[0%] px-[5%]">
    <div class="text-center lg:w-1/2 w-full mx-auto">
      <TitleSection text="Agenda" class="text-center"></TitleSection>
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
      <template v-for="(data, index) in berandaStore.agendaData" :key="item">
        <div
          class="flex bg-[#FAFAFA80] rounded-[32px] p-5 gap-5 flex-col md:flex-row transition-all duration-300 group cursor-pointer hover:shadow-lg hoverAnimation"
          :class="[`delay-${index % 9}`]"
        >
          <div class="rounded-[32px] md:w-40 w-full h-40 bg-gray-200 overflow-hidden">
            <img
              :src="getImageUrl(data.image)"
              alt=""
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div class="flex flex-col justify-center grow">
            <h2
              class="md:text-3xl text-2xl font-semibold transition-colors duration-300"
            >
              {{ data.title }}
            </h2>
            <h6
              class="text-sm md:text-base transition-colors duration-300 group-hover:text-gray-700"
            >
              <span>{{ formatDate(data.created_at) }}</span> •
              <span>{{ data.location }}</span>
            </h6>
            <p
              class="mt-3 text-sm md:text-base transition-colors duration-300 group-hover:text-gray-800"
              v-html="data.description"
            ></p>
          </div>
          <div
            class="w-fit flex flex-col md:justify-center md:items-center justify-start items-start"
          >
            <InteractiveHoverButton
              text="Save My Spot"
              bg-color="bg-none"
              border-color="border-colorPrimary"
              text-color="text-black"
              bg-hover="bg-colorPrimary"
              text-hover="text-white"
              padding="py-2 px-6"
              class="transition-all duration-300 group-hover:scale-105"
            ></InteractiveHoverButton>
          </div>
        </div>
      </template>
    </div>
  </div>

  <!-- Galeri Fasilitas -->
  <div class="lg:mt-48 mt-32 px-[5%] lg:px-0">
    <div class="text-center lg:w-1/2 w-full mx-auto">
      <TitleSection text="Galeri Fasilitas" class="text-center"></TitleSection>
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

  <!-- Testimoni -->
  <Testimonial />

  <!-- Berita Terbaru -->
  <div class="lg:mt-48 mt-32 lg:px-[0%] px-[5%]">
    <div class="flex justify-between lg:items-end flex-col lg:flex-row">
      <div class="grid gap-5">
        <h6
          class="md:px-6 md:py-2 px-4 py-1 border-2 border-colorPrimary rounded-full w-fit text-colorPrimary font-semibold text-sm md:text-base"
        >
          Latest Insight
        </h6>
        <TitleSection
          v-if="berandaStore.fakultasData.name"
          :text="`Seputar Berita <span class='text-colorPrimary'>${berandaStore.fakultasData.name}</span>`"
          :html="true"
          class="text-black"
        ></TitleSection>
      </div>
      <!-- <Button className="btn-primary" class="w-fit mt-5 lg:mt-0">Selengkapnya</Button> -->
      <InteractiveHoverButton
        text="Selengkapnya"
        class="w-fit mt-5 lg:mt-0"
      ></InteractiveHoverButton>
    </div>

    <!-- Card Berita container -->
    <div class="w-full mt-10 flex flex-col lg:flex-row gap-10 lg:px-20 justify-center items-center">
      <div
        v-for="(data, index) in berandaStore.beritaData"
        class="p-5 bg-white rounded-[32px] flex flex-col gap-5 h-full cursor-pointer transition-all duration-300 relative overflow-hidden group hoverAnimation"
        :class="[`delay-${index % 9}`]"
      >
        <div class="rounded-[32px] w-full md:h-64 h-48 bg-gray-200 overflow-hidden">
          <img
            :src="getImageUrl(data.image)"
            alt=""
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h6
          class="text-sm font-semibold px-6 py-2 bg-[#F5F2FF] rounded-full w-fit text-colorPrimary transition-colors duration-300"
        >
          {{ data.title }}
        </h6>
        <h1
          class="md:text-xl text-lg font-semibold transition-colors duration-300 group-hover:text-colorPrimary"
          v-html="data.resume"
        ></h1>
        <hr class="transition-colors duration-300 group-hover:border-colorPrimary" />
        <h6
          class="text-gray-500 text-sm md:text-base transition-colors duration-300 group-hover:text-gray-700"
        >
          <span>{{ formatDate(data.created_at) }}</span> | <span>4 min read</span>
        </h6>

        <!-- Optional subtle shadow effect -->
        <div
          class="absolute inset-0 rounded-[32px] shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        ></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hoverAnimation:hover {
  transform: scale(1.02) translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
