<template>
  <div
    class="w-full px-8 lg:px-32 py-14 bg-netral-bg-unpas flex flex-col justify-start items-center gap-20 overflow-hidden"
  >
    <div class="w-full max-w-screen-xl flex flex-col justify-start items-start gap-4">
      <div class="self-stretch flex flex-col justify-start items-center gap-6">
        <div
          class="text-center text-Color-Scheme-1-Text text-5xl font-bold font-['Roboto'] leading-[57.60px]"
        >
          Berita Terbaru Fakultas
        </div>
        <div
          class="text-center text-Color-Scheme-1-Text text-lg font-normal font-['Roboto'] leading-relaxed"
        >
          Ikuti perkembangan terbaru dari fakultas kami.
        </div>
      </div>
    </div>

    <!-- News Section -->
    <div class="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
      <div
        v-for="(newsItem, index) in paginatedNews"
        :key="index"
        class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
      >
        <!-- Image -->
        <div>
          <img
            class="w-full h-64 object-cover rounded-[32px]"
            :src="newsItem.image"
            alt="News Image"
          />
        </div>

        <!-- Content -->
        <div class="flex flex-col justify-start items-start gap-6">
          <div class="flex flex-col justify-start items-start gap-4">
            <!-- Category and Read Time -->
            <div class="flex justify-start items-center gap-4">
              <div class="px-2 py-1 bg-Color-Neutral-Lightest flex justify-start items-start">
                <div
                  class="text-Color-Neutral-Darkest text-sm font-semibold font-['Roboto'] leading-tight"
                >
                  Berita
                </div>
              </div>
              <div
                class="text-Color-Scheme-1-Text text-sm font-semibold font-['Roboto'] leading-tight"
              >
                {{ newsItem.readTime }} menit baca
              </div>
            </div>

            <!-- Title and Description -->
            <div class="flex flex-col justify-start items-start gap-2">
              <div
                class="text-Color-Scheme-1-Text text-2xl font-bold font-['Roboto'] leading-loose"
              >
                {{ newsItem.title }}
              </div>
              <div
                class="text-Color-Scheme-1-Text text-base font-normal font-['Roboto'] leading-normal"
              >
                {{ newsItem.description }}
              </div>
            </div>
          </div>

          <!-- Read More Link -->
          <div class="flex justify-center items-center gap-2">
            <div
              class="text-Color-Neutral-Darkest text-base font-normal font-['Roboto'] leading-normal"
            >
              Selengkapnya
            </div>
            <div class="w-6 h-6 relative overflow-hidden">
              <div class="w-2 h-3 left-[8.29px] top-[5.54px] absolute bg-Color-Scheme-1-Text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="w-full flex justify-end mt-8">
      <div class="inline-flex items-center gap-2">
        <!-- Previous Arrow -->
        <button
          :disabled="currentPage === 1"
          @click="prevPage"
          class="w-8 h-8 relative rounded bg-gray-400 opacity-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <div class="w-6 h-6 absolute left-[4px] top-[4px]">
            <div
              class="w-3.5 h-2 left-[15.16px] top-[6px] absolute origin-top-left rotate-90 bg-slate-300"
            ></div>
          </div>
        </button>

        <!-- Page Numbers -->
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          class="w-8 h-8 relative rounded outline outline-1 outline-offset-[-1px]"
          :class="currentPage === page ? 'bg-white outline-Color-FH' : 'bg-white outline-zinc-200'"
        >
          <div
            class="w-6 h-5 absolute left-[4px] top-[5px] text-center text-sm font-bold"
            :class="currentPage === page ? 'text-Color-FH' : 'text-gray-800'"
          >
            {{ page }}
          </div>
        </button>

        <!-- Next Arrow -->
        <button
          :disabled="currentPage === totalPages"
          @click="nextPage"
          class="w-8 h-8 relative rounded bg-white outline outline-1 outline-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <div class="w-6 h-6 absolute left-[4px] top-[4px]">
            <div
              class="w-3 h-2 left-[16.25px] top-[6px] absolute origin-top-left rotate-90 bg-slate-300"
            ></div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const newsData = ref([
  {
    title: 'Pameran Karya Mahasiswa 2023',
    description: 'Pameran ini menampilkan karya kreatif mahasiswa dari berbagai jurusan.',
    image: 'https://placehold.co/276x250',
    readTime: '5',
  },
  {
    title: 'Kegiatan Seminar Nasional 2023',
    description: 'Seminar ini membahas inovasi terbaru dalam pendidikan tinggi.',
    image: 'https://placehold.co/276x250',
    readTime: '5',
  },
  {
    title: 'Workshop Teknologi Terbaru',
    description: 'Workshop ini membahas teknologi yang mengubah dunia pendidikan.',
    image: 'https://placehold.co/276x250',
    readTime: '5',
  },
  {
    title: 'Kunjungan Industri ke Perusahaan Terkemuka',
    description: 'Mahasiswa belajar langsung dari praktik industri di lapangan.',
    image: 'https://placehold.co/276x250',
    readTime: '5',
  },
])

const itemsPerPage = 2
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(newsData.value.length / itemsPerPage))

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return newsData.value.slice(start, start + itemsPerPage)
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
</script>

<style scoped>
/* Kamu bisa define warna Color-FH di Tailwind config atau pakai manual di sini */
.outline-Color-FH {
  --tw-outline-color: #aa2132; /* contoh warna biru */
  outline-color: var(--tw-outline-color);
}
.text-Color-FH {
  color: #aa2132;
}
</style>
