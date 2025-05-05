<script setup lang="ts">
import { berandaStore } from '@/stores'
import TitleMain from './TitleMain.vue'
</script>
<template>
  <div class="lg:mt-48 mt-32">
    <div class="text-center w-[90%] lg:w-1/2 mx-auto">
      <TitleMain
        v-if="berandaStore.fakultasData.name"
        :text="`Kenapa Harus Memilih ${berandaStore.fakultasData.name} Unpas`"
      ></TitleMain>
      <!-- <Title
        >Kenapa Harus Memilih <span class="text-colorPrimary">Fakultas Hukum</span> Unpas</Title
      > -->
      <p class="text-gray-500 mt-5">
        Fakultas Hukum Unpas memiliki berbagai keunggulan yang membuatnya menjadi pilihan terbaik
        untuk pendidikan hukum.
      </p>
    </div>
    <div class="flex gap-10 mt-10 lg:px-20 px-10" v-if="berandaStore.ungulanData.length">
      <div class="w-full grid lg:grid-cols-2 md:grid-cols-1">
        <template v-for="(data, index) in berandaStore.ungulanData">
          <div
            class="w-full p-10 flex flex-col justify-start items-center border-b border-b-colorPrimary lg:border-none"
            :class="
              index % 2 === 0
                ? 'lg:bg-[linear-gradient(114.38deg,_rgba(16,_16,_20,_0.1)_0%,_rgba(63,_168,_137,_0.1)_100%)]'
                : ''
            "
          >
            <img src="/src/assets/images/logo.webp" alt="" class="w-20 mb-5" />

            <div class="text-center px-5">
              <h1 class="text-2xl font-semibold mb-2">{{ data.title }}</h1>
              <p class="text-base" v-html="data.description"></p>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div v-else>
      <div class="mt-20">
        <img src="" alt="" class="w-1/2" />
        <div class="text-center mt-5">
          <h1 class="text-2xl font-semibold mb-2">Data Tidak Ditemukan</h1>
        </div>
      </div>
    </div>
  </div>
</template>
