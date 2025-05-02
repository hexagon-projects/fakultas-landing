<script lang="ts" setup>
import { useDateFormat } from '@/composables/useDateFormat';
import type { Post } from '@/core/types/post';
import { useRouter } from 'vue-router';

const { formatDate } = useDateFormat();
const router = useRouter();
const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

const handlePostClick = (post: Post) => {
  if (post.slug) {
    router.push(`/berita/${post.slug}`);
  }
};

defineProps<{
  posts?: Post[]
}>();
</script>

<template>
  <div class="space-y-4">
    <div
      v-for="post in posts"
      :key="post.id"
      class="w-full h-fit flex justify-between items-center gap-4 cursor-pointer p-2 rounded-lg group transition hover:-translate-y-2 duration-500"
      @click="handlePostClick(post)"
    >
      <div class="w-full h-[140px] md:w-[40%] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] overflow-hidden">
        <img
          :src="getImageUrl(post.image)"
          :alt="post.title"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        >
      </div>

      <div class="w-full md:w-[60%] space-y-2">
        <div class="w-fit px-2 py-1 bg-white rounded-full">
          <p class="text-[12px] text-fakultas">Edukasi</p>
        </div>

        <h4 class="text-[10px] md:text-[12px] lg:text-[16px] font-bold line-clamp-2">{{ post.title }}</h4>

        <div class="w-full border-b border-black/10"></div>

        <div>
          <p class="text-[8px] md:text-[10px] lg:text-[12px] text-[#141219]">
            {{ formatDate(post.created_at) }} | 4 min read
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
