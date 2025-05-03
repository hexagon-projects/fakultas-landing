<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import FaqAnswer from './sections/FaqAnswer.vue'
import FaqQuestion from './sections/FaqQuestion.vue'
import CTASection from '@/components/sections/CTASection.vue'
import { useFaqStore } from '@/stores/faq'
import { onMounted } from 'vue'
import Loading from '@/components/Loading.vue'

const faqStore = useFaqStore()

onMounted(async () => {
  faqStore.setLoading(true) // aktifkan loading
  await faqStore.fetchFaq()

  // Delay 3 detik
  setTimeout(() => {
    faqStore.setLoading(false) // nonaktifkan loading setelah delay
  }, 3000)
})
</script>

<template>
  <MainLayout>
    <Loading v-if="faqStore.loading" class="-mt-[125px]" />

    <template v-else>
      <FaqQuestion />
      <FaqAnswer :faqs="faqStore.faqs" :loading="faqStore.loading" :error="faqStore.error" />
      <CTASection />
    </template>
  </MainLayout>
</template>
