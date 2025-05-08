<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import { useSanitize } from '@/composables/useSanitize';
import type { Post } from '@/core/types/post';
import type SideBanner from '@/core/types/sidebanner';
import SectionLayout from '@/layouts/SectionLayout.vue';

const { sanitizeHtml } = useSanitize();

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  sidebanner?: SideBanner | null,
  post?: Post,
  loading?: boolean
}>()
</script>

<template>
  <SectionLayout>
    <template v-if="loading">
      <!-- Body Section Skeleton -->
      <div class="container mx-auto px-4 py-12 max-w-4xl">
        <div class="flex items-center mb-8">
          <div class="h-10 w-10 bg-gray-300 animate-pulse rounded-full mr-4"></div>
          <div>
            <div class="h-4 w-32 bg-gray-300 animate-pulse rounded mb-2"></div>
            <div class="h-3 w-24 bg-gray-300 animate-pulse rounded"></div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
          <div class="h-4 w-5/6 bg-gray-300 animate-pulse rounded"></div>
          <div class="h-4 w-2/3 bg-gray-300 animate-pulse rounded"></div>
          <div class="h-4 w-full bg-gray-300 animate-pulse rounded mt-6"></div>
          <div class="h-4 w-3/4 bg-gray-300 animate-pulse rounded"></div>
        </div>

        <div class="h-64 w-full bg-gray-300 animate-pulse rounded-lg my-8"></div>

        <div class="space-y-4">
          <div class="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
          <div class="h-4 w-5/6 bg-gray-300 animate-pulse rounded"></div>
          <div class="h-4 w-2/3 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </div>
    </template>

    <template v-else-if="post">
      <div class="w-full flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-6">
        <div class="w-full md:w-[70%]">
          <TextBody><span v-html="sanitizeHtml(post.content)"></span></TextBody>
        </div>

        <div class="w-full md:w-[30%] h-[50vh]" v-if="sidebanner?.image1">
          <img :src="getImageUrl(sidebanner?.image1)" :alt="sidebanner.title" class="w-full h-full object-cover rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
        </div>
      </div>
    </template>
  </SectionLayout>
</template>
