<script setup lang="ts">
import Button from '@/components/Button.vue'
import InteractiveHoverButton from '@/components/insipra-ui/InteractiveHoverButton.vue'
import Timeline from '@/components/insipra-ui/Timeline.vue'
import Mitra from '@/components/MitraSection.vue'
import Testimonial from '@/components/Testimonial.vue'
import Title from '@/components/Title.vue'
import { berandaStore, tentangStore } from '@/stores'
import { onMounted } from 'vue'

const data = [
  {
    id: "1",
    label: "Sejarah Fakultas Hukum Unpas",
  },
  {
    id: "2",
    label: "Perioderisasi",
  },
  {
    id: "3",
    label: "Akreditasi",
  },
];

onMounted(() => {
  tentangStore.getInitialData()
})
</script>
<template>
  <!-- Hero Section -->
  <div
    class="lg:mt-48 mt-10 px-[5%] lg:px-0 flex lg:gap-20 gap-5 lg:flex-row flex-col items-center"
  >
    <div class="text-center lg:w-1/2 w-full mx-auto">
      <Title>Sejarah, Visi, Misi, dan Pencapaian Fakultas Kami</Title>
      <p class="mt-8 text-sm lg:text-base">
        Fakultas kami didirikan pada tahun 1990 dengan tujuan memberikan pendidikan berkualitas
        tinggi. Kami berkomitmen untuk menciptakan lingkungan belajar yang inovatif dan inklusif,
        serta menghasilkan lulusan yang siap bersaing di dunia profesional.
      </p>
    </div>
  </div>

  <!-- Timeline -->
  <div class="lg:mt-48 mt-32 flex flex-col lg:flex-row px-[5%] lg:px-0">
    <div class="lg:w-1/2 w-full h-80 bg-gray-200"></div>
    <div class="lg:w-1/2 w-full">
      <Timeline :items="data"/>
    </div>
  </div>

  <!-- Sejarah Fakultas -->
  <div class="lg:mt-48 mt-32 flex flex-col-reverse lg:flex-row px-[5%] lg:px-0 lg:gap-10">
    <div class="lg:w-1/2 w-full">
      <div>
        <Title class="mt-7">
          Tentang <span class="text-colorPrimary">Fakultas Hukum</span> Unpas
        </Title>
        <p class="text-gray-500 mt-7 text-sm lg:text-base">
          Fakultas Hukum Universitas Pasundan (FH UNPAS) merupakan salah satu fakultas tertua dan
          institusi pendidikan hukum yang memiliki reputasi unggul di lingkungan Universitas
          Pasundan. Berdiri sejak tanggal 14 November 1960, FH UNPAS telah mengukir sejarah panjang
          dalam kontribusinya bagi pengembangan ilmu hukum dan pencetakan sumber daya manusia unggul
          di Indonesia.
        </p>
        <div class="flex gap-5 lg:mt-10 mt-5">
          <!-- <Button>Daftar Sekarang</Button>
          <Button className="btn-outline-primary">Selengkapnya</Button> -->
          <InteractiveHoverButton
            text="Daftar Sekarang"
          />
          <InteractiveHoverButton
            text="Selengkapnya"
            background="bg-transparent"
            color="text-colorPrimary"
            borderCustom="border-colorPrimary"
          />  
        </div>
      </div>
    </div>
    <div class="lg:w-1/2 w-full">
      <div class="w-full h-80 bg-gray-200"></div>
    </div>
  </div>

  <!-- Visi Misi Fakultas -->
  <div class="lg:mt-48 mt-32 flex flex-col-reverse lg:flex-row px-[5%] lg:px-0 lg:gap-10">
    <div class="lg:w-1/2 w-full">
      <div class="w-full h-full bg-gray-200"></div>
    </div>
    <div class="lg:w-1/2 w-full">
      <div>
        <Title class="mt-7">Visi & Misi</Title>
        <p class="mt-5 text-sm lg:text-base">
          “Menjadi fakultas hukum unggulan di tingkat nasional dan internasional yang berlandaskan
          nilai-nilai keilmuan, keislaman, dan kesundaan dalam mengembangkan ilmu hukum yang
          berkeadilan, berintegritas, dan responsif terhadap dinamika global.”
        </p>
        <!-- <h6 class="mt-5 font-semibold">Visi</h6>
                <p>“Menjadi fakultas hukum unggulan di tingkat nasional dan internasional yang berlandaskan nilai-nilai keilmuan, keislaman, dan kesundaan dalam mengembangkan ilmu hukum yang berkeadilan, berintegritas, dan responsif terhadap dinamika global.”</p>
                <h6 class="mt-5 font-semibold">Misi</h6>
                <p>“Menjadi fakultas hukum unggulan di tingkat nasional dan internasional yang berlandaskan nilai-nilai keilmuan, keislaman, dan kesundaan dalam mengembangkan ilmu hukum yang berkeadilan, berintegritas, dan responsif terhadap dinamika global.”</p> -->
        <div class="flex gap-5 lg:mt-10 mt-5">
          <!-- <Button>Daftar Sekarang</Button>
          <Button className="btn-outline-primary">Selengkapnya</Button> -->
          <InteractiveHoverButton
            text="Daftar Sekarang"
          />
          <InteractiveHoverButton
            text="Selengkapnya"
            background="bg-transparent"
            color="text-colorPrimary"
            borderCustom="border-colorPrimary"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Statistik Fakultas -->
  <div class="flex flex-col gap-10 lg:mt-48 mt-32 px-[5%] lg:px-0">
    <div class="w-full">
      <div class="grid gap-5">
        <Title> Statistik Fakultas: Mengetahui Lebih Dalam Tentang Kami </Title>
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
          <div class="text-5xl font-semibold text-colorPrimary w-fit">{{ berandaStore.fakultasData.statistik1 }}+</div>
          <div class="text-black mt-2 font-semibold">Mahasiswa</div>
        </div>
        <div class="pl-5 border-l border-[#444444]">
          <div class="text-5xl font-semibold text-colorPrimary w-fit">{{ berandaStore.fakultasData.statistik2 }}+</div>
          <div class="text-black mt-2 font-semibold">Lulusan</div>
        </div>
        <div class="pl-5 border-l border-[#444444]">
          <div class="text-5xl font-semibold text-colorPrimary w-fit">{{ berandaStore.fakultasData.statistik3 }}+</div>
          <div class="text-black mt-2 font-semibold">Prestasi</div>
        </div>
        <div class="pl-5 border-l border-[#444444]">
          <div class="text-5xl font-semibold text-colorPrimary w-fit">{{ berandaStore.fakultasData.statistik4 }}+</div>
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
      <Title> <span class="text-colorPrimary">Fakultas Hukum</span> Unpas </Title>
    </div>

    <!-- Card Dosen -->
    <div class="w-full mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
      <div class="grid gap-5" v-for="(data, index) in tentangStore.dosenData" :key="index">
        <img src="" alt="" class="w-full h-64 object-cover rounded-[32px] bg-gray-200" />
        <div>
          <h2 class="font-semibold text-lg">{{ data.name }}</h2>
          <h3 class="text-lg">{{ data.title }}</h3>
        </div>
        <p class="text-sm md:text-base" v-html="data.description"></p>
      </div>
    </div>
  </div>

  <!-- Testimoni -->
  <Testimonial />
</template>
