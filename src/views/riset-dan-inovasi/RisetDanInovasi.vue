<script setup lang="ts">
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue'
import Title from '@/components/Title.vue'
import { getImageUrl } from '@/core/helpers/helper'
import { berandaStore } from '@/stores'
import { onMounted } from 'vue'
import ScrollTransition from '@/components/ScrollTransition.vue'
import TitleMain from '@/components/TitleMain.vue'

onMounted(async () => {
  await berandaStore.getDataPortofolio()
})
</script>
<template>
  <!-- Hero Section -->
  <ScrollTransition>
    <div class="lg:mt-48 px-[5%] lg:px-0 flex lg:gap-20 gap-5 lg:flex-row flex-col items-center">
      <div class="text-center lg:w-1/2 w-full mx-auto">
        <TitleMain text="Penelitian dan Publikasi Fakultas Kami"></TitleMain>
        <p class="mt-8 text-sm md:text-base">
          Fakultas kami berkomitmen untuk mendorong penelitian yang inovatif dan berkualitas tinggi.
          Kami percaya bahwa penelitian adalah kunci untuk menciptakan solusi yang berdampak bagi
          masyarakat.
        </p>
        <div class="flex lg:gap-10 gap-5 mt-10 justify-center">
          <!-- <Button>Daftar Sekarang</Button>
                  <Button className="btn-outline-primary">Hubungi Admin</Button> -->
          <InteractiveHoverButton text="Daftar Sekarang" />
          <InteractiveHoverButton
            text="Hubungi Admin"
            bg-color="bg-none"
            border-color="border-colorPrimary"
            text-color="text-colorPrimary"
            bg-hover="bg-colorPrimary"
            text-hover="text-white"
          />
        </div>
      </div>
    </div>
  </ScrollTransition>

  <!-- sub hero -->
  <ScrollTransition>
    <div class="lg:mt-48 mt-32 mx-[5%] lg:mx-0 rounded-[32px]">
      <img
        src="/src/assets/images/fasilitas.jpg"
        alt=""
        class="rounded-[32px] w-3/4 mx-auto max-h-[600px]"
      />
    </div>
  </ScrollTransition>

  <!-- Inovasi terkini -->
  <ScrollTransition>
    <div class="lg:mt-48 mt-32 gap-20 px-[5%] lg:px-0">
      <div class="mx-auto text-center lg:w-1/2 w-full">
        <div>
          <TitleMain
            text="Inovasi Terkini: Penelitian Unggulan dari Fakultas Kami"
            class="mt-7"
          ></TitleMain>
          <p class="text-gray-500 mt-7 text-sm md:text-base">
            Fakultas kami bangga mempersembahkan penelitian terbaru yang memberikan dampak
            signifikan di bidangnya. Temukan lebih lanjut tentang proyek-proyek inovatif yang
            dipimpin oleh tim peneliti kami yang berpengalaman.
          </p>
        </div>
      </div>
      <div class="mt-10 flex flex-col justify-center items-center gap-10">
        <template v-for="(data, index) in berandaStore.portofolioData" :key="index">
          <div
            class="p-5 flex lg:gap-10 gap-5 w-4/5 bg-[#F0F0F0] rounded-[20px] flex-col transition-all duration-300 group cursor-pointer hover:bg-white hover:shadow-xl"
            :class="[index % 2 == 0 ? 'lg:flex-row-reverse' : 'lg:flex-row', `delay-${index % 9}`]"
          >
            <div class="rounded-[20px] bg-gray-300 lg:w-5/12 w-full h-40 overflow-hidden">
              <img
                :src="getImageUrl(data.image1)"
                alt=""
                class="object-cover rounded-[20px] w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div class="lg:w-7/12 w-full grid gap-5">
              <h4
                class="text-base md:text-lg font-bold transition-colors duration-300 group-hover:text-colorPrimary"
              >
                {{ data.title }}
              </h4>
              <p
                class="text-sm md:text-base transition-colors duration-300 group-hover:text-gray-800"
                v-html="data.description"
              ></p>
              <InteractiveHoverButton
                text="Selengkapnya"
                bg-color="bg-none"
                border-color="border-colorPrimary"
                text-color="text-colorPrimary"
                bg-hover="bg-colorPrimary"
                text-hover="text-white"
                padding="px-5 py-2"
                class="w-fit transition-all duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </template>
      </div>

      <div class="text-center mt-10">
        <!-- <Button>Selengkapnya</Button> -->
        <InteractiveHoverButton text="Selengkapnya" />
      </div>
    </div>
  </ScrollTransition>

  <!-- Berita Terbaru -->
  <ScrollTransition>
    <div class="lg:mt-48 mt-32 px-[5%] lg:px-0">
      <div class="lg:w-1/2 w-full mx-auto text-center">
        <div class="grid gap-5">
          <h6 class="font-semibold text-lg">Publikasi</h6>
          <TitleMain text="Jurnal dan Publikasi Terbaru Fakultas"></TitleMain>
          <p>
            Fakultas kami berkomitmen untuk menghasilkan penelitian berkualitas tinggi. Berikut
            adalah daftar jurnal dan publikasi terbaru yang telah diterbitkan.
          </p>
        </div>
      </div>

      <!-- Card Berita -->
      <div class="flex flex-col lg:flex-row lg:gap-20 md:gap-10 gap-5 lg:px-40 md:px-20 px-0 mt-10">
        <template v-for="(item, index) in 3" :key="index">
          <div
            class="text-center grid gap-5 transition-all duration-300 group cursor-pointer p-5 rounded-[20px] hover:bg-[#FAFAFA] hover:shadow-lg"
            :class="`delay-${index % 9}`"
          >
            <div class="rounded-[20px] overflow-hidden">
              <img
                :src="''"
                alt=""
                class="w-full h-48 rounded-[20px] bg-gray-200 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h5
              class="font-bold text-xl transition-colors duration-300 group-hover:text-colorPrimary"
            >
              Inisiatif Kolaborasi untuk Meningkatkan Kualitas Pendidikan dan Penelitian
            </h5>
            <p class="transition-colors duration-300 group-hover:text-gray-700">
              Fakultas kami aktif menjalin kerjasama dengan berbagai institusi untuk meningkatkan
              pengalaman belajar.
            </p>
          </div>
        </template>
      </div>
    </div>
  </ScrollTransition>
</template>
<style scoped>
.group:hover {
  transform: translateY(-5px);
  border: 1px solid #e5e7eb;
}

.group:hover img {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
</style>
