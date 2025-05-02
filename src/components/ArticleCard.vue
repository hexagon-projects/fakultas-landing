<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
  kategori?: string,
  judul?: string,
  tanggal?: string | Date,
  waktuBaca?: string,
  gambar?: string,
  slug?: string
}>();

const formatTanggal = computed(() => {
  if (!props.tanggal) return '';

  const date = typeof props.tanggal === 'string' ? new Date(props.tanggal) : props.tanggal;

  if (isNaN(date.getTime())) return props.tanggal.toString();

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  return date.toLocaleDateString('id-ID', options);
});

const navigateToDetail = () => {
  if (props.slug) {
    router.push({ name: 'beritaDetail', params: { slug: props.slug } });
  }
};
</script>

<template>
  <div
    class="flex md:flex-col p-3 lg:p-6 gap-4 lg:gap-6 bg-white rounded-[6px] md:rounded-[12px] lg:rounded-[24px] cursor-pointer shadow-gray-300/5 hover:shadow-black/5 shadow-xl hover:shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] transition-all duration-500 hover:-translate-y-2"
    @click="navigateToDetail"
  >
    <div class="w-[50%] md:w-full h-40 md:h-50 lg:h-60 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] overflow-hidden">
      <img
        :src="gambar"
        alt="Gambar Berita"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      >
    </div>

    <div class="w-[60%] md:w-full space-y-4 lg:space-y-4">
      <div class="w-fit py-2 px-5 bg-[#F5F2FF] rounded-[6px] md:rounded-[12px] lg:rounded-[24px]">
        <p class="text-fakultas text-sm font-bold">{{ kategori || 'Berita' }}</p>
      </div>
      <div>
        <p class="text-sm md:text-base lg:text-lg font-bold">{{ judul }}</p>
      </div>
      <p class="text-xs md:text-sm lg:text-base">{{ formatTanggal }} | {{ waktuBaca || '4 menit baca' }}</p>
    </div>
  </div>
</template>
