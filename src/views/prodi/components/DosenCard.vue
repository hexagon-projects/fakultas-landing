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
    <div class="space-y-4 lg:space-y-6">
      <div class="w-full h-[40vh] md:h-[30vh] lg:h-[40vh] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden group">
        <img
          :src="image || 'https://via.placeholder.com/300'"
          :alt="name || 'Dosen'"
          class="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
        >
      </div>
      <div class="space-y-2">
          <h4 class="text-sm md:text-base lg:text-lg font-bold leading-tight">{{ name || 'Dr. Andi' }}</h4>
          <h4 class="text-sm md:text-base lg:text-lg font-light">{{ title || 'Dosen Senior' }}</h4>
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
</template>
