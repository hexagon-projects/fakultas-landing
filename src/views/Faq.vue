<script setup lang="ts">
import CtaSection from '@/sections/general/CtaSection.vue'
import FaqJawabanSection from '@/sections/faq/FaqJawabanSection.vue'
import FaqPertanyaanSection from '@/sections/faq/FaqPertanyaanSection.vue'
import UserLayout from '@/layouts/UserLayout.vue'
</script>

<template>
  <UserLayout>
    <FaqPertanyaanSection class="-mt-10" />
    <FaqJawabanSection class="-mt-20 mx-4" />
    <CtaSection />
  </UserLayout>
</template>
