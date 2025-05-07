<script setup lang="ts">

defineProps<{
  isLoading?: boolean;
}>();
</script>

<template>
  <div class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <template v-if="isLoading">
      <div class="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gray-300 animate-pulse rounded-[8px] md:rounded-[16px] lg:rounded-[32px]"></div>
    </template>
    <template v-else>
      <div class="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] group overflow-hidden rounded-[8px] md:rounded-[16px] lg:rounded-[32px]">
        <img src="https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Universitas"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </div>
    </template>
  </div>
</template>
