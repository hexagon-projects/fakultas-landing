<script setup lang="ts">
import { useSanitize } from '@/composables/useSanitize';
import ButtonSection from './ButtonSection.vue';
import TextBody from './TextBody.vue';
import { ref, onMounted } from 'vue';
import router from '@/router';
import InteractiveHoverButton from './ui/interactive-hover-button/InteractiveHoverButton.vue';

const { sanitizeHtml } = useSanitize()

const props = defineProps<{
  kategori?: string,
  judul?: string,
  slug?: string,
  tanggal?: string,
  lokasi?: string,
  gambar?: string,
  deskripsi?: string,
  index?: number
}>();

const navigateToDetail = (slug: string) => {
  router.push({ name: 'agendaDetail', params: { slug } });
};

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
    class="agenda-card w-full max-h-fit flex flex-col md:flex-row p-3 md:p-0 gap-4 lg:gap-6 rounded-[6px] md:rounded-[12px] lg:rounded-[24px] transition-all duration-500 cursor-pointer"
    :class="[isVisible ? 'card-visible' : 'card-hidden', `delay-${(index || 0) % 9}`]" @click="navigateToDetail(slug)">
    <div
      class="w-full md:w-[30%] lg:w-[20%] h-40 md:h-full rounded-[4px] md:rounded-l-[8px] lg:rounded-l-[16px] overflow-hidden">
      <img :src="gambar" alt="Gambar Berita" class="w-full h-full object-cover transition-transform duration-500">
    </div>

    <div
      class="w-full flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 lg:gap-5 md:w-full space-y-4 lg:space-y-4 p-0 md:p-3 lg:p-6">
      <div class="w-full space-y-4 lg:space-y-4">
        <div class="space-y-2">
          <p class="text-sm md:text-base lg:text-lg font-bold">{{ judul }}</p>
          <p class="text-xs md:text-xs lg:text-base">{{ tanggal }} • {{ lokasi }}</p>
        </div>
        <TextBody class="line-clamp-2 md:line-clamp-3 lg:line-clamp-4"><span
            v-html="sanitizeHtml(deskripsi || 'Deskripsi Acara')"></span></TextBody>
      </div>
      <InteractiveHoverButton @click="navigateToDetail(slug)" :text="'Selengkapnya'"></InteractiveHoverButton>
    </div>
  </div>
</template>

<style scoped>
.agenda-card {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
}

.agenda-card:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.agenda-card:hover img {
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
