<script setup lang="ts">
import AgendaCard from '@/components/AgendaCard.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Agenda } from '@/core/types/agenda';
import SectionLayout from '@/layouts/SectionLayout.vue';
// import { ref, nextTick } from 'vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  agenda: Agenda[]
}>();

// const activeFilter = ref("semua");
// const refreshKey = ref(0);

// const agendaData = [
//   {
//     id: 1,
//     kategori: "seminar",
//     judul: "Seminar Kewirausahaan Digital",
//     tanggal: "15 Januari 2024",
//     lokasi: "Auditorium Kampus A",
//     gambar: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop",
//     deskripsi: "Pelajari strategi membangun bisnis digital dari para founder startup sukses dengan pengalaman lebih dari 5 tahun di industri."
//   },
//   {
//     id: 2,
//     kategori: "webinar",
//     judul: "Webinar AI untuk Pemula",
//     tanggal: "22 Februari 2024",
//     lokasi: "Online via Zoom",
//     gambar: "https://images.unsplash.com/photo-1620712943543-bq=80&w=1965&auto=format&fit=crop",
//     deskripsi: "Pengenalan dasar Artificial Intelligence dan penerapannya dalam berbagai bidang industri untuk mahasiswa pemula."
//   },
//   {
//     id: 3,
//     kategori: "lomba",
//     judul: "Hackathon Nasional 2024",
//     tanggal: "5 Maret 2024",
//     lokasi: "Gedung Serba Guna Kampus",
//     gambar: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
//     deskripsi: "Kompetisi pengembangan aplikasi selama 24 jam dengan total hadiah Rp 50 juta untuk tim terbaik."
//   },
//   {
//     id: 4,
//     kategori: "seminar",
//     judul: "Seminar Karir di Era Digital",
//     tanggal: "12 April 2024",
//     lokasi: "Ruang Seminar Fakultas",
//     gambar: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?q=80&w=2070&auto=format&fit=crop",
//     deskripsi: "Bagaimana mempersiapkan karir yang sukses di tengah transformasi digital yang terjadi saat ini."
//   },
//   {
//     id: 5,
//     kategori: "webinar",
//     judul: "Webinar Data Science",
//     tanggal: "18 Mei 2024",
//     lokasi: "Online via Google Meet",
//     gambar: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
//     deskripsi: "Belajar teknik analisis data dasar untuk penelitian dan pengambilan keputusan bisnis."
//   }
// ];

// const filteredAgenda = ref(agendaData);

// const setFilter = async (filter: string) => {
//   if (activeFilter.value === filter) return;

//   activeFilter.value = filter;
//   if (filter === "semua") {
//     filteredAgenda.value = agendaData;
//   } else {
//     filteredAgenda.value = agendaData.filter(item => item.kategori === filter);
//   }

//   await nextTick();
//   refreshKey.value++;
// };
</script>

<template>
  <SectionLayout>
    <div class="w-full flex flex-col gap-5 lg:gap-10">
      <div class="w-full flex flex-col gap-4 md:gap-5 lg:gap-6 justify-center items-center">
        <TitleSection :text="'Agenda'"></TitleSection>
        <TextSection>Dapatkan informasi lebih lanjut tentang acara kami.</TextSection>
      </div>

      <!-- <div class="w-full flex justify-center items-center">
        <div class="w-fit flex gap-2 lg:gap-4">
          <div @click="setFilter('semua')"
            :class="['rounded-full px-3 py-3 lg:px-6 lg:py-3 cursor-pointer transition-all duration-300', activeFilter === 'semua' ? 'bg-fakultas' : 'bg-text/50 hover:bg-text/70']">
            <TextSection class="text-white">Semua</TextSection>
          </div>
          <div @click="setFilter('seminar')"
            :class="['rounded-full px-3 py-3 lg:px-6 lg:py-3 cursor-pointer transition-all duration-300', activeFilter === 'seminar' ? 'bg-fakultas' : 'bg-text/50 hover:bg-text/70']">
            <TextSection class="text-white">Seminar</TextSection>
          </div>
          <div @click="setFilter('webinar')"
            :class="['rounded-full px-3 py-3 lg:px-6 lg:py-3 cursor-pointer transition-all duration-300', activeFilter === 'webinar' ? 'bg-fakultas' : 'bg-text/50 hover:bg-text/70']">
            <TextSection class="text-white">Webinar</TextSection>
          </div>
          <div @click="setFilter('lomba')"
            :class="['rounded-full px-3 py-3 lg:px-6 lg:py-3 cursor-pointer transition-all duration-300', activeFilter === 'lomba' ? 'bg-fakultas' : 'bg-text/50 hover:bg-text/70']">
            <TextSection class="text-white">Lomba</TextSection>
          </div>
        </div>
      </div> -->

      <div class="w-full flex justify-center items-center">
        <div class="w-full md:w-3/4 lg:w-[70%] grid grid-cols-1 gap-4 md:gap-5 lg:gap-6">
          <AgendaCard
            v-for="(agenda, index) in agenda"
            :key="`${agenda.id}`"
            :judul="agenda.title"
            :tanggal="agenda.end_date"
            :lokasi="agenda.location"
            :gambar="getImageUrl(agenda.image)"
            :deskripsi="agenda.description"
            :index="index"
          />
          <!-- <AgendaCard
            v-for="(agenda, index) in agenda"
            :key="`${agenda.id}-${refreshKey}`"
            :kategori="agenda.kategori"
            :judul="agenda.judul"
            :tanggal="agenda.tanggal"
            :lokasi="agenda.lokasi"
            :gambar="agenda.gambar"
            :deskripsi="agenda.deskripsi"
            :index="index"
          /> -->
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
