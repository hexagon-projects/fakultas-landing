<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePostStore } from '@/stores/post';

import BodySection from '@/views/beritaDetail/sections/BeritaDetailBody.vue';
import HeroSection from '@/views/beritaDetail/sections/BeritaDetailHero.vue';
import CTASection from '@/components/sections/CTASection.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const route = useRoute();
const postStore = usePostStore();
const { currentPost: post, loading, error } = storeToRefs(postStore);

const updateTitle = () => {
  if (postStore.currentPost?.title) {
    document.title = `${postStore.currentPost.title} - ${import.meta.env.VITE_APP_NAME}`;
  }
};

onMounted(() => {
  const slug = route.params.slug as string;
  postStore.fetchPostBySlug(slug);
  updateTitle();
});

watch(() => postStore.currentPost, updateTitle);
</script>

<template>
  <MainLayout>
    <template v-if="loading">
      <HeroSection :loading="true" />
      <BodySection :loading="true" />
      <div class="bg-gray-100 py-16">
        <div class="container mx-auto px-4 text-center">
          <div class="h-8 w-1/2 mx-auto bg-gray-300 animate-pulse rounded mb-6"></div>
          <div class="h-12 w-48 mx-auto bg-gray-300 animate-pulse rounded"></div>
        </div>
      </div>
    </template>

    <div v-else-if="error" class="container mx-auto px-4 py-16 text-center">
      <div class="text-red-500">{{ error }}</div>
    </div>

    <template v-else-if="post">
      <HeroSection :post="post" />
      <BodySection :post="post" />
      <CTASection />
    </template>

    <div v-else class="container mx-auto px-4 py-16 text-center">
      <p>Berita tidak ditemukan.</p>
    </div>
  </MainLayout>
</template>
