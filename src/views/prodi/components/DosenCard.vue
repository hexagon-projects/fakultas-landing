<script setup lang="ts">
import FacebookIcon from '@/assets/icons/fb.png';
import InstagramIcon from '@/assets/icons/instagram.png';
import TiktokIcon from '@/assets/icons/tik-tok.png';
import YoutubeIcon from '@/assets/icons/youtube.png';

defineProps<{
  name?: string;
  title?: string;
  image?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
}>();
</script>

<template>
  <div class="flex flex-col lg:flex-row-reverse gap-5 lg:gap-6 lg:bg-gradient-to-l lg:from-colorPrimary/30 lg:to-white rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
    <div
      class="w-full h-[40vh] md:h-[30vh] lg:h-[40vh] xl:h-[30vh] rounded-[8px] md:rounded-[16px] lg:rounded-[24px] overflow-hidden group">
      <img :src="image || 'https://via.placeholder.com/300'" :alt="name || 'Dosen'"
        class="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500">
    </div>
    <div class="flex flex-col justify-between gap-5 lg:gap-0 p-0 md:p-5 lg:p-6">
      <div class="space-y-2">
        <div class="h-fit md:h-14 lg:h-28 xl:h-24">
          <h4 class="text-sm md:text-base lg:text-lg font-bold leading-tight">{{ name || 'Dr. Andi' }}</h4>
        </div>
        <h4 class="text-xs md:text-sm lg:text-base font-light">{{ title || 'Dosen Senior' }}</h4>
      </div>
      <div class="flex gap-4 md:gap-6" v-if="facebook || instagram || youtube || tiktok">
        <a v-if="facebook" :href="facebook" target="_blank" class="w-5 h-5">
          <img :src="FacebookIcon" alt="Facebook" class="w-full h-full object-contain">
        </a>
        <a v-if="instagram" :href="instagram" target="_blank" class="w-5 h-5">
          <img :src="InstagramIcon" alt="Instagram" class="w-full h-full object-contain">
        </a>
        <a v-if="youtube" :href="youtube" target="_blank" class="w-5 h-5">
          <img :src="YoutubeIcon" alt="YouTube" class="w-full h-full object-contain">
        </a>
        <a v-if="tiktok" :href="tiktok" target="_blank" class="w-5 h-5">
          <img :src="TiktokIcon" alt="TikTok" class="w-full h-full object-contain">
        </a>
      </div>
    </div>
  </div>
</template>
