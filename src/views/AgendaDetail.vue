<script setup lang="ts">
import Navbar from '@/components/navbar/Navbar.vue'
import AgendaDetailHeroSection from '@/sections/AgendaDetail/AgendaDetailHeroSection.vue'
import AgendaDetailMenuSection from '@/sections/agendaDetail/AgendaDetailMenuSection.vue'
import CtaSection from '@/sections/general/CtaSection.vue'
</script>

<template>
  <Navbar />
  <AgendaDetailHeroSection class="mt-[100px]" />
  <AgendaDetailMenuSection />

  <CtaSection />
</template>
