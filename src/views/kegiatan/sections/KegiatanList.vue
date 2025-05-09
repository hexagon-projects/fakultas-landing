<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';
import ButtonSection from '@/components/ButtonSection.vue';
import { ref, computed, nextTick } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import type { Organization } from '@/core/types/organisasi';
import KegiatanCard from '@/views/prodiDetail/components/KegiatanCard.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  organisasi: Organization[]
}>();

const activeFilter = ref("semua");
const visibleItems = ref(6);
const itemsPerLoad = 3;
const refreshKey = ref(0);

const filteredOrganisasi = computed(() => {
  if (activeFilter.value === "semua") {
    return props.organisasi;
  } else {
    return props.organisasi.filter(org => org.category.toLowerCase() === activeFilter.value.toLowerCase());
  }
});

const visibleFilteredOrganisasi = computed(() => {
  return filteredOrganisasi.value.slice(0, visibleItems.value);
});

const setFilter = async (filter: string) => {
  if (activeFilter.value === filter) return;

  activeFilter.value = filter;
  visibleItems.value = 6;

  refreshKey.value++;
};

const loadMore = async () => {
  const previousCount = visibleItems.value;
  visibleItems.value += itemsPerLoad;

  await nextTick();
  refreshKey.value++;
};

const showLoadMore = computed(() => {
  return visibleItems.value < filteredOrganisasi.value.length;
});
</script>

<template>
  <SectionLayout>
    <div class="w-full flex flex-col gap-5 lg:gap-10">
      <div class="w-full flex flex-col gap-4 md:gap-5 lg:gap-6 justify-center items-center">
        <TitleSection :text="'Kegiatan Mahasiswa'"></TitleSection>
        <TextSection class="text-black/40">Fasilitas unggulan kami mendukung pengalaman belajar yang optimal.</TextSection>
      </div>

      <div class="w-full flex justify-center items-center overflow-x-auto pb-2">
        <div class="w-fit flex gap-2 lg:gap-4">
          <div @click="setFilter('semua')"
            :class="['rounded-full px-3 py-3 lg:px-6 lg:py-3 cursor-pointer transition-all duration-300', activeFilter === 'semua' ? 'bg-colorPrimary' : 'bg-text/50 hover:bg-text/70']">
            <p class="text-[10px] md:text-[12px] lg:text-[14px] text-white">Semua</p>
          </div>
          <div @click="setFilter('kegiatan')"
            :class="['rounded-full px-3 py-3 lg:px-6 lg:py-3 cursor-pointer transition-all duration-300', activeFilter === 'kegiatan' ? 'bg-colorPrimary' : 'bg-text/50 hover:bg-text/70']">
            <p class="text-[10px] md:text-[12px] lg:text-[14px] text-white">Kegiatan</p>
          </div>
          <div @click="setFilter('organisasi')"
            :class="['rounded-full px-3 py-3 lg:px-6 lg:py-3 cursor-pointer transition-all duration-300', activeFilter === 'organisasi' ? 'bg-colorPrimary' : 'bg-text/50 hover:bg-text/70']">
            <p class="text-[10px] md:text-[12px] lg:text-[14px] text-white">Organisasi</p>
          </div>
          <div @click="setFilter('komunitas')"
            :class="['rounded-full px-3 py-3 lg:px-6 lg:py-3 cursor-pointer transition-all duration-300', activeFilter === 'komunitas' ? 'bg-colorPrimary' : 'bg-text/50 hover:bg-text/70']">
            <p class="text-[10px] md:text-[12px] lg:text-[14px] text-white">Komunitas</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tablet & Desktop -->
    <div class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
      <KegiatanCard
        v-for="(kegiatan, index) in visibleFilteredOrganisasi"
        :key="`${kegiatan.id}-${refreshKey}`"
        :title="kegiatan.name"
        :description="kegiatan.description"
        :image="getImageUrl(kegiatan.image)"
        :index="index"
      />
    </div>

    <!-- Mobile Swiper -->
    <div class="md:hidden">
      <Swiper :modules="[Autoplay, Pagination]" :pagination="{
        clickable: true,
        bulletClass: 'custom-bullet-org',
        bulletActiveClass: 'custom-bullet-org-active',
        dynamicBullets: true,
        dynamicMainBullets: 3
      }" :space-between="20" :slides-per-view="1.2" class="kegiatan-swiper">
        <SwiperSlide v-for="(kegiatan, index) in filteredOrganisasi" :key="`${kegiatan.id}-${refreshKey}`">
          <KegiatanCard
            :title="kegiatan.name"
            :description="kegiatan.description"
            :image="getImageUrl(kegiatan.image)"
            :index="index"
          />
        </SwiperSlide>
      </Swiper>
    </div>

    <div v-if="showLoadMore" class="w-full flex justify-center items-center mt-8">
      <ButtonSection @click="loadMore" class="hover:scale-105 transition-transform duration-300">Load More</ButtonSection>
    </div>
  </SectionLayout>
</template>

<style>
.swiper-pagination {
  position: relative;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem;
}

.custom-bullet-org {
  width: 40px;
  height: 6px;
  display: inline-block;
  border-radius: 3px;
  background: #DDD;
  opacity: 1;
  cursor: pointer;
  transition: all 0.3s ease;
}

.custom-bullet-org-active {
  background: rgb(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b));
  width: 40px;
  height: 6px;
}
</style>
