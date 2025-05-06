<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';
import { tentangStore } from '@/stores'
import { computed, onMounted } from 'vue';

const historyTimeline = computed(() => {
  return tentangStore.timelineData.map((item) => ({
    id: String(item.id),
    label: item.title,
    description: item.description,
  }));
});

onMounted(async () => {
  await tentangStore.getInitialData()
})

</script>

<template>
  <SectionLayout>
    <div class="relative">
      <div class="lg:w-1/2 w-full h-40 bg-gray-200 lg:sticky top-40"></div>
      <div class="lg:w-1/2 w-full mt-10 md:mt-20 lg:mt-0">
        <Timeline :items="historyTimeline" />
      </div>
    </div>
  </SectionLayout>
</template>
