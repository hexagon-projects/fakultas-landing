<script setup lang="ts">
import Navbar from '@/components/navbar/Navbar.vue'
import CtaSection from '@/sections/general/CtaSection.vue'
import FaqJawabanSection from '@/sections/faq/FaqJawabanSection.vue'
import FaqPertanyaanSection from '@/sections/faq/FaqPertanyaanSection.vue'
</script>

<template>
  <Navbar />

  <FaqPertanyaanSection class="-mt-10" />
  <FaqJawabanSection class="-mt-20 mx-4" />
  <CtaSection />
</template>
