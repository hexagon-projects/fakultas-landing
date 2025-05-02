<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import type { Location } from '@/core/types/location';

defineProps<{
  location: Location
}>();
</script>

<template>
  <div class="space-y-4 lg:space-y-6">
    <div class="w-full lg:h-96 group overflow-hidden rounded-[8px] md:rounded-[16px] lg:rounded-[32px]">
      <img :src="location.image" :alt="location.name"
        class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
    </div>
    <div class="space-y-2 lg:space-y-4">
      <h4 class="text-[16px] lg:text-[32px] font-bold leading-tight">{{ location.name }}</h4>
      <TextBody>{{ location.address }}</TextBody>
      <!-- <TextBody>{{ location.tagline }}</TextBody> -->
    </div>
    <TextBody class="hover:text-colorPrimary cursor-pointer transition duration-500">Dapatkan Arah &gt;</TextBody>
  </div>
</template>
