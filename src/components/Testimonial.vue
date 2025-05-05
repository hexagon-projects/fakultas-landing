<script setup lang="ts">
import { berandaStore } from '@/stores'
import Title from './Title.vue'
import { computed, onMounted, ref } from 'vue'
import InteractiveHoverButton from './ui/interactive-hover-button/InteractiveHoverButton.vue'
import { useRouter } from 'vue-router'
import { getImageUrl } from '@/core/helpers/helper'

const router = useRouter()
const testimonialIndex = ref(0)
const currentTestimoni = computed(() => berandaStore.testimoniData[testimonialIndex.value])

onMounted(async () => {
  if(router.currentRoute.value.name == 'beranda') {
    await berandaStore.getDataTestimoni(true)
  }
  else{
    await berandaStore.getDataTestimoni()
  }
})
</script>
<template>
  <div class="lg:mt-48 mt-32 px-[5%] relative custom-gradient">
    <div class="text-center lg:w-1/2 w-full mx-auto">
      <div class="px-5 py-2 rounded-full mx-auto mb-5 w-fit bg-colorPrimary/20">
        <h6 class="font-semibold text-colorPrimary">Testimonials</h6>
      </div>
      <Title>Apa Kata Mereka</Title>
      <p class="text-gray-500 mt-5">
        Customers trust Chainex for secure automation and smart analytics. See how AI enhances their
        blockchain experience
      </p>
    </div>

    <!-- Desktop -->
    <div
      class="mt-10 w-full gap-10 hidden md:grid"
      :class="{
        'lg:grid-cols-3 md:grid-cols-2': berandaStore.testimoniData.length > 2,
        'lg:grid-cols-2 md:grid-cols-2 lg:w-2/3 mx-auto': berandaStore.testimoniData.length === 2,
        'grid-cols-1 lg:w-1/3 md:w-1/2 mx-auto': berandaStore.testimoniData.length === 1,
      }"
    >
      <template v-for="(data, index) in berandaStore.testimoniData" :key="data.id || index">
        <div
          class="p-8 text-center flex flex-col justify-center items-center bg-[#00000005] rounded-[32px] w-full"
        >
        <img :src="getImageUrl(data.image)" alt="" class="rounded-full w-20 h-20 bg-gray-200 object-cover" />
          <p class="mt-5 text-center text-sm md:text-base" v-html="data.description"></p>
          <h1 class="md:text-2xl text-xl font-semibold mt-5">{{ data.name }}</h1>
          <h6 class="text-gray-500 text-sm md:text-base">{{ data.title }}</h6>
        </div>
      </template>
    </div>

    <!-- Mobile -->
    <div class="mt-10 flex flex-col items-center md:hidden">
      <transition name="fade" mode="out-in">
        <div
          v-if="currentTestimoni"
          :key="testimonialIndex"
          class="p-8 w-80 text-center flex flex-col justify-center items-center bg-[#00000005] rounded-[32px]"
        >
          <img :src="getImageUrl(currentTestimoni.image)" alt="" class="rounded-full w-20 h-20 bg-gray-200 object-cover" />
          <p class="mt-5 text-center text-sm" v-html="currentTestimoni.description"></p>
          <h1 class="text-xl font-semibold mt-5">{{ currentTestimoni.name }}</h1>
          <h6 class="text-gray-500 text-sm">{{ currentTestimoni.title }}</h6>
        </div>
      </transition>

      <!-- Dots -->
      <div class="flex justify-center mt-4 gap-2">
        <span
          v-for="(item, index) in berandaStore.testimoniData"
          :key="index"
          @click="testimonialIndex = index"
          :class="[
            'h-[6px] w-8 rounded-full cursor-pointer transition-colors',
            testimonialIndex === index ? 'bg-colorPrimary' : 'bg-gray-400',
          ]"
        ></span>
      </div>
    </div>

    <div class="text-center mt-10">
      <InteractiveHoverButton text="Lihat Lainnya"></InteractiveHoverButton>
    </div>
  </div>
</template>

<style scoped>
.custom-gradient {
  background: radial-gradient(
    circle at center,
    rgba(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b), 0.15) 0%,
    rgba(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b), 0.05) 20%,
    transparent 35%
  );
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive mobile */
@media (max-width: 768px) {
  .custom-gradient {
    background: radial-gradient(
      circle at center,
      rgba(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b), 0.15) 0%,
      rgba(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b), 0.05) 40%,
      transparent 70%
    );
  }
}
</style>
