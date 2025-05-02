<script setup lang="ts">
import { onMounted } from 'vue';
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

onMounted(() => {
  const slug = route.params.slug as string;
  postStore.fetchPostBySlug(slug);
});
</script>

<template>
  <MainLayout>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <template v-else-if="post">
      <HeroSection :post="post" />
      <BodySection :post="post" />
      <CTASection />
    </template>
    <div v-else>
      <p>Berita tidak ditemukan.</p>
    </div>
  </MainLayout>
</template>
