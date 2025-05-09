<script lang="ts" setup>
import Button from '@/components/Button.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Fasilitas } from '@/core/types/fasilitas';
import { ref, onMounted } from 'vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

defineProps<{
  fasilitas: Fasilitas[];
  isLoading?: boolean;
}>();

const selectedFacility = ref<Fasilitas | null>(null);
const showAll = ref(true);
const imagesLoaded = ref(false);

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const filterFacility = (facility: Fasilitas | null) => {
  selectedFacility.value = facility;
  showAll.value = facility === null;
  // Reset animation state when changing view
  imagesLoaded.value = false;
  setTimeout(() => {
    imagesLoaded.value = true;
  }, 100);
};

onMounted(() => {
  // Start animation after component is mounted
  setTimeout(() => {
    imagesLoaded.value = true;
  }, 100);
});
</script>

<template>
  <div
    class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[160px] lg:py-[136px] space-y-10 md:space-y-14 lg:space-y-16">
    <div class="grid gap-2 lg:gap-4 text-center w-full lg:w-1/2 mx-auto">
      <TitleSection text="Fasilitas"></TitleSection>
      <TextSection>Scenes that unfold like a movie, with each image telling a cinematic story.</TextSection>
      <!-- List Nama Fasilitas -->
      <div id="fasilitas-scroll" class="relative overflow-x-scroll scroll-hidden mx-[10px] lg:-mx-[60px]">
        <div class="flex pb-3 gap-3 whitespace-nowrap">
          <Button className="btn-primary" padding="px-4 py-2" @click="filterFacility(null)">
            Semua Fasilitas
          </Button>
          <Button v-for="item in fasilitas" :key="item.id"
            :className="selectedFacility?.id === item.id ? 'btn-primary' : 'btn-neutral'" padding="px-4 py-2"
            @click="filterFacility(item)">
            {{ item.title }}
          </Button>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <div v-if="showAll" class="lg:gap-10 md:gap-5 hidden md:grid">
        <!-- First Row - Two equal width columns -->
        <div class="flex w-full lg:gap-10 md:gap-5">
          <!-- Left Image -->
          <div class="w-1/2 h-40 md:h-52 lg:h-60 rounded-[20px] relative overflow-hidden group">
            <img v-if="fasilitas[0]?.image1" :src="getImageUrl(fasilitas[0].image1)"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-0"
              :class="{ 'animate-fade-in': imagesLoaded }" :alt="fasilitas[0]?.title || ''" />
          </div>

          <!-- Right Image -->
          <div class="w-1/2 h-40 md:h-52 lg:h-60 rounded-[20px] relative overflow-hidden group">
            <img v-if="fasilitas[1]?.image1" :src="getImageUrl(fasilitas[1].image1)"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-0"
              :class="{ 'animate-fade-in-delay-1': imagesLoaded }" :alt="fasilitas[1]?.title || ''" />
          </div>
        </div>

        <!-- Second Row - Grid layout -->
        <div class="grid grid-cols-3 lg:gap-10 md:gap-5">
          <!-- Text Content Cell -->
          <div class="w-full h-40 md:h-52 lg:h-60 flex flex-col justify-center gap-3">
            <h2 class="text-2xl font-bold">Fasilitas</h2>
            <TextSection>Fasilis-fasilitas yang tersedia.</TextSection>
          </div>

          <!-- Small Image Cell -->
          <div class="w-full h-40 md:h-52 lg:h-60 rounded-[20px] relative overflow-hidden group">
            <img v-if="fasilitas[2]?.image1" :src="getImageUrl(fasilitas[2].image1)"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-0"
              :class="{ 'animate-fade-in-delay-2': imagesLoaded }" :alt="fasilitas[2]?.title || ''" />
          </div>

          <!-- Tall Image Cell (spanning 2 rows) -->
          <div class="row-span-2 w-full h-full rounded-[20px] relative overflow-hidden group">
            <img v-if="fasilitas[3]?.image1" :src="getImageUrl(fasilitas[3].image1)"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-0"
              :class="{ 'animate-fade-in-delay-3': imagesLoaded }" :alt="fasilitas[3]?.title || ''" />
          </div>

          <!-- Bottom Row Images -->
          <div class="w-full h-40 md:h-52 lg:h-60 rounded-[20px] relative overflow-hidden group">
            <img v-if="fasilitas[4]?.image1" :src="getImageUrl(fasilitas[4].image1)"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-0"
              :class="{ 'animate-fade-in-delay-4': imagesLoaded }" :alt="fasilitas[4]?.title || ''" />
          </div>

          <div class="w-full h-40 md:h-52 lg:h-60 rounded-[20px] relative overflow-hidden group">
            <img v-if="fasilitas[5]?.image1" :src="getImageUrl(fasilitas[5].image1)"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-0"
              :class="{ 'animate-fade-in-delay-5': imagesLoaded }" :alt="fasilitas[5]?.title || ''" />
          </div>
        </div>
      </div>

      <!-- Single Facility View -->
      <div v-if="!showAll && selectedFacility" class="hidden md:grid lg:gap-10 md:gap-5">
        <div class="flex w-full lg:gap-10 md:gap-5">
          <!-- Left Image -->
          <div class="w-1/2 h-40 md:h-52 lg:h-60 rounded-[20px] relative overflow-hidden group">
            <img v-if="selectedFacility?.image1" :src="getImageUrl(selectedFacility.image1)"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-0"
              :class="{ 'animate-fade-in': imagesLoaded }" :alt="selectedFacility.title || ''" />
          </div>

          <!-- Right Image -->
          <div class="w-1/2 h-40 md:h-52 lg:h-60 rounded-[20px] relative overflow-hidden group">
            <img v-if="selectedFacility?.image2" :src="getImageUrl(selectedFacility.image2)"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-0"
              :class="{ 'animate-fade-in-delay-1': imagesLoaded }" :alt="selectedFacility.title || ''" />
          </div>
        </div>

        <!-- Second Row - Grid layout -->
        <div class="grid grid-cols-3 lg:gap-10 md:gap-5">
          <!-- Text Content Cell -->
          <div class="w-full h-40 md:h-52 lg:h-60 flex flex-col justify-center gap-3">
            <h2 class="text-2xl font-bold">{{ selectedFacility.title }}</h2>
            <TextSection><span v-html="selectedFacility.description" class="line-clamp-4 font-light"></span>
            </TextSection>
          </div>

          <!-- Small Image Cell -->
          <div class="w-full h-40 md:h-52 lg:h-60 rounded-[20px] relative overflow-hidden group">
            <img v-if="selectedFacility?.image3" :src="getImageUrl(selectedFacility.image3)"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-0"
              :class="{ 'animate-fade-in-delay-2': imagesLoaded }" :alt="selectedFacility.title || ''" />
          </div>

          <!-- Tall Image Cell (spanning 2 rows) -->
          <div class="row-span-2 w-full h-full rounded-[20px] relative overflow-hidden group">
            <img v-if="selectedFacility?.image4" :src="getImageUrl(selectedFacility.image4)"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-0"
              :class="{ 'animate-fade-in-delay-3': imagesLoaded }" :alt="selectedFacility.title || ''" />
          </div>

          <!-- Bottom Row Images -->
          <div class="w-full h-40 md:h-52 lg:h-60 rounded-[20px] relative overflow-hidden group">
            <img v-if="selectedFacility?.image5" :src="getImageUrl(selectedFacility.image5)"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-0"
              :class="{ 'animate-fade-in-delay-4': imagesLoaded }" :alt="selectedFacility.title || ''" />
          </div>

          <div class="w-full h-40 md:h-52 lg:h-60 rounded-[20px] relative overflow-hidden group">
            <img v-if="selectedFacility?.image6" :src="getImageUrl(selectedFacility.image6)"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-0"
              :class="{ 'animate-fade-in-delay-5': imagesLoaded }" :alt="selectedFacility.title || ''" />
          </div>
        </div>
      </div>

      <!-- Mobile View -->
      <div class="w-full mt-10 grid grid-cols-1 gap-5 md:hidden">
        <template v-if="showAll">
          <div v-for="(item, index) in fasilitas" :key="index"
            class="w-full h-64 rounded-[20px] overflow-hidden relative group">
            <!-- Image with gradient overlay -->
            <img v-if="item.image1" :src="getImageUrl(item.image1)"
              class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
              :alt="item.title || ''" />
            <div class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10">
            </div>

            <!-- Content
            <div class="relative z-20 p-5 h-full flex flex-col justify-end">
              <h6 class="text-white font-semibold text-lg">{{ item.title }}</h6>
              <TextSection class="text-white/80 text-sm line-clamp-2"><span v-html="item?.description"></span></TextSection>
            </div> -->
          </div>
        </template>

        <template v-else>
          <!-- Single Facility View on Mobile -->
          <div class="space-y-5">
            <div class="p-5 bg-white rounded-[20px]">
              <h2 class="text-2xl font-bold">{{ selectedFacility?.title }}</h2>
              <TextSection class="mt-3"><span v-html="selectedFacility?.description"></span></TextSection>
            </div>

            <!-- .titles -->
            <div v-for="(img, idx) in [
              selectedFacility?.image1,
              selectedFacility?.image2,
              selectedFacility?.image3,
              selectedFacility?.image4
            ].filter(Boolean)" :key="idx" class="w-full h-64 rounded-[20px] overflow-hidden relative">
              <img :src="getImageUrl(img || '')" class="absolute inset-0 w-full h-full object-cover"
                :alt="`${selectedFacility?.title} image ${idx + 1}`" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>

#fasilitas-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

#fasilitas-scroll::-webkit-scrollbar {
  display: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease forwards;
}

.animate-fade-in-delay-1 {
  animation: fadeIn 0.6s ease forwards;
  animation-delay: 200ms;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 0.6s ease forwards;
  animation-delay: 400ms;
}

.animate-fade-in-delay-3 {
  animation: fadeIn 0.6s ease forwards;
  animation-delay: 600ms;
}

.animate-fade-in-delay-4 {
  animation: fadeIn 0.6s ease forwards;
  animation-delay: 800ms;
}

.animate-fade-in-delay-5 {
  animation: fadeIn 0.6s ease forwards;
  animation-delay: 1000ms;
}

.animate-fade-in-mobile {
  animation: fadeIn 0.6s ease forwards;
}
</style>
