<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import { useSanitize } from '@/composables/useSanitize';
import type { Post } from '@/core/types/post';
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const { sanitizeHtml } = useSanitize();
const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const props = defineProps<{
  posts: Post[]
  loading?: boolean;
  error?: string | null;
}>();

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const itemsPerPage = 4
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(props.posts.length / itemsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return props.posts?.slice(start, start + itemsPerPage)
})

function goToPage(page: number) {
  currentPage.value = page
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

const goToDetail = (post: any) => {
  const identifier = post.slug;
  router.push({
    name: 'beritaDetail',
    params: { slug: identifier }
  });
};
</script>

<template>
  <div
    class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="flex flex-col gap-4 md:gap-5 lg:gap-6 justify-center items-center">
      <TitleSection :text="'Berita Terbaru Fakultas'"></TitleSection>
      <TextSection>Ikuti perkembangan terbaru dari fakultas kami.</TextSection>
    </div>

    <div v-if="loading" class="w-full text-center py-12">
      <TextBody>Memuat berita...</TextBody>
    </div>

    <div v-else-if="error" class="w-full text-center py-12">
      <TextBody class="text-red-500">{{ error }}</TextBody>
    </div>

    <div v-else class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
      <div v-for="(post, index) in paginatedPosts" :key="index"
        class="flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-6 cursor-pointer group hover:-translate-y-2 transition duration-500" @click="goToDetail(post)">

        <div class="w-full md:w-1/2 h-[220px] md:h-[230px] lg:h-[250px] cursor-pointer overflow-hidden rounded-[8px] md:rounded-[16px] lg:rounded-[32px]">
          <img :src="getImageUrl(post.image)" :alt="post.title"
            class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        </div>

        <div class="w-full md:w-1/2 space-y-4">
          <div class="flex gap-2 md:gap-4 items-center">
            <div class="px-2 py-1 bg-[#EEEEEE]">
              <TextBody class="font-semibold">Berita</TextBody>
            </div>

            <TextBody class="font-semibold">{{ formatDate(post.created_at) }}</TextBody>
          </div>

          <div class="space-y-2">
            <h3 class="text-[18px] md:text-[20px] lg:text-[24px] font-bold">{{ post.title }}</h3>
            <TextBody><span v-html="sanitizeHtml(post.resume)"></span></TextBody>
          </div>

          <button @click="goToDetail(post)" class="text-left">
            <TextBody class="hover:text-colorPrimary transition-colors">Selengkapnya ></TextBody>
          </button>
        </div>
      </div>
    </div>

    <div v-if="!loading && !error && posts?.length > 0" class="w-full flex justify-end mt-8">
      <div class="inline-flex items-center gap-2">
        <button :disabled="currentPage === 1" @click="prevPage"
          class="w-8 h-8 relative rounded bg-gray-400 opacity-50 disabled:cursor-not-allowed disabled:opacity-50">
          <div class="w-6 h-6 absolute left-[4px] top-[4px]">
            <div class="w-3.5 h-2 left-[15.16px] top-[6px] absolute origin-top-left rotate-90 bg-slate-300"></div>
          </div>
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
          class="w-8 h-8 relative rounded bg-white outline outline-1 outline-zinc-200 disabled:cursor-not-allowed disabled:opacity-50">
          <div class="w-6 h-6 absolute left-[4px] top-[4px]">
            <div class="w-3 h-2 left-[16.25px] top-[6px] absolute origin-top-left rotate-90 bg-slate-300"></div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outline-Color-FH {
  --tw-outline-color: #aa2132;
  outline-color: var(--tw-outline-color);
}

.text-Color-FH {
  color: #aa2132;
}
</style>
