<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';
import KegiatanCard from '../components/KegiatanCard.vue';
import ButtonSection from '@/components/ButtonSection.vue';
import { ref, computed, nextTick } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import type { Organization } from '@/core/types/organisasi';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  organisasi: Organization[]
}>();

// const kegiatanData = [
//   {
//     id: 1,
//     title: "Pelatihan Robotik",
//     description: "Pelatihan dasar-dasar robotik untuk mahasiswa teknik",
//     image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "ukm",
//     date: "15 Jan 2024"
//   },
//   {
//     id: 2,
//     title: "Seminar Kewirausahaan",
//     description: "Belajar membangun bisnis dari founder startup sukses",
//     image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "organisasi",
//     date: "22 Feb 2024"
//   },
//   {
//     id: 3,
//     title: "HIMA Tech Week",
//     description: "Serangkaian acara teknologi dari HIMA Teknik",
//     image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "hima",
//     date: "5 Mar 2024"
//   },
//   {
//     id: 4,
//     title: "Komunitas Programming",
//     description: "Pertemuan rutin komunitas programming kampus",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "komunitas",
//     date: "12 Apr 2024"
//   },
//   {
//     id: 5,
//     title: "UKM Olahraga",
//     description: "Turnamen olahraga antar fakultas",
//     image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "ukm",
//     date: "18 Mei 2024"
//   },
//   {
//     id: 6,
//     title: "BEM Leadership Camp",
//     description: "Pelatihan kepemimpinan untuk pengurus BEM",
//     image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "organisasi",
//     date: "25 Jun 2024"
//   },
//   {
//     id: 7,
//     title: "Workshop Desain Grafis",
//     description: "Belajar dasar-dasar desain grafis untuk pemula",
//     image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "komunitas",
//     date: "3 Jul 2024"
//   },
//   {
//     id: 8,
//     title: "UKM Musik Pentas Seni",
//     description: "Pentas seni tahunan UKM Musik kampus",
//     image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "ukm",
//     date: "10 Agu 2024"
//   },
//   {
//     id: 9,
//     title: "HIMA Engineering Competition",
//     description: "Kompetisi teknik tingkat nasional",
//     image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "hima",
//     date: "17 Sep 2024"
//   }
// ];

// const activeFilter = ref("semua");
const visibleItems = ref(6);
// const itemsPerLoad = 3;
const refreshKey = ref(0);

const swiperModules = [Pagination, Navigation];

// const filteredKegiatan = computed(() => {
//   if (activeFilter.value === "semua") {
//     return kegiatanData;
//   } else {
//     return kegiatanData.filter(kegiatan => kegiatan.category === activeFilter.value);
//   }
// });

// const visibleFilteredKegiatan = computed(() => {
//   return filteredKegiatan.value.slice(0, visibleItems.value);
// });

// const setFilter = async (filter: string) => {
//   if (activeFilter.value === filter) return;

//   activeFilter.value = filter;
//   visibleItems.value = 6;

//   refreshKey.value++;
// };

// const loadMore = async () => {
//   const previousCount = visibleItems.value;
//   visibleItems.value += itemsPerLoad;

//   await nextTick();
//   refreshKey.value++;
// };

const showLoadMore = computed(() => {
  return visibleItems.value < props?.organisasi?.values.length;
});
</script>

<template>
  <SectionLayout>
    <div class="w-full flex flex-col gap-5 lg:gap-10">
      <div class="w-full flex flex-col gap-4 md:gap-5 lg:gap-6 justify-center items-center">
        <TitleSection :text="'Kegiatan Mahasiswa'"></TitleSection>
        <TextSection class="text-black/40">Fasilitas unggulan kami mendukung pengalaman belajar yang optimal.</TextSection>
      </div>

      <!-- <div class="w-full flex justify-center items-center overflow-x-auto pb-2">
        <div class="w-fit flex gap-2 lg:gap-4">
          <div @click="setFilter('semua')"
            :class="['rounded-full px-3 py-3 lg:px-6 lg:py-3 cursor-pointer transition-all duration-300', activeFilter === 'semua' ? 'bg-fakultas' : 'bg-text/50 hover:bg-text/70']">
            <TextSection class="text-white">Semua</TextSection>
          </div>
          <div @click="setFilter('ukm')"
            :class="['rounded-full px-3 py-3 lg:px-6 lg:py-3 cursor-pointer transition-all duration-300', activeFilter === 'ukm' ? 'bg-fakultas' : 'bg-text/50 hover:bg-text/70']">
            <TextSection class="text-white">Ukm</TextSection>
          </div>
          <div @click="setFilter('organisasi')"
            :class="['rounded-full px-3 py-3 lg:px-6 lg:py-3 cursor-pointer transition-all duration-300', activeFilter === 'organisasi' ? 'bg-fakultas' : 'bg-text/50 hover:bg-text/70']">
            <TextSection class="text-white">Organisasi</TextSection>
          </div>
          <div @click="setFilter('hima')"
            :class="['rounded-full px-3 py-3 lg:px-6 lg:py-3 cursor-pointer transition-all duration-300', activeFilter === 'hima' ? 'bg-fakultas' : 'bg-text/50 hover:bg-text/70']">
            <TextSection class="text-white">HIMA</TextSection>
          </div>
          <div @click="setFilter('komunitas')"
            :class="['rounded-full px-3 py-3 lg:px-6 lg:py-3 cursor-pointer transition-all duration-300', activeFilter === 'komunitas' ? 'bg-fakultas' : 'bg-text/50 hover:bg-text/70']">
            <TextSection class="text-white">Komunitas</TextSection>
          </div>
        </div>
      </div> -->
    </div>

    <!-- Tablet & Desktop -->
    <div class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
      <KegiatanCard
        v-for="(kegiatan, index) in organisasi"
        :key="`${kegiatan.id}-${refreshKey}`"
        :title="kegiatan.name"
        :description="kegiatan.description"
        :image="getImageUrl(kegiatan.image)"
        :index="index"
      />
    </div>

    <!-- Mobile Swiper -->
    <div class="md:hidden">
      <Swiper :modules="swiperModules" :pagination="{
        clickable: true,
        bulletClass: 'custom-bullet-org',
        bulletActiveClass: 'custom-bullet-org-active',
        dynamicBullets: true,
        dynamicMainBullets: 3
      }" :space-between="20" :slides-per-view="1.2" class="kegiatan-swiper">
        <SwiperSlide v-for="(kegiatan, index) in organisasi" :key="`${kegiatan.id}-${refreshKey}`">
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
  background: var(--fakultas-color, #AA2132);
  width: 40px;
  height: 6px;
}
</style>
