<script setup lang="ts">
import FacebookIcon from '@/assets/icons/fb.png'
import InstagramIcon from '@/assets/icons/instagram.png'
import TiktokIcon from '@/assets/icons/tik-tok.png'
import YoutubeIcon from '@/assets/icons/youtube.png'

defineProps<{
  name?: string
  title?: string
  image?: string
  facebook?: string
  instagram?: string
  youtube?: string
  tiktok?: string
}>()
</script>

<template>
  <!-- <div class="space-y-4 lg:space-y-6">
    <div
      class="w-full h-[40vh] md:h-[30vh] lg:h-[40vh] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden group"
    >
      <img
        :src="image || 'https://via.placeholder.com/300'"
        :alt="name || 'Dosen'"
        class="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
      />
    </div>
    <div class="space-y-2">
      <div class="h-fit md:h-14 lg:h-16">
        <h4 class="text-sm md:text-base lg:text-lg font-bold leading-tight">
          {{ name || 'Dr. Andi' }}
        </h4>
      </div>
      <h4 class="text-sm md:text-base lg:text-lg font-light">{{ title || 'Dosen Senior' }}</h4>
    </div>
    <div class="flex gap-4 md:gap-6" v-if="facebook || instagram || youtube || tiktok">
      <a v-if="facebook" :href="facebook" target="_blank" class="w-5 h-5">
        <img :src="FacebookIcon" alt="Facebook" class="w-full h-full object-contain" />
      </a>
      <a v-if="instagram" :href="instagram" target="_blank" class="w-5 h-5">
        <img :src="InstagramIcon" alt="Instagram" class="w-full h-full object-contain" />
      </a>
      <a v-if="youtube" :href="youtube" target="_blank" class="w-5 h-5">
        <img :src="YoutubeIcon" alt="YouTube" class="w-full h-full object-contain" />
      </a>
      <a v-if="tiktok" :href="tiktok" target="_blank" class="w-5 h-5">
        <img :src="TiktokIcon" alt="TikTok" class="w-full h-full object-contain" />
      </a>
    </div>
  </div> -->

  <div class="relative h-96">
    <img :src="image || 'https://via.placeholder.com/300'" :alt="name || 'Dosen'"
      class="inset-0 w-full h-full object-cover rounded-3xl" />
    <div class="absolute top-0 right-0">
      <div class="flex gap-4 md:gap-6 m-5" v-if="facebook || instagram || youtube || tiktok">
        <a v-if="facebook" :href="facebook" target="_blank" class="w-5 h-5">
          <img :src="FacebookIcon" alt="Facebook" class="w-full h-full object-contain" />
        </a>
        <a v-if="instagram" :href="instagram" target="_blank" class="w-5 h-5">
          <img :src="InstagramIcon" alt="Instagram" class="w-full h-full object-contain" />
        </a>
        <a v-if="youtube" :href="youtube" target="_blank" class="w-5 h-5">
          <img :src="YoutubeIcon" alt="YouTube" class="w-full h-full object-contain" />
        </a>
        <a v-if="tiktok" :href="tiktok" target="_blank" class="w-5 h-5">
          <img :src="TiktokIcon" alt="TikTok" class="w-full h-full object-contain" />
        </a>
      </div>
    </div>

    <div
      class="absolute z-10 h-[20%] md:h-[20%] lg:h-[25%] xl:h-[28%] w-full bottom-0 p-3 lg:p-6 bg-gradient-to-t from-white via-white/80 to-transparent rounded-b-[23px]">
      <div class="items-center justify-center max-h-10">
        <div class="self-stretch px-4 left-0 text-black text-[12px] md:text-[14px] lg:text-[18px] font-medium truncate">
          {{ name }}
        </div>
        <div class="self-stretch px-4 left-0 text-black/40 text-[10px] md:text-[12px] lg:text-[16px] font-normal truncate">
          {{ title || 'Dosen Senior' }}
        </div>
      </div>
    </div>
  </div>
</template>
