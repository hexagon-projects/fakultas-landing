<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import FaqAnswer from './sections/FaqAnswer.vue';
import FaqQuestion from './sections/FaqQuestion.vue';
import CTASection from '@/components/sections/CTASection.vue';
import { useFaqStore } from '@/stores/faq';
import { onMounted } from 'vue';

const faqStore = useFaqStore();

onMounted(async () => {
  await faqStore.fetchFaq();
});
</script>

<template>
  <MainLayout>
    <FaqQuestion />
    <FaqAnswer :faqs="faqStore.faqs" :loading="faqStore.loading" :error="faqStore.error" />
    <CTASection />
  </MainLayout>
</template>
