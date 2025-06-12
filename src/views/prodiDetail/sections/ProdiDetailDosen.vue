<script setup lang="ts">
import DosenCard from '@/views/prodi/components/DosenCard.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Team } from '@/core/types/team';
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  team: Team[]
}>();

// Pagination variables
const itemsPerPage = 4;
const currentPage = ref(1);

// Animation variables
const animationKey = ref(0);
const sectionRef = ref<HTMLElement | null>(null);
const isSectionVisible = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isSectionVisible.value = true;
          triggerAnimation();
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

const totalPages = computed(() => Math.ceil(props.team.length / itemsPerPage));

const paginatedTeams = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return props.team?.slice(start, start + itemsPerPage);
});

function goToPage(page: number) {
  currentPage.value = page;
  if (isSectionVisible.value) {
    triggerAnimation();
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    if (isSectionVisible.value) {
      triggerAnimation();
    }
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    if (isSectionVisible.value) {
      triggerAnimation();
    }
  }
}

function triggerAnimation() {
  animationKey.value++;
}

watch(() => paginatedTeams.value, () => {
  if (isSectionVisible.value) {
    nextTick(() => {
      triggerAnimation();
    });
  }
}, { immediate: true });
</script>

<template>
  <div ref="sectionRef" class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="flex flex-col gap-4 md:gap-5 lg:gap-6">
      <TextSection>Tim</TextSection>
      <TitleSection :text="'Dosen Akademi'"></TitleSection>
      <TextSection>Dosen-dosen unggulan dengan pengalaman dan keahlian tinggi</TextSection>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" :key="animationKey">
      <template v-for="(dosen, index) in paginatedTeams" :key="dosen.id">
        <div class="dosen-card-animate" :class="{ 'animate-on-visible': isSectionVisible }"
          :style="{ 'animation-delay': `${index * 100}ms` }">
          <DosenCard
            :name="dosen.name"
            :title="dosen.title"
            :image="getImageUrl(dosen.image)"
            :facebook="dosen.fb"
            :instagram="dosen.ig"
            :youtube="dosen.yt"
            :tiktok="dosen.tiktok"
          />
        </div>
      </template>
    </div>

    <!-- Pagination controls -->
    <div v-if="team?.length > 0" class="w-full flex justify-end mt-8">
      <div class="inline-flex items-center gap-2">
        <button :disabled="currentPage === 1" @click="prevPage"
          class="w-8 h-8 flex items-center justify-center rounded bg-white outline outline-1 outline-zinc-200 disabled:cursor-not-allowed disabled:opacity-50">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>

        <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
          class="w-8 h-8 relative rounded outline outline-1 outline-offset-[-1px]"
          :class="currentPage === page ? 'bg-white outline-Color-FH' : 'bg-white outline-zinc-200'">
          <div class="w-6 h-5 absolute left-[4px] top-[5px] text-center text-sm font-bold"
            :class="currentPage === page ? 'text-Color-FH' : 'text-gray-800'">
            {{ page }}
          </div>
        </button>

        <button :disabled="currentPage === totalPages" @click="nextPage"
          class="w-8 h-8 flex items-center justify-center rounded bg-white outline outline-1 outline-zinc-200 disabled:cursor-not-allowed disabled:opacity-50">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outline-Color-FH {
  --tw-outline-color: #0096FF;
  outline-color: var(--tw-outline-color);
}

.text-Color-FH {
  color: #0096FF;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dosen-card-animate {
  opacity: 0;
}

.dosen-card-animate.animate-on-visible {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>
