<script setup lang="ts">
import Card from '@/assets/usp.png'
const props = defineProps<{
  title?: string,
  description?: string,
  image?: string,
  index?: number
}>();
</script>

<template>
  <div class="relative">
    <!-- <div class="usp-container">
      <div
        class="w-full h-[208px] md:h-[268px] lg:h-[320px] relative bg-netral usp-box">
        <div class="usp-content">
          <div class="space-y-2 md:space-y-4">
            <h6 class="text-[10px] md:text-[12px] lg:text-[16px] font-bold">{{ props.title }}</h6>
            <p class="text-xs md:text-sm" v-html="props.description"></p>
          </div>
        </div>
      </div>

      <svg :style="{ visibility: 'hidden', position: 'absolute' }" width="0" height="0"
        xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div> -->
    <div class="absolute inset-0">
      <img :src="Card" alt="" class="w-full h-full">
    </div>
    <div class="w-full h-[280px] md:h-[320px] lg:h-[360px] relative bg-translate">
      <div class="usp-content">
        <div class="space-y-2 md:space-y-4">
          <h6 class="text-[14px] md:text-[14px] lg:text-[16px] font-bold">{{ props.title }}</h6>
          <p class="text-xs lg:text-sm lg:line-clamp-6" v-html="props.description"></p>
        </div>
      </div>
    </div>

    <div v-if="props.image"
      class="absolute bottom-4 left-4 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] h-8">
      <img :src="props.image" :alt="props.title" class="h-full object-contain svg-primary">
    </div>

    <div class="absolute bottom-0 right-0 border-2 border-white rounded-[4px] md:rounded-[8px] lg:rounded-[16px] p-2">
      <h5 class="text-[18px] md:text-[20px] lg:text-[22px] text-colorPrimary">
        {{ String(props.index).padStart(2, '0') }}</h5>
    </div>
  </div>
</template>

<style>
.usp-box {
  clip-path: polygon(90% 100%, 90% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  position: relative;
}

.usp-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  border: 2px solid black;
  border-radius: 4px;
  clip-path: polygon(90% 100%, 90% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  pointer-events: none;
  z-index: 1;
}

.usp-content {
  position: relative;
  padding: 1rem;
  height: 100%;
  z-index: 2;
}

.usp-container {
  filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

@media (min-width: 320px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(80% 100%, 80% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 360px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(85% 100%, 85% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 440px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(85% 100%, 85% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 460px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(90% 100%, 90% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 560px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(90% 100%, 90% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 680px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(92% 100%, 92% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 768px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(72% 100%, 72% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }

  .usp-box::before {
    border-radius: 8px;
  }
}

@media (min-width: 868px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(75% 100%, 75% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 968px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(75% 100%, 75% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1024px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(70% 100%, 70% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }

  .usp-box::before {
    border-radius: 16px;
  }
}

@media (min-width: 1124px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(70% 100%, 70% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1224px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(72% 100%, 72% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1324px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(75% 100%, 75% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1400px) {

  .usp-box,
  .usp-box::before {
    clip-path: polygon(75% 100%, 75% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}
</style>
