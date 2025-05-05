<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import FaqAnswer from './sections/FaqAnswer.vue';
import FaqQuestion from './sections/FaqQuestion.vue';
import CTASection from '@/components/sections/CTASection.vue';
import { useFaqStore } from '@/stores/faq';
import { onMounted, ref } from 'vue';

const faqStore = useFaqStore();
const isLoading = ref(true);

onMounted(async () => {
  try {
    await faqStore.fetchFaq();
  } catch (error) {
    console.error('Error loading FAQs:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <MainLayout>
    <FaqQuestion :is-loading="isLoading" />
    <FaqAnswer :faqs="faqStore.faqs" :loading="isLoading" :error="faqStore.error" />
    <CTASection />
  </MainLayout>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
