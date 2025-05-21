<script setup lang="ts">
import Gedung from '@/assets/gedung.jpg'

defineProps<{
  isLoading?: boolean;
}>();
</script>

<template>
  <div class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <template v-if="isLoading">
      <div class="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gray-300 animate-pulse rounded-[16px] md:rounded-[24px] lg:rounded-[32px]"></div>
    </template>
    <template v-else>
      <div class="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] group overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
        <img :src="Gedung"
          alt="Universitas"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </div>
    </template>
  </div>
</template>
