<template>
  <div class="mt-0 lg:mt-32 img-box" v-if="berandaStore.sliderData.length > 0">
    <div
      class="w-full rounded-b-[40px] lg:rounded-[32px] lg:py-40 py-60 lg:px-32 md:px-20 px-10 text-center lg:text-left bg-cover relative "
      :style="{
        backgroundImage: `
          linear-gradient(270deg, rgba(0, 0, 0, 0.375) 50%, rgba(0, 0, 0, 0.75) 100%),
          url('${images[currentImageIndex]}')
        `,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }"
    >
      <svg :style="{ visibility: 'hidden', position: 'absolute' }" width="0" height="0"
        xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      
      <!-- Content -->
      <div class="lg:w-3/4 w-full grid gap-5 justify-center items-start">
        <TitleMain
          v-if="berandaStore.fakultasData.name"
          :text="`Selamat Datang di <span class='text-colorPrimary'>${berandaStore.fakultasData.name}</span>`"
          :html="true"
          class="text-white text-3xl lg:text-5xl font-bold"
        ></TitleMain>
        <p class="text-white mt-3 md:w-full lg:w-3/4">
          {{ berandaStore.fakultasData.tagline }}
        </p>
        <div class="flex mt-3 gap-5 justify-center items-center lg:justify-start">
          <InteractiveHoverButton text="Daftar Sekarang"></InteractiveHoverButton>
          <InteractiveHoverButton text="Hubungi Admin" bg-color="bg-none"></InteractiveHoverButton>
        </div>
      </div>
      
      <!-- Navigation arrows -->
      <div class="absolute inset-y-0 left-4 flex items-center">
        <button 
          @click="prevImage"
          class="p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 text-white transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      </div>
      <div class="absolute inset-y-0 right-4 flex items-center">
        <button 
          @click="nextImage"
          class="p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 text-white transition-all duration-300" 
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      
      <!-- Dot indicators -->
      <div class="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        <button
          v-for="(_, index) in images"
          :key="index"
          @click="setCurrentImage(index)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentImageIndex === index ? 'bg-white scale-125' : 'bg-gray-400 bg-opacity-60'"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useBerandaStore } from '@/stores/beranda/beranda-store';
import InteractiveHoverButton from './ui/interactive-hover-button/InteractiveHoverButton.vue';
import TitleMain from './TitleMain.vue';
import { getImageUrl } from '@/core/helpers/helper';

const berandaStore = useBerandaStore();

const images = computed(() => {
  return berandaStore.sliderData.map((item) => getImageUrl(item.image1))
})

const currentImageIndex = ref(0);
const isTransitioning = ref(false);
let autoplayInterval = null;

const nextImage = () => {
  if (!isTransitioning.value) {
    isTransitioning.value = true;
    currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
    setTimeout(() => {
      isTransitioning.value = false;
    }, 500);
  }
};

const prevImage = () => {
  if (!isTransitioning.value) {
    isTransitioning.value = true;
    currentImageIndex.value = (currentImageIndex.value - 1 + images.value.length) % images.value.length;
    setTimeout(() => {
      isTransitioning.value = false;
    }, 500);
  }
};

const setCurrentImage = (index) => {
  if (!isTransitioning.value && currentImageIndex.value !== index) {
    isTransitioning.value = true;
    currentImageIndex.value = index;
    setTimeout(() => {
      isTransitioning.value = false;
    }, 500);
  }
};

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextImage();
  }, 5000); // Change image every 5 seconds
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
};

// Touch swipe functionality
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (e) => {
  touchStartX = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  touchEndX = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (touchStartX - touchEndX > 50) {
    // Swipe left -> next image
    nextImage();
  } else if (touchEndX - touchStartX > 50) {
    // Swipe right -> previous image
    prevImage();
  }
};

onMounted(() => {
  startAutoplay();
  
  // Add touch event listeners
  const heroElement = document.querySelector('.img-box');
  if (heroElement) {
    heroElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    heroElement.addEventListener('touchmove', handleTouchMove, { passive: true });
    heroElement.addEventListener('touchend', handleTouchEnd, { passive: true });
  }
});

onBeforeUnmount(() => {
  stopAutoplay();
  
  // Remove touch event listeners
  const heroElement = document.querySelector('.img-box');
  if (heroElement) {
    heroElement.removeEventListener('touchstart', handleTouchStart);
    heroElement.removeEventListener('touchmove', handleTouchMove);
    heroElement.removeEventListener('touchend', handleTouchEnd);
  }
});
</script>

<style scoped>
@media (min-width: 1024px) {
  .img-box {
    clip-path: polygon(55% 100%, 55% 67%, 100% 67%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1124px) {
  .img-box {
    clip-path: polygon(59% 100%, 59% 67%, 100% 67%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1224px) {
  .img-box {
    clip-path: polygon(62% 100%, 62% 67%, 100% 67%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1324px) {
  .img-box {
    clip-path: polygon(65% 100%, 65% 67%, 100% 67%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1400px) {
  .img-box {
    clip-path: polygon(65% 100%, 65% 67%, 100% 67%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1500px) {
  .img-box {
    clip-path: polygon(68% 100%, 68% 67%, 100% 67%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1600px) {
  .img-box {
    clip-path: polygon(70% 100%, 70% 67%, 100% 67%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1700px) {
  .img-box {
    clip-path: polygon(72% 100%, 72% 67%, 100% 67%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 768px) {
  .img-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
  }
}
</style>