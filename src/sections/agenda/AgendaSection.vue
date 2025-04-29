<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import { ref } from 'vue'

const eventData = ref({
  tagline: 'Tagline',
  title: 'Events',
  description:
    'Discover amazing events happening near you. Join us and create unforgettable memories with friends and family!',
})
</script>

<template>
  <SectionLayout>
    <section
      class="flex flex-col items-start gap-4 md:gap-6 lg:gap-8 mt-0 md:mt-6 lg:mt-0 mx-5 md:mx-5 lg:mx-24 transition-all duration-300 ease-in-out"
    >
      <p class="text-black font-['Roboto'] text-sm md:text-base lg:text-lg font-semibold">
        {{ eventData.tagline }}
      </p>
      <div class="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full">
        <h1
          class="text-black font-['Roboto'] text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-tight"
        >
          {{ eventData.title }}
        </h1>
        <p class="text-black font-['Roboto'] text-sm md:text-base lg:text-lg leading-relaxed">
          {{ eventData.description }}
        </p>
      </div>
    </section>
  </SectionLayout>
</template>
