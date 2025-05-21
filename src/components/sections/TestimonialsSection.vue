<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionLayout from '@/layouts/SectionLayout.vue'
import TitleSection from '@/components/TitleSection.vue'
import TextSection from '@/components/TextSection.vue'
import { useSanitize } from '@/composables/useSanitize'
import type { Testimonial } from '@/core/types/testimoni'
import Gedung from '@/assets/gedung.jpg'

// Props
const props = defineProps<{ testimoni: Testimonial[] }>()
const testimoni = ref(props.testimoni)

// Sanitizer & image helper
const { sanitizeHtml } = useSanitize()
const baseUrl = import.meta.env.VITE_APP_IMG_URL
const getImageUrl = (path: string | null) => (path ? `${baseUrl}/${path}` : Gedung)

// Transisi
const isTransitioning = ref(false)
const direction = ref('next') // 'next' or 'prev'

// Navigasi testimonial
const activeIndex = ref(1)
const nextTestimonial = () => {
  if (testimoni.value.length && !isTransitioning.value) {
    direction.value = 'next'
    isTransitioning.value = true
    setTimeout(() => {
      activeIndex.value = (activeIndex.value + 1) % testimoni.value.length
      setTimeout(() => {
        isTransitioning.value = false
      }, 50)
    }, 350)
  }
}

const prevTestimonial = () => {
  if (testimoni.value.length && !isTransitioning.value) {
    direction.value = 'prev'
    isTransitioning.value = true
    setTimeout(() => {
      activeIndex.value = (activeIndex.value - 1 + testimoni.value.length) % testimoni.value.length
      setTimeout(() => {
        isTransitioning.value = false
      }, 50)
    }, 350)
  }
}

// Pre-load images for smoother transitions
const preloadImages = computed(() => {
  if (testimoni.value.length <= 1) return []
  const nextIndex = (activeIndex.value + 1) % testimoni.value.length
  const prevIndex = (activeIndex.value - 1 + testimoni.value.length) % testimoni.value.length
  return [
    getImageUrl(testimoni.value[nextIndex]?.image || null),
    getImageUrl(testimoni.value[prevIndex]?.image || null),
  ]
})
</script>

<template>
  <SectionLayout>
    <div class="w-full flex flex-col items-center justify-center gap-4 text-center">
      <div
        class="px-4 py-1 md:px-5 md:py-2 bg-rose-800/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden"
      >
        <div class="h-4 md:h-5 inline-flex justify-start items-center gap-1">
          <div
            class="justify-start text-colorPrimary text-sm md:text-base font-normal font-['Inter'] leading-tight"
          >
            Testimonials
          </div>
        </div>
      </div>
      <TitleSection :text="'Apa Kata Mereka'" />
      <TextSection class="max-w-2xl">
        Customers trust Chainex for secure automation and smart analytics. See how AI enhances their
        blockchain experience.
      </TextSection>

      <!-- Preload images -->
      <div class="hidden">
        <img v-for="(imgSrc, index) in preloadImages" :key="index" :src="imgSrc" alt="Preload" />
      </div>

      <!-- Cek jika testimoni ada -->
      <template v-if="testimoni && testimoni.length > 0">
        <div
          class="flex w-full mt-6 md:mt-10 gap-4 md:gap-6 flex-col md:flex-row md:items-center md:justify-center"
        >
          <!-- Kiri -->
          <div
            class="w-full md:basis-[35%] relative overflow-hidden rounded-2xl md:rounded-3xl min-h-[300px] md:min-h-[492px] transition-all duration-500"
          >
            <div class="relative w-full h-full min-h-[300px] md:min-h-[492px]">
              <div
                class="absolute inset-0 w-full h-full transition-opacity duration-500"
                :class="{ 'opacity-0': isTransitioning }"
              >
                <img
                  :src="getImageUrl(testimoni[activeIndex]?.image || null)"
                  alt="Foto Testimoni"
                  class="absolute inset-0 object-cover object-center w-full h-full z-0 transition-transform duration-700"
                  :class="{
                    'scale-105': isTransitioning,
                    'transform-gpu': true,
                  }"
                />
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-b from-black/0 to-colorPrimary/50 z-10 transition-opacity duration-500"
                :class="{ 'opacity-80': isTransitioning }"
              ></div>
            </div>
            <div
              class="absolute bottom-4 md:bottom-6 px-4 md:px-[22px] z-20 transition-all duration-500"
              :class="{
                'opacity-0 translate-y-4': isTransitioning,
                'opacity-100 translate-y-0': !isTransitioning,
              }"
            >
              <div
                class="text-left text-white text-lg md:text-xl font-bold font-['Sora'] leading-loose"
              >
                {{ testimoni[activeIndex]?.name }}
              </div>
              <div
                class="text-left text-white text-base md:text-lg font-medium font-['Sora'] leading-relaxed"
              >
                {{ testimoni[activeIndex]?.title }}
              </div>
            </div>
          </div>

          <!-- Kanan -->
          <div
            class="w-full flex-1 h-[350px] md:h-[492px] py-4 md:py-[22px] px-4 md:px-[22px] bg-white rounded-2xl md:rounded-3xl max-w-3xl flex flex-col justify-between"
          >
            <div class="potongan-container lg:h-[400px]">
              <div
                class="relative z-10 py-4 md:py-7 px-4 md:px-8 flex flex-col h-full justify-between bg-colorPrimary potongan md:rounded-[32px] overflow-hidden"
              >
                <div
                  class="inline-flex items-center gap-2 p-1 md:p-2 bg-gray-100 rounded-full outline outline-1 outline-gray-100 w-fit h-fit transform transition-transform duration-300 hover:scale-105"
                >
                  <div
                    class="w-5 h-5 md:w-6 md:h-6 bg-colorPrimary rounded-full flex items-center justify-center"
                  >
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 md:w-5 md:h-5"
                    >
                      <path
                        d="M12.5622 12C12.8275 12 13.0818 11.8946 13.2694 11.7071C13.4569 11.5196 13.5622 11.2652 13.5622 11V8.558C13.5622 8.29278 13.4569 8.03843 13.2694 7.85089C13.0818 7.66336 12.8275 7.558 12.5622 7.558H11.1742C11.1742 7.207 11.1952 6.855 11.2362 6.504C11.2982 6.132 11.4022 5.801 11.5462 5.512C11.6912 5.222 11.8772 4.995 12.1052 4.829C12.3322 4.643 12.6212 4.55 12.9732 4.55V3C12.3942 3 11.8882 3.124 11.4532 3.372C11.022 3.61749 10.6513 3.95645 10.3682 4.364C10.0842 4.81331 9.87479 5.3057 9.74825 5.822C9.62073 6.39176 9.55833 6.97416 9.56225 7.558V11C9.56225 11.2652 9.6676 11.5196 9.85514 11.7071C10.0427 11.8946 10.297 12 10.5622 12H12.5622ZM6.56225 12C6.82746 12 7.08182 11.8946 7.26935 11.7071C7.45689 11.5196 7.56225 11.2652 7.56225 11V8.558C7.56225 8.29278 7.45689 8.03843 7.26935 7.85089C7.08182 7.66336 6.82746 7.558 6.56225 7.558H5.17425C5.17425 7.207 5.19525 6.855 5.23625 6.504C5.29825 6.132 5.40225 5.801 5.54625 5.512C5.69125 5.222 5.87725 4.995 6.10525 4.829C6.33225 4.643 6.62125 4.55 6.97325 4.55V3C6.39425 3 5.88825 3.124 5.45325 3.372C5.02203 3.61749 4.65129 3.95645 4.36825 4.364C4.08417 4.81331 3.87479 5.3057 3.74825 5.822C3.62073 6.39176 3.55833 6.97416 3.56225 7.558V11C3.56225 11.2652 3.6676 11.5196 3.85514 11.7071C4.04268 11.8946 4.29703 12 4.56225 12H6.56225Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <p class="text-colorPrimary text-sm md:text-base font-medium">
                    Client Testimonial
                  </p>
                </div>
                <!-- WRAPPER: Buat ini fleksibel, tinggi penuh -->
                <div class="flex justify-start items-start h-full pt-[20px] md:pt-5 lg:pt-10">
                  <!-- INNER CONTENT: Batasi line-clamp -->
                  <div
                    class="text-left text-xl md:text-2xl lg:text-3xl line-clamp-6 text-[#F3F4F4] transition-all duration-500"
                    :class="{
                      'opacity-0 translate-x-6': isTransitioning && direction === 'next',
                      'opacity-0 -translate-x-6': isTransitioning && direction === 'prev',
                      'opacity-100 translate-x-0': !isTransitioning,
                    }"
                    v-html="sanitizeHtml(testimoni[activeIndex]?.description)"
                  ></div>
                </div>
              </div>

              <svg
                :style="{ visibility: 'hidden', position: 'absolute' }"
                width="0"
                height="0"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="goo"
                    />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                  </filter>
                </defs>
              </svg>
            </div>
            <div class="flex justify-between items-center mt-4 md:mt-8">
              <button
                class="flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 bg-colorPrimary text-white rounded-full outline outline-2 outline-gray-100 transition-all duration-300 hover:bg-colorPrimary/90 hover:shadow-md transform hover:-translate-y-0.5"
              >
                <router-link to="/testimoni">
                  <span class="text-xs md:text-sm font-medium">See more testimonies</span>
                </router-link>

                <div
                  class="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <svg
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transition-transform duration-300 hover:scale-110"
                  >
                    <g id="iconoir:arrow-tr">
                      <path
                        id="Vector"
                        d="M6.56226 19L19.5623 6M19.5623 6V18.48M19.5623 6H7.08226"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
              </button>
              <div class="flex gap-3 md:gap-4">
                <button
                  class="p-2 md:p-3 bg-gray-100 rounded-full outline outline-1 outline-colorPrimary transition-all duration-300 hover:bg-gray-200 hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="isTransitioning"
                  @click="prevTestimonial"
                  :class="{ 'animate-pulse': isTransitioning && direction === 'prev' }"
                >
                  <svg
                    height="20"
                    width="21"
                    fill="none"
                    viewBox="0 0 25 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 hover:-translate-x-0.5"
                  >
                    <path
                      d="M13.2692 17.293L8.97619 13H18.5622V11H8.97619L13.2692 6.70697L11.8552 5.29297L5.14819 12L11.8552 18.707L13.2692 17.293Z"
                      class="fill-colorPrimary"
                    />
                  </svg>
                </button>

                <button
                  class="p-2 md:p-3 bg-gray-100 rounded-full outline outline-1 outline-colorPrimary transition-all duration-300 hover:bg-gray-200 hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="isTransitioning"
                  @click="nextTestimonial"
                  :class="{ 'animate-pulse': isTransitioning && direction === 'next' }"
                >
                  <svg
                    height="20"
                    width="21"
                    fill="none"
                    viewBox="0 0 25 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 hover:translate-x-0.5"
                  >
                    <path
                      d="M11.8553 17.293L13.2693 18.707L19.9763 12L13.2693 5.29297L11.8553 6.70697L16.1483 11H6.56226V13H16.1483L11.8553 17.293Z"
                      class="fill-colorPrimary"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </SectionLayout>
</template>

<style scoped>
.potongan-container {
  filter: url('#goo') drop-shadow(0px -2px 0px transparent);
  transition: all 0.4s ease-in-out;
}

.potongan {
  clip-path: polygon(0 0, 46% 0, 43% 23%, 100% 23%, 100% 100%, 0 100%);
  transition:
    transform 0.5s ease,
    clip-path 0.5s ease;
}

/* Animation keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Small mobile */
@media (min-width: 375px) {
  .potongan {
    clip-path: polygon(0 0, 60% 0, 60% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 425px) {
  .potongan {
    clip-path: polygon(0 0, 55% 0, 55% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 480px) {
  .potongan {
    clip-path: polygon(0 0, 45% 0, 45% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 540px) {
  .potongan {
    clip-path: polygon(0 0, 40% 0, 40% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 640px) {
  .potongan {
    clip-path: polygon(0 0, 30% 0, 30% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 720px) {
  .potongan {
    clip-path: polygon(0 0, 30% 0, 30% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 730px) {
  .potongan {
    clip-path: polygon(0 0, 30% 0, 30% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 755px) {
  .potongan {
    clip-path: polygon(0 0, 30% 0, 30% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 765px) {
  .potongan {
    clip-path: polygon(0 0, 43% 0, 43% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 768px) {
  .potongan {
    clip-path: polygon(0 0, 65% 0, 65% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 786px) {
  .potongan {
    clip-path: polygon(0 0, 65% 0, 65% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 860px) {
  .potongan {
    clip-path: polygon(0 0, 60% 0, 60% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 900px) {
  .potongan {
    clip-path: polygon(0 0, 60% 0, 60% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 970px) {
  .potongan {
    clip-path: polygon(0 0, 50% 0, 50% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 1024px) {
  .potongan {
    clip-path: polygon(0 0, 40% 0, 40% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 1030px) {
  .potongan {
    clip-path: polygon(0 0, 60% 0, 60% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 1100px) {
  .potongan {
    clip-path: polygon(0 0, 50% 0, 50% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}
@media (min-width: 1200px) {
  .potongan {
    clip-path: polygon(0 0, 50% 0, 50% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 1300px) {
  .potongan {
    clip-path: polygon(0 0, 40% 0, 40% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 1400px) {
  .potongan {
    clip-path: polygon(0 0, 40% 0, 40% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}

@media (min-width: 1500px) {
  .potongan {
    clip-path: polygon(0 0, 40% 0, 40% 20%, 100% 20%, 100% 100%, 0 100%);
  }
}
</style>
