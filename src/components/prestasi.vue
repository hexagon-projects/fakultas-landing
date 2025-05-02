<script setup lang="ts">
import { getImageUrl } from '@/core/helpers/helper';
import { berandaStore } from '@/stores'
</script>
<template>
  <!-- Desktop -->
  <div class="w-3/4 mx-auto hidden lg:block" v-for="(data, index) in berandaStore.prestasiData" :key="index">
    <div class="w-full h-40" v-if="index % 2 === 0">
      <div class="w-1/2 h-full justify-self-end">
        <div class="flex items-end justify-between">
          <h4 class="">{{ data.title }}</h4>
          <h2 class="text-4xl font-bold">{{ index + 1 }}</h2>
        </div>
        <img :src="getImageUrl(data.image)" class="w-full h-full bg-gray-300 rounded-r-lg object-cover"></img>
      </div>
    </div>
    <div class="w-full h-40" v-else>
      <div class="w-1/2 h-full justify-self-start">
        <div class="flex items-end justify-between">
          <h4 class="">{{ data.title }}</h4>
          <h2 class="text-4xl font-bold">{{ index + 1 }}</h2>
        </div>
          <img :src="getImageUrl(data.image)" class="w-full h-full bg-gray-300 rounded-l-lg object-cover"></img>
      </div>
    </div>
  </div>

  <!-- Mobile -->
  <div class="lg:hidden px-10 grid gap-10">
    <template v-for="(data, index) in berandaStore.prestasiData" :key="data.id">
      <div>
        <div>
          <div class="flex h-full justify-between items-end">
            <h4 class="text-xl font-bold">{{ data.title }}</h4>
            <h2 class="text-3xl font-bold">{{ index + 1 }}</h2>
          </div>
        </div>
        <img :src="getImageUrl(data.image)" alt="" class="w-full bg-gray-200 rounded-lg h-40">
      </div>
    </template>
  </div>
</template>
