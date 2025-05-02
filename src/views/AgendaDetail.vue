<script setup lang="ts">
import Navbar from '@/components/navbar/Navbar.vue'
import AgendaDetailHeroSection from '@/sections/AgendaDetail/AgendaDetailHeroSection.vue'
import AgendaDetailMenuSection from '@/sections/agendaDetail/AgendaDetailMenuSection.vue'
import CtaSection from '@/sections/general/CtaSection.vue'
import UserLayout from '@/layouts/UserLayout.vue'
</script>

<template>
  <UserLayout>
    <AgendaDetailHeroSection class="mt-[100px]" />
    <AgendaDetailMenuSection />
    <CtaSection />
  </UserLayout>
</template>
