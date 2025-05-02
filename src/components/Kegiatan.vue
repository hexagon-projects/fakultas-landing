<script setup lang="ts">
import { computed, ref } from 'vue';
import InteractiveHoverButton from './insipra-ui/InteractiveHoverButton.vue';
import Button from './Button.vue';
import Title from './Title.vue';
import { berandaStore } from '@/stores';
import { getImageUrl } from '@/core/helpers/helper';

const kegiatanIndex = ref(0)

const currentKegiatan = computed(() => {
  return berandaStore.organisasiData[kegiatanIndex.value] || {
    name: '',
    description: ''
  }
})

</script>
<template>
    <div class="grid gap-5 text-center lg:w-1/2 w-full mx-auto">
      <Title>Kegiatan Mahasiswa</Title>
      <p class="text-gray-500">
        Fakultas Hukum Unpas memiliki berbagai kegiatan mahasiswa yang mendukung pengembangan diri
        dan keterampilan.
      </p>
      <div class="flex gap-5 justify-center flex-wrap">
        <Button className="btn-primary" padding="px-4 py-2">All</Button>
        <Button className="btn-neutral" padding="px-4 py-2">UKM</Button>
      </div>
    </div>
    <!-- Desktop -->
    <div class="w-full mt-10 hidden lg:grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:px-20">
      <template v-for="item in berandaStore.organisasiData" :key="item.id">
        <div
          class="w-full h-64 flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition bg-cover relative"
          :style="{ backgroundImage: `url('${getImageUrl(item.image)}')` }"
        >
          <div class="bg-gradient-to-t from-black/80 via-transparent absolute inset-0 rounded-[20px]"></div>
          <h6 class="text-white font-semibold z-10">{{ item.name }}</h6>
          <p class="text-white/40 z-10" v-html="item. description"></p>
        </div>
      </template>
    </div>``

    <!-- Mobile -->
    <div class="w-full mt-10 flex flex-col items-center lg:hidden">
      <transition name="fade" mode="out-in">
        <div
          :key="kegiatanIndex"
          class="w-full md:w-3/4 h-64 md:h-80 flex flex-col justify-end p-5 rounded-[20px] cursor-pointer transition bg-cover relative"
          :style="{ backgroundImage: `url('${getImageUrl(currentKegiatan.image)}')` }"
        >
          <div class="bg-gradient-to-t from-black/80 via-transparent absolute inset-0 rounded-[20px]"></div>
          <h6 class="text-white font-semibold z-10">{{ currentKegiatan.name }}</h6>
          <p class="text-white/40 z-10" v-html="currentKegiatan.description"></p>
        </div>
      </transition>

      <!-- Dots -->
      <div class="flex justify-center mt-4 gap-2">
        <span
          v-for="(item, index) in berandaStore.organisasiData"
          :key="index"
          @click="kegiatanIndex = index"
          :class="[
            'h-[6px] w-8 rounded-full cursor-pointer transition-colors',
            kegiatanIndex === index ? 'bg-colorPrimary' : 'bg-gray-400',
          ]"
        ></span>
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <!-- <Button>Selengkapnya</Button> -->
      <InteractiveHoverButton text="Selengkapnya"></InteractiveHoverButton>
    </div>
</template>
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
