<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import type { Post } from '@/core/types/post';
import { useSanitize } from '@/composables/useSanitize';
import { computed } from 'vue';
import { useClipboard } from '@vueuse/core';
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router';
import 'vue3-toastify/dist/index.css';

import CopyIcon from '@/assets/icons/copy.png';
import WhatsappIcon from '@/assets/icons/wa.png';
import FacebookIcon from '@/assets/icons/fb.png';
import TwitterIcon from '@/assets/icons/x.png';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;
const router = useRouter();

const { copy, isSupported: isCopySupported } = useClipboard();
const { sanitizeHtml } = useSanitize();

const props = defineProps<{
  berita: Post[];
  isLoading?: boolean;
}>();

const firstBerita = computed(() => props.berita?.[0]);
const currentUrl = computed(() => window.location.href);

const formatDate = (dateString: string | null) => {
  if (!dateString) return '11 Januari 2022';
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const goToDetail = () => {
  if (firstBerita.value) {
    const identifier = firstBerita.value.slug;
    router.push({
      name: 'beritaDetail',
      params: { slug: identifier }
    });
  }
};

const shareTo = (platform: string) => {
  if (!firstBerita.value) return;

  const title = firstBerita.value.title;
  const url = currentUrl.value;
  const text = `${title} - Baca selengkapnya di: ${url}`;

  switch (platform) {
    case 'copy':
      if (isCopySupported) {
        copy(url);
        toast.success('Link berhasil disalin!', { autoClose: 2000 });
      } else {
        toast.error('Browser tidak mendukung copy link', { autoClose: 2000 });
      }
      break;
    case 'whatsapp':
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
      break;
    case 'facebook':
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
      break;
    case 'twitter':
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
      break;
    default:
      break;
  }
};
</script>

<template>
  <div class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="w-full min-h-full flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20">
      <template v-if="isLoading">
        <!-- Left Column Skeleton -->
        <div class="w-full min-h-full md:w-1/2 flex flex-col justify-between space-y-4 lg:space-y-6">
          <div class="space-y-4 lg:space-y-6">
            <div class="h-4 w-32 bg-gray-300 animate-pulse rounded"></div>
            <div class="h-12 w-full bg-gray-300 animate-pulse rounded-lg"></div>
            <div class="hidden md:block space-y-2">
              <div class="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
              <div class="h-4 w-5/6 bg-gray-300 animate-pulse rounded"></div>
              <div class="h-4 w-2/3 bg-gray-300 animate-pulse rounded"></div>
            </div>
            <div class="w-full h-48 md:hidden bg-gray-300 animate-pulse rounded-lg"></div>
          </div>

          <div class="space-y-4 lg:space-y-6">
            <div class="hidden md:block h-12 w-40 bg-gray-300 animate-pulse rounded-lg"></div>
            <div class="space-y-4 lg:space-y-4">
              <div class="h-4 w-48 bg-gray-300 animate-pulse rounded"></div>
              <div class="h-4 w-32 bg-gray-300 animate-pulse rounded"></div>
              <div class="flex gap-4">
                <div v-for="i in 4" :key="i" class="w-6 h-6 bg-gray-300 animate-pulse rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column Skeleton -->
        <div class="hidden md:block w-full h-full md:w-1/2 bg-gray-300 animate-pulse rounded-lg"></div>
      </template>
      <template v-else>
        <div class="w-full min-h-full md:w-1/2 flex flex-col justify-between space-y-4 lg:space-y-6">
          <div class="space-y-4 lg:space-y-6">
            <router-link to="/" class="text-base">Beranda > <span><router-link to="/berita"> Berita</router-link></span></router-link>
            <h1 class="text-[16px] md:text-[24px] lg:text-[32px] font-bold" v-if="firstBerita"><span v-html="firstBerita?.title"></span></h1>
            <TextSection class="hidden md:block"><span class="line-clamp-4" v-html="sanitizeHtml(firstBerita?.content || firstBerita?.title)"></span></TextSection>
            <p class="text-[12px] lg:text-[14px] md:hidden">{{ formatDate(firstBerita?.publish) }} • 4 Menit Baca</p>
            <div class="w-full h-full rounded-[16px] md:rounded-[24px] lg:rounded-[32px] group overflow-hidden" @click="goToDetail">
              <img
                :src="getImageUrl(firstBerita?.image)"
                :alt="firstBerita?.title || 'Gambar berita'"
                class="w-full h-full group-hover:scale-105 transition duration-500 md:hidden cursor-pointer"
              >
            </div>
          </div>

          <div class="space-y-4 lg:space-y-6">
            <InteractiveHoverButton @click="goToDetail" :text="'Selengkapnya'" class="hidden md:block"></InteractiveHoverButton>
            <div class="space-y-4 lg:space-y-4">
              <p class="text-[12px] lg:text-[14px] hidden md:block">{{ formatDate(firstBerita?.publish) }} • 4 Menit Baca</p>
              <p class="text-base font-bold">Bagikan artikel ini</p>
              <div class="flex gap-4">
                <button
                  @click="shareTo('copy')"
                  class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Salin tautan"
                >
                  <img :src="CopyIcon" alt="Salin tautan" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                </button>
                <button
                  @click="shareTo('whatsapp')"
                  class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Bagikan ke WhatsApp"
                >
                  <img :src="WhatsappIcon" alt="WhatsApp" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                </button>
                <button
                  @click="shareTo('facebook')"
                  class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Bagikan ke Facebook"
                >
                  <img :src="FacebookIcon" alt="Facebook" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                </button>
                <button
                  @click="shareTo('twitter')"
                  class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Bagikan ke Twitter"
                >
                  <img :src="TwitterIcon" alt="Twitter" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full h-full md:w-1/2 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] group overflow-hidden" @click="goToDetail">
          <img
            :src="getImageUrl(firstBerita?.image)"
            :alt="firstBerita?.title || 'Gambar berita'"
            class="w-full h-full group-hover:scale-105 transition duration-500 hidden md:block cursor-pointer"
          >
        </div>
      </template>
    </div>
  </div>
</template>
