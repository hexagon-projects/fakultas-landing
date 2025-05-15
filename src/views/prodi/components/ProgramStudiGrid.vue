<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import type { Departement } from '@/core/types/departement';
import Star from '@/assets/icons/star.png'
import Gedung from '@/assets/gedung.jpg'
import router from '@/router';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';

defineProps<{
  prodiDatas?: Departement[];
  loading?: boolean;
  error?: string | null;
}>();

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return Gedung;
  return `${baseUrl}/${imagePath}`;
};

const navigateToDetail = (slug: string) => {
  router.push({ name: 'prodiDetail', params: { slug } });
};
</script>

<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="item in prodiDatas" :key="item.id" class="rounded-lg md:rounded-2xl lg:rounded-4xl space-y-4">
        <div class="w-full h-[22vh] md:h-[20vh] lg:h-[278px] relative cursor-pointer"
          @click="navigateToDetail(item.slug)">
          <div
            class="w-full h-full group overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px] relative">
            <img :src="getImageUrl(item.image1)" alt=""
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          </div>

          <div
            class="absolute top-4 left-4 flex justify-center items-center gap-2 p-4 rounded-full bg-white">
            <div class="w-6 h-6"><img :src="Star" alt="" class="w-full h-full object-cover"></div>
            <TextBody>{{ item.akreditasi || 'akreditasi' }}</TextBody>
          </div>
        </div>
        <h2 class="text-base md:text-lg lg:text-xl font-medium">{{ item.name }}</h2>
        <div class="w-full flex justify-between items-center gap-4 md:gap-6 lg:gap-8">
          <a href="https://registrasi.unpas.ac.id/register" target="_blank" class="w-full">
            <InteractiveHoverButton class="w-full" :padding="'py-2 lg:py-3'" :text="'Daftar'"></InteractiveHoverButton>
          </a>
          <div class="w-full">
            <InteractiveHoverButton class="w-full" :padding="'py-2 lg:py-3'" @click="navigateToDetail(item.slug)"
              :bg-color="'bg-transparent'" :bg-hover="'bg-colorPrimary'" :border-color="'border-colorPrimary'"
              :text="'Selengkapnya'" :text-color="'text-colorPrimary'" :text-hover="'group-hover:text-white'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-container {
  filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.img-box {
  clip-path: polygon(80% 100%, 80% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
}

@media (min-width: 320px) {
  .img-box {
    clip-path: polygon(60% 100%, 60% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 360px) {
  .img-box {
    clip-path: polygon(65% 100%, 65% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 440px) {
  .img-box {
    clip-path: polygon(65% 100%, 65% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 460px) {
  .img-box {
    clip-path: polygon(70% 100%, 70% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 560px) {
  .img-box {
    clip-path: polygon(78% 100%, 78% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 680px) {
  .img-box {
    clip-path: polygon(80% 100%, 80% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 768px) {
  .img-box {
    clip-path: polygon(65% 100%, 65% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 868px) {
  .img-box {
    clip-path: polygon(70% 100%, 70% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 968px) {
  .img-box {
    clip-path: polygon(72% 100%, 72% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1024px) {
  .img-box {
    clip-path: polygon(45% 100%, 45% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1124px) {
  .img-box {
    clip-path: polygon(50% 100%, 50% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1224px) {
  .img-box {
    clip-path: polygon(55% 100%, 55% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1324px) {
  .img-box {
    clip-path: polygon(65% 100%, 65% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1400px) {
  .img-box {
    clip-path: polygon(70% 100%, 70% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}
</style>
