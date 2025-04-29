<script setup lang="ts">
import Navbar from '@/components/navbar/Navbar.vue'
import AgendaSection from '@/sections/agenda/AgendaSection.vue'
import ListAgenda from '@/sections/agenda/ListAgendaSection.vue'
import ListBeritaTerbaru from '@/sections/agenda/ListBeritaTerbaruSection.vue'
import CtaSection from '@/sections/general/CtaSection.vue'
</script>

<template>
  <Navbar />
  <AgendaSection class="mt-[60px]" />
  <ListAgenda class="mt-[60px]" />
  <ListBeritaTerbaru />
  <CtaSection />
</template>
