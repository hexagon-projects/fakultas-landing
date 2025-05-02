<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import { useSanitize } from '@/composables/useSanitize';
import { ref, onMounted } from 'vue';

const { sanitizeHtml } = useSanitize()

const props = defineProps<{
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  index?: number;
}>();

const isVisible = ref(false);

onMounted(() => {
  const delay = 50 + (props.index || 0) * 100;
  setTimeout(() => {
    isVisible.value = true;
  }, delay);
});
</script>

<template>
  <div
    class="kegiatan-card w-full h-64 md:h-[268px] lg:h-72 rounded-[8px] md:rounded-[16px] lg:rounded-[32px] relative transition-all duration-500 card-hover-effect"
    :class="[isVisible ? 'card-visible' : 'card-hidden', `delay-${(index || 0) % 9}`]">
    <div class="w-full h-full rounded-[8px] md:rounded-[16px] lg:rounded-[32px] overflow-hidden">
      <img :src="image || 'https://via.placeholder.com/300'" :alt="title || 'Kegiatan Mahasiswa'"
        class="w-full h-full object-cover rounded-[8px] md:rounded-[16px] lg:rounded-[32px] transition-transform duration-500">
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-trasparent rounded-[8px] md:rounded-[16px] lg:rounded-[32px]">
    </div>
    <div class="absolute bottom-0 p-4 space-y-2 w-full">
      <TextSection class="text-white font-bold transition-all duration-300">{{ title || 'Judul Kegiatan' }}
      </TextSection>
      <TextSection class="text-white/40 transition-all duration-300"><span v-html="sanitizeHtml(description || 'Deskripsi Kegiatan')"></span>
      </TextSection>
      <div class="text-xs text-white/70 mt-1" v-if="date">{{ date }}</div>
    </div>
  </div>
</template>

<style scoped>
.kegiatan-card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.kegiatan-card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.kegiatan-card:hover img {
  transform: scale(1.05);
}

.card-visible {
  opacity: 1;
  transform: translateY(0);
}

.card-hidden {
  opacity: 0;
  transform: translateY(30px);
}

/* Fixed delay classes with proper sequencing */
.delay-0 {
  transition-delay: 50ms;
}

.delay-1 {
  transition-delay: 150ms;
}

.delay-2 {
  transition-delay: 250ms;
}

.delay-3 {
  transition-delay: 350ms;
}

.delay-4 {
  transition-delay: 450ms;
}

.delay-5 {
  transition-delay: 550ms;
}

.delay-6 {
  transition-delay: 650ms;
}

.delay-7 {
  transition-delay: 750ms;
}

.delay-8 {
  transition-delay: 850ms;
}
</style>
