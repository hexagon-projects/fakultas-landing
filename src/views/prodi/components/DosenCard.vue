<script setup lang="ts">
import FacebookIcon from '@/assets/icons/fb.png';
import InstagramIcon from '@/assets/icons/instagram.png';
import TiktokIcon from '@/assets/icons/tik-tok.png';
import YoutubeIcon from '@/assets/icons/youtube.png';
import Arrowr from '@/assets/icons/arrowr.png'
import { ref } from 'vue';

defineProps<{
  name?: string;
  title?: string;
  image?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
}>();

const isHovered = ref(false);
</script>

<template>
  <div class="space-y-4 lg:space-y-6">
    <div class="w-full h-[40vh] md:h-[30vh] lg:h-[40vh] relative overflow-hidden group" @mouseenter="isHovered = true"
      @mouseleave="isHovered = false">
      <div class="w-full h-full dosen-container">
        <img :src="image || 'https://via.placeholder.com/300'" :alt="name || 'Dosen'"
          class="w-full h-full object-cover object-top group-hover:scale-101 transition duration-500 dosen-box rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">

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
      </div>

      <!-- Sosmed dosen -->
      <div class="absolute bottom-20 right-2 flex flex-col gap-4 md:gap-6 transition-all duration-300"
        :class="isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        v-if="facebook || instagram || youtube || tiktok">
        <a v-if="facebook" :href="facebook" target="_blank"
          class="w-10 h-10 bg-white p-2 rounded-full transform transition-all duration-500"
          :class="isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'" style="transition-delay: 0.4s;">
          <img :src="FacebookIcon" alt="Facebook" class="w-full h-full object-contain svg-primary">
        </a>
        <a v-if="instagram" :href="instagram" target="_blank"
          class="w-10 h-10 bg-white p-2 rounded-full transform transition-all duration-500"
          :class="isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'" style="transition-delay: 0.3s;">
          <img :src="InstagramIcon" alt="Instagram" class="w-full h-full object-contain svg-primary">
        </a>
        <a v-if="youtube" :href="youtube" target="_blank"
          class="w-10 h-10 bg-white p-2 rounded-full transform transition-all duration-500"
          :class="isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'" style="transition-delay: 0.2s;">
          <img :src="YoutubeIcon" alt="YouTube" class="w-full h-full object-contain svg-primary">
        </a>
        <a v-if="tiktok" :href="tiktok" target="_blank"
          class="w-10 h-10 bg-white p-2 rounded-full transform transition-all duration-500"
          :class="isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'" style="transition-delay: 0.1s;">
          <img :src="TiktokIcon" alt="TikTok" class="w-full h-full object-contain svg-primary">
        </a>
      </div>

      <div class="absolute bottom-0 right-0 p-3 bg-[#444444]/25 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] group"
        @mouseenter="isHovered = true" @mouseleave="isHovered = false">
        <img :src="Arrowr" alt="" class="w-6 h-6 svg-primary group-hover:-rotate-90 transition duration-500">
      </div>
    </div>
    <div class="space-y-2">
      <div class="h-fit md:h-14 lg:h-16">
        <h4 class="text-sm md:text-base lg:text-lg font-bold leading-tight">{{ name || 'Dr. Andi' }}</h4>
      </div>
      <h4 class="text-sm md:text-base lg:text-lg font-light">{{ title || 'Dosen Senior' }}</h4>
    </div>
  </div>
</template>

<style>
.dosen-container {
  filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.dosen-box {
  clip-path: polygon(75% 100%, 75% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
}

@media (min-width: 320px) {
  .dosen-box {
    clip-path: polygon(75% 100%, 75% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 360px) {
  .dosen-box {
    clip-path: polygon(80% 100%, 80% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 440px) {
  .dosen-box {
    clip-path: polygon(80% 100%, 80% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 460px) {
  .dosen-box {
    clip-path: polygon(84% 100%, 84% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 560px) {
  .dosen-box {
    clip-path: polygon(84% 100%, 84% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 680px) {
  .dosen-box {
    clip-path: polygon(90% 100%, 90% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 768px) {
  .dosen-box {
    clip-path: polygon(80% 100%, 80% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 868px) {
  .dosen-box {
    clip-path: polygon(80% 100%, 80% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 968px) {
  .dosen-box {
    clip-path: polygon(84% 100%, 84% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1024px) {
  .dosen-box {
    clip-path: polygon(64% 100%, 64% 82%, 100% 82%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1124px) {
  .dosen-box {
    clip-path: polygon(70% 100%, 70% 82%, 100% 82%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1224px) {
  .dosen-box {
    clip-path: polygon(75% 100%, 75% 82%, 100% 82%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1324px) {
  .dosen-box {
    clip-path: polygon(75% 100%, 75% 82%, 100% 82%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1400px) {
  .dosen-box {
    clip-path: polygon(78% 100%, 78% 82%, 100% 82%, 100% 0%, 0% 0%, 0% 100%);
  }
}
</style>
