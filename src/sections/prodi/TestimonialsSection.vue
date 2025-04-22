<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SectionLayout from '@/layouts/SectionLayout.vue'

interface Testimonial {
  id: number
  rating: number
  quote: string
  name: string
  position: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    name: "Andi Prabowo",
    position: "Software Engineer",
    company: "TechCorp"
  },
  {
    id: 2,
    rating: 5,
    quote: "Another excellent testimonial text would go here describing the great experience with the product or service.",
    name: "Jane Doe",
    position: "Product Manager",
    company: "InnovateCo"
  },
]

const renderStars = (rating: number) => {
  return '★'.repeat(rating)
}
</script>

<template>
  <SectionLayout>
    <div class="w-full">
      <swiper
        :modules="[Pagination, Navigation, Autoplay]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-gray-300',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600'
        }"
        :navigation="{
          nextEl: '.testimonial-swiper-button-next',
          prevEl: '.testimonial-swiper-button-prev',
        }"
        class="relative"
      >
        <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="max-w-3xl mx-auto px-6 py-8 md:px-10 md:py-12">
            <div class="flex justify-center mb-6 text-yellow-400 text-2xl">
              {{ renderStars(testimonial.rating) }}
            </div>
            
            <blockquote class="text-center text-gray-600 italic text-lg md:text-xl mb-8">
              "{{ testimonial.quote }}"
            </blockquote>
            
            <div class="text-center">
              <p class="font-semibold text-gray-800 text-lg">{{ testimonial.name }}</p>
              <p class="text-gray-500">
                {{ testimonial.position }}, {{ testimonial.company }}
              </p>
            </div>
          </div>
        </swiper-slide>

        <button class="testimonial-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 hidden md:flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button class="testimonial-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 hidden md:flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </swiper>
    </div>
  </SectionLayout>
</template>

<style scoped>
:deep(.swiper-pagination) {
  position: relative;
  margin-top: 2rem;
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #2563eb;
}
</style>