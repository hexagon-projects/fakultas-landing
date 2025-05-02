<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Title from './Title.vue'
import { berandaStore } from '@/stores'
import { getImageUrl } from '@/core/helpers/helper'
import { useRouter } from 'vue-router'


const router = useRouter()
const currentIndex = ref(0)

const itemsPerPage = ref(6)

const updateItemsPerPage = () => {
  itemsPerPage.value = window.innerWidth < 1024 ? 3 : 6
}
const groupedLogos = computed(() => {
  const groups = []
  for (let i = 0; i < berandaStore.mitraData.length; i += itemsPerPage.value) {
    groups.push(berandaStore.mitraData.slice(i, i + itemsPerPage.value))
  }
  return groups
})

let interval: any = null

onMounted(async() => {
  if(router.currentRoute.value.name == 'beranda') {
    await berandaStore.getDataMitra(true) 
  }
  else{
    await berandaStore.getDataMitra() 
  } 
  updateItemsPerPage()
  window.addEventListener('resize', updateItemsPerPage)

  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % groupedLogos.value.length
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
  window.removeEventListener('resize', updateItemsPerPage)
})
</script>

<template>
  <div class="lg:mt-48 mt-32">
    <Title class="text-center px-[5%]">
      Lebih Dari <span class="text-colorPrimary">1000+</span> Mitra Kerjasama
    </Title>

    <div class="w-full overflow-hidden bg-gray-100">
      <!-- Carousel track -->
      <div
        class="flex transition-transform duration-500 ease-in-out py-10"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(group, groupIndex) in groupedLogos"
          :key="groupIndex"
          class="flex-shrink-0 w-full flex justify-evenly gap-4 justify-items-center items-center px-4"
        >
          <div
            v-for="(logo, logoIndex) in group"
            :key="logoIndex"
            class="flex justify-center items-center"
          >
            <img :src="getImageUrl(logo.image)" alt="Logo" class="h-28 object-contain" />
          </div>
        </div>
      </div>

      <!-- Dots -->
      <div class="flex justify-center mt-4 gap-2">
        <span
          v-for="(_, index) in groupedLogos.length"
          :key="index"
          @click="currentIndex = index"
          :class="[
            'h-[6px] w-8 rounded-full cursor-pointer transition-colors',
            currentIndex === index ? 'bg-colorPrimary' : 'bg-gray-400',
          ]"
        ></span>
      </div>
    </div>
    <div class="text-center mt-10 px-[5%] lg:px-0 text-sm lg:text-base lg:w-1/2 w-full mx-auto">
      <p>Highlighting our successful collaborations with top-tier clients and their transformative projects.</p>
    </div>
  </div>
</template>
