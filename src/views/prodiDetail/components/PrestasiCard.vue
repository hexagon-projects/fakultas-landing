<script lang="ts" setup>

defineProps<{
  rounded?: string
  title?: string
  image?: string
  description?: string
  number?: string
}>();
</script>

<template>
  <div>
    <div class="flex justify-between items-center px-4">
      <p class="text-base lg:text-lg">{{ title || 'Prestasi' }}</p>
      <h3 class="text-[40px] lg:text-[46px] font-bold leading-tight">{{ number || '01' }}</h3>
    </div>
    <div class="w-full h-44 md:h-52">
      <div :class="['w-full h-full group overflow-hidden', rounded]">
        <img :src="image" :alt="title" :class="['w-full h-full object-cover group-hover:scale-105 transition duration-500', rounded]">
      </div>
    </div>
  </div>
</template>
