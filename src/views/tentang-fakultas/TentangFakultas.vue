<script setup lang="ts">
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue'
import Timeline from '@/components/insipra-ui/Timeline.vue'
import Mitra from '@/components/MitraSection.vue'
import Testimonial from '@/components/Testimonial.vue'
import Title from '@/components/Title.vue'
import NumberTicker from '@/components/ui/number-ticker/NumberTicker.vue'
import { berandaStore, tentangStore } from '@/stores'
import { onMounted } from 'vue'
import ScrollTransition from '@/components/ScrollTransition.vue'
import { getImageUrl } from '@/core/helpers/helper'
import TitleMain from '@/components/TitleMain.vue'
import TitleSection from '@/components/TitleSection.vue'

const data = [
  {
    id: '1',
    label: 'Sejarah Fakultas Hukum Unpas',
  },
  {
    id: '2',
    label: 'Perioderisasi',
  },
  {
    id: '3',
    label: 'Akreditasi',
  },
]

onMounted(() => {
  tentangStore.getInitialData()
})
</script>
<template>
  <!-- Hero Section -->
  <ScrollTransition>
    <div
      class="lg:mt-48 mt-10 px-[5%] lg:px-0 flex lg:gap-20 gap-5 lg:flex-row flex-col items-center"
    >
      <div class="text-center lg:w-1/2 w-full mx-auto">
        <TitleMain
          text="Sejarah, Visi, Misi, dan Pencapaian Fakultas Kami"
          class="text-center"
        ></TitleMain>
        <p class="mt-8 text-sm lg:text-base">
          Fakultas kami didirikan pada tahun 1990 dengan tujuan memberikan pendidikan berkualitas
          tinggi. Kami berkomitmen untuk menciptakan lingkungan belajar yang inovatif dan inklusif,
          serta menghasilkan lulusan yang siap bersaing di dunia profesional.
        </p>
      </div>
    </div>
  </ScrollTransition>

  <!-- Timeline -->
  <ScrollTransition>
    <div class="lg:mt-48 mt-32 flex flex-col lg:flex-row px-[5%] lg:px-0 relative">
      <div class="lg:w-1/2 w-full h-40 bg-gray-200 sticky top-40"></div>
      <div class="lg:w-1/2 w-full">
        <Timeline :items="data" />
      </div>
    </div>
  </ScrollTransition>

  <!-- Sejarah Fakultas -->
  <div class="lg:mt-48 mt-32 flex flex-col-reverse lg:flex-row px-[5%] lg:px-0 lg:gap-10">
    <div class="lg:w-1/2 w-full">
      <div>
        <TitleSection
          v-if="berandaStore.fakultasData.title2"
          class="mt-7"
          :text="`Sejarah ${berandaStore.fakultasData.title2}`"
        ></TitleSection>
        <p
          class="text-gray-500 mt-7 text-sm lg:text-base"
          v-html="berandaStore.fakultasData.description2"
        ></p>
        <div class="flex gap-5 lg:mt-10 mt-5">
          <!-- <Button>Daftar Sekarang</Button>
            <Button className="btn-outline-primary">Selengkapnya</Button> -->
          <InteractiveHoverButton text="Daftar Sekarang" />
          <InteractiveHoverButton
            text="Selengkapnya"
            bg-color="bg-transparent"
            textColor="text-colorPrimary"
            borderColor="border-colorPrimary"
            bgHover="bg-colorPrimary"
            textHover="text-white"
          />
        </div>
      </div>
    </div>
    <div class="lg:w-1/2 w-full">
      <div class="w-full h-80 bg-gray-200 rounded-[32px]">
        <img
          :src="berandaStore.fakultasData.image2"
          alt=""
          class="w-full h-full object-cover rounded-[32px]"
        />
      </div>
    </div>
  </div>

  <!-- Visi Misi Fakultas -->
  <div
    class="lg:mt-48 mt-32 flex flex-col-reverse lg:flex-row px-[5%] lg:px-0 lg:gap-10"
    v-if="berandaStore.fakultasData.title4 && berandaStore.fakultasData.description4"
  >
    <div class="lg:w-1/2 w-full">
      <div class="w-full h-full bg-gray-200"></div>
    </div>
    <div class="lg:w-1/2 w-full">
      <div>
        <TitleSection class="mt-7" :text="berandaStore.fakultasData.title4"></TitleSection>
        <p class="mt-5 text-sm lg:text-base" v-html="berandaStore.fakultasData.description4"></p>
        <!-- <h6 class="mt-5 font-semibold">Visi</h6>
                <p>“Menjadi fakultas hukum unggulan di tingkat nasional dan internasional yang berlandaskan nilai-nilai keilmuan, keislaman, dan kesundaan dalam mengembangkan ilmu hukum yang berkeadilan, berintegritas, dan responsif terhadap dinamika global.”</p>
                <h6 class="mt-5 font-semibold">Misi</h6>
                <p>“Menjadi fakultas hukum unggulan di tingkat nasional dan internasional yang berlandaskan nilai-nilai keilmuan, keislaman, dan kesundaan dalam mengembangkan ilmu hukum yang berkeadilan, berintegritas, dan responsif terhadap dinamika global.”</p> -->
        <div class="flex gap-5 lg:mt-10 mt-5">
          <!-- <Button>Daftar Sekarang</Button>
          <Button className="btn-outline-primary">Selengkapnya</Button> -->
          <InteractiveHoverButton text="Daftar Sekarang" />
          <InteractiveHoverButton
            text="Selengkapnya"
            bg-color="bg-transparent"
            textColor="text-colorPrimary"
            borderColor="border-colorPrimary"
            bgHover="bg-colorPrimary"
            textHover="text-white"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Statistik Fakultas -->
  <div class="flex flex-col gap-10 lg:mt-48 mt-32 px-[5%] lg:px-0">
    <div class="w-full">
      <div class="grid gap-5">
        <TitleSection text="Statistik Fakultas: Mengetahui Lebih Dalam Tentang Kami"></TitleSection>
        <p class="text-sm lg:text-base">
          Fakultas kami memiliki lebih dari 1.000 mahasiswa aktif yang terdaftar. Dengan dukungan
          100 dosen berpengalaman, kami menawarkan 10 program studi yang berkualitas. Kami
          berkomitmen untuk memberikan pendidikan terbaik dan mendukung pengembangan karir
          mahasiswa.
        </p>
      </div>
    </div>

    <div class="w-full">
      <div class="grid grid-cols-2 md:grid-cols-4 w-full gap-10">
        <div class="pl-5 border-l border-[#444444]">
          <div class="text-5xl font-semibold text-colorPrimary w-fit">
            <NumberTicker :value="Number(berandaStore.fakultasData.statistik1)" />+
          </div>
          <div class="text-black mt-2 font-semibold">Mahasiswa</div>
        </div>
        <div class="pl-5 border-l border-[#444444]">
          <div class="text-5xl font-semibold text-colorPrimary w-fit">
            <NumberTicker :value="Number(berandaStore.fakultasData.statistik2)" />+
          </div>
          <div class="text-black mt-2 font-semibold">Lulusan</div>
        </div>
        <div class="pl-5 border-l border-[#444444]">
          <div class="text-5xl font-semibold text-colorPrimary w-fit">
            <NumberTicker :value="Number(berandaStore.fakultasData.statistik3)" />+
          </div>
          <div class="text-black mt-2 font-semibold">Prestasi</div>
        </div>
        <div class="pl-5 border-l border-[#444444]">
          <div class="text-5xl font-semibold text-colorPrimary w-fit">
            <NumberTicker :value="Number(berandaStore.fakultasData.statistik4)" />+
          </div>
          <div class="text-black mt-2 font-semibold">Karya Ilmiah</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mitra -->
  <Mitra />

  <!-- Tim Dosen -->
  <div class="lg:mt-48 mt-32 px-[5%] lg:px-0">
    <div class="grid gap-5">
      <h6 class="font-bold text-2xl">Tim</h6>
      <TitleSection v-if="berandaStore.fakultasData.name" :text="`<span class='text-colorPrimary'>${berandaStore.fakultasData.name}</span> Unpas`" :html="true"></TitleSection>
    </div>

    <!-- Card Dosen -->
    <div class="w-full mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
      <div
        class="grid gap-5 transition-all duration-300 group cursor-pointer p-5 rounded-[32px] hoverAnimation"
        v-for="(data, index) in tentangStore.dosenData"
        :key="index"
      >
        <div class="rounded-[32px] overflow-hidden">
          <img
            :src="getImageUrl(data.image)"
            alt=""
            class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div class="space-y-1">
          <h2
            class="font-semibold text-lg transition-colors duration-300"
          >
            {{ data.name }}
          </h2>
          <h3 class="text-lg transition-colors duration-300 group-hover:text-gray-700">
            {{ data.title }}
          </h3>
        </div>
        <p
          class="text-sm md:text-base transition-colors duration-300 group-hover:text-gray-800"
          v-html="data.description"
        ></p>
      </div>
    </div>
  </div>

  <!-- Testimoni -->
  <Testimonial />
</template>

<style scoped>
/* Enhanced hover effect */
.hoverAnimation:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}
</style>
