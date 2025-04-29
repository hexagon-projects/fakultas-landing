<template>
  <div class="max-w-screen-xl mx-auto px-8 md:px-8 py-6 md:py-8 bg-white font-sans text-gray-900">
    <!-- Featured Event -->
    <div class="flex flex-col lg:flex-row gap-4 md:gap-6 mb-8 md:mb-12 lg:-mt-25">
      <div class="relative rounded-xl md:rounded-2xl overflow-hidden w-full lg:w-1/2">
        <img
          class="w-full h-48 sm:h-56 md:h-80 lg:h-96 object-cover rounded-xl md:rounded-2xl"
          :src="featuredEvent.image"
          :alt="featuredEvent.title"
        />
        <div
          class="absolute left-3 top-3 md:left-4 md:top-4 bg-gray-100 rounded-lg md:rounded-xl p-1 md:p-2 text-center w-16 md:w-24 lg:w-28"
        >
          <div class="text-xs md:text-sm">{{ featuredEvent.day }}</div>
          <div class="text-lg md:text-2xl lg:text-3xl font-bold">{{ featuredEvent.date }}</div>
          <div class="text-xs md:text-sm">{{ featuredEvent.monthYear }}</div>
        </div>
      </div>

      <div class="flex flex-col gap-2 md:gap-4 w-full lg:w-1/2">
        <div
          class="bg-gray-100 rounded-lg md:rounded-xl px-2 py-1 text-xs md:text-sm font-semibold w-fit"
        >
          {{ featuredEvent.category }}
        </div>
        <h2 class="text-lg md:text-xl lg:text-2xl font-bold">{{ featuredEvent.title }}</h2>
        <p class="text-sm md:text-base">{{ featuredEvent.location }}</p>
        <p class="text-sm md:text-base">{{ featuredEvent.description }}</p>
        <button
          class="mt-2 bg-red-700 text-white rounded-full py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm font-bold shadow outline outline-gray-200 w-fit"
        >
          Daftar Sekarang
        </button>
      </div>
    </div>

    <!-- Category Filters -->
    <div class="-mx-4 md:-mx-6 px-4 md:px-6 overflow-x-auto pb-4 mb-8 md:mb-12">
      <div class="flex gap-2 min-w-max">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm lg:text-base whitespace-nowrap transition border',
            activeCategory === category
              ? 'bg-gray-100 border-red-700 text-red-700'
              : 'border-gray-300 text-gray-700 hover:bg-gray-50',
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Event List -->
    <div class="space-y-4 md:space-y-6 lg:space-y-8">
      <div
        v-for="event in filteredEvents"
        :key="event.id"
        class="flex flex-col sm:flex-row bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden outline outline-gray-200"
        :class="{ 'opacity-80': event.soldOut }"
      >
        <img
          class="w-full sm:w-40 md:w-48 h-40 md:h-48 object-cover"
          :src="event.image"
          :alt="event.title"
        />

        <div class="p-4 md:p-6 flex flex-col flex-grow gap-2 md:gap-3 lg:gap-4">
          <div class="flex items-center gap-2 md:gap-4">
            <h3 class="text-lg md:text-xl lg:text-2xl font-bold">{{ event.title }}</h3>
            <span
              v-if="event.soldOut"
              class="bg-gray-100 rounded px-2 py-1 text-xs md:text-sm font-semibold"
            >
              Sold out
            </span>
          </div>
          <div class="flex gap-1 md:gap-2 text-xs md:text-sm text-gray-600">
            <span>{{ event.date }}</span>
            <span>•</span>
            <span>{{ event.location }}</span>
          </div>
          <p class="text-sm md:text-base">{{ event.description }}</p>
          <button
            class="self-end border border-black rounded px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm lg:text-base"
          >
            Save my spot
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const featuredEvent = {
  image: 'https://placehold.co/576x420',
  day: 'Sat',
  date: '10',
  monthYear: 'Feb 2024',
  category: 'Category',
  title: 'Event title heading',
  location: 'Location',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
}

const categories = ref([
  'View all',
  'Category one',
  'Category two',
  'Category three',
  'Category four',
])
const activeCategory = ref('View all')

const events = ref([
  {
    id: 1,
    image: 'https://placehold.co/192x192',
    title: 'Event title heading',
    date: 'Fri 09 Feb 2024',
    location: 'Location',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    category: 'Category one',
    soldOut: true,
  },
  {
    id: 2,
    image: 'https://placehold.co/192x192',
    title: 'Event title heading',
    date: 'Sat 10 Feb 2024',
    location: 'Location',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    category: 'Category two',
    soldOut: false,
  },
  {
    id: 3,
    image: 'https://placehold.co/192x192',
    title: 'Event title heading',
    date: 'Sun 11 Feb 2024',
    location: 'Location',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    category: 'Category three',
    soldOut: false,
  },
])

const filteredEvents = computed(() =>
  activeCategory.value === 'View all'
    ? events.value
    : events.value.filter((event) => event.category === activeCategory.value),
)
</script>
