<script setup lang="ts">
import AgendaSection from '@/sections/agenda/AgendaSection.vue'
import ListAgenda from '@/sections/agenda/ListAgendaSection.vue'
import ListBeritaTerbaru from '@/sections/agenda/ListBeritaTerbaruSection.vue'
import CtaSection from '@/sections/general/CtaSection.vue'
import UserLayout from '@/layouts/UserLayout.vue'
</script>

<template>
  <UserLayout>
    <AgendaSection class="mt-[60px]" />
    <ListAgenda class="mt-[60px]" />
    <ListBeritaTerbaru />
    <CtaSection />
  </UserLayout>
</template>
