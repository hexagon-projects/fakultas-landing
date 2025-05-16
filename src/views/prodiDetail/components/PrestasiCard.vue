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
    <div class="flex justify-between items-center gap-2 lg:gap-4 px-3">
      <p class="text-xs md:text-base lg:text-base line-clamp-2">{{ title || 'Prestasi' }}</p>
      <h3 class="text-[40px] lg:text-[46px] font-bold leading-tight ">{{ number || '01' }}</h3>
    </div>
    <div class="w-full h-48 md:h-52">
      <div :class="['w-full h-full group overflow-hidden', rounded]">
        <img :src="image" :alt="title" :class="['w-full h-full object-top object-cover group-hover:scale-105 transition duration-500', rounded]">
      </div>
    </div>
  </div>
</template>
