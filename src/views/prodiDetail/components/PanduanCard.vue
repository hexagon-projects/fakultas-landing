<script setup lang="ts">
import Arrow from '@/assets/icons/arrow.png'
defineProps<{
  title?: string;
  image?: string;
  icon?: string;
}>();
</script>

<template>
  <div class="space-y-4 lg:space-y-6 group transition-all duration-500 hover:-translate-y-2">
    <div class="w-full h-40 md:h-50 lg:h-60 relative rounded-[4px] md:rounded-[8px] lg:rounded-[16px]">
      <div class="w-full h-full icon-container">
        <div class="w-full h-full overflow-hidden rounded-[4px] md:rounded-[8px] lg:rounded-[16px] relative">
          <img :src="image || 'https://via.placeholder.com/300'" :alt="title || 'Panduan'"
            class="w-full h-full object-cover group-hover:scale-105 transition duration-500 icon-box">
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent icon-box z-10 group-hover:scale-105 transition duration-500"></div>
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
      <div
        class="absolute bottom-0 right-0 p-4 bg-white rounded-[4px] md:rounded-[8px] lg:rounded-[16px] cursor-pointer">
        <img :src=Arrow alt="Icon" class="w-4 h-4 md:w-4 md:h-4 lg:w-4 lg:h-4">
      </div>
    </div>
    <h3 class="text-[12px] md:text-[16px] lg:text-[22px] font-bold">{{ title || 'Informasi Beasiswa dan Bantuan Keuangan' }}</h3>
  </div>
</template>

<style>
.icon-container {
  filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.icon-box {
  clip-path: polygon(85% 100%, 85% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 99%);
}

@media (min-width: 320px) {
  .icon-box {
    clip-path: polygon(75% 100%, 75% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 99%);
  }
}

@media (min-width: 360px) {
  .icon-box {
    clip-path: polygon(80% 100%, 80% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 440px) {
  .icon-box {
    clip-path: polygon(85% 100%, 85% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 460px) {
  .icon-box {
    clip-path: polygon(85% 100%, 85% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 560px) {
  .icon-box {
    clip-path: polygon(86% 100%, 86% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 680px) {
  .icon-box {
    clip-path: polygon(90% 100%, 90% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 768px) {
  .icon-box {
    clip-path: polygon(80% 100%, 80% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 868px) {
  .icon-box {
    clip-path: polygon(85% 100%, 85% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 968px) {
  .icon-box {
    clip-path: polygon(85% 100%, 85% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1024px) {
  .icon-box {
    clip-path: polygon(75% 100%, 75% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1124px) {
  .icon-box {
    clip-path: polygon(75% 100%, 75% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1224px) {
  .icon-box {
    clip-path: polygon(80% 100%, 80% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1324px) {
  .icon-box {
    clip-path: polygon(80% 100%, 80% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1400px) {
  .icon-box {
    clip-path: polygon(85% 100%, 85% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}
</style>
