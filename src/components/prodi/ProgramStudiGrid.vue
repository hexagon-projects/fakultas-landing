<script setup lang="ts">
interface ProgramStudi {
  title: string;
  subtitle: string;
}

const programStudiList: ProgramStudi[] = [
  { title: "Program Studi", subtitle: "Akreditasi" },
  { title: "Program Studi", subtitle: "Daftar" },
  { title: "Program Studi", subtitle: "Daftar" },
  { title: "Program Studi", subtitle: "Daftar" },
  { title: "Program Studi", subtitle: "Daftar" },
  { title: "Program Studi", subtitle: "Daftar" },
];
</script>

<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      <div 
        v-for="(item, index) in programStudiList" 
        :key="index"
        class="bg-white rounded-lg md:rounded-2xl lg:rounded-4xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 space-y-4"
      >
        <h2 class="text-lg lg:text-xl font-semibold">{{ item.title }}</h2>
        <p class="text-base text-gray-600">{{ item.subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>