<template>
  <div
    class="w-full max-w-screen-xl mx-auto px-5 md:px-10 py-8 md:py-20 overflow-x-hidden bg-netral-bg-unpas mt-0 md:-mt-10 lg:-mt-21"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
      <!-- Left Section -->
      <div class="flex flex-col gap-6 justify-start items-start">
        <div class="flex flex-col gap-4">
          <h2
            class="text-3xl md:text-5xl font-bold text-Color-Scheme-1-Text leading-snug md:leading-tight font-['Roboto']"
          >
            FAQ
          </h2>
          <p
            class="text-base md:text-lg text-Color-Scheme-1-Text font-normal leading-relaxed font-['Roboto']"
          >
            Temukan jawaban untuk pertanyaan umum mengenai pendaftaran dan biaya di sini.
          </p>
        </div>
        <button
          class="w-fit px-5 py-3 bg-[#AA2132] text-white text-sm font-bold rounded-full shadow-lg font-['Inter']"
        >
          Hubungi Admin
        </button>
      </div>

      <!-- Right Section -->
      <div class="flex flex-col gap-4">
        <Disclosure v-for="(item, index) in faqData" :key="index" as="div" class="w-full">
          <template #default="{ open }">
            <DisclosureButton
              class="w-full flex justify-between items-center py-4 px-2 border-b border-gray-200 group hover:bg-gray-100 transition"
            >
              <span class="text-base md:text-lg font-bold text-Color-Scheme-1-Text font-['Roboto']">
                {{ item.question }}
              </span>
              <svg
                :class="{ 'rotate-180': open }"
                class="w-5 h-5 text-Color-Scheme-1-Text transform transition-transform duration-300 group-hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </DisclosureButton>

            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-200 ease-in"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-[500px] opacity-100"
              leave-from-class="max-h-[500px] opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <DisclosurePanel
                class="px-2 pt-2 pb-4 text-sm md:text-base text-Color-Scheme-1-Text font-normal font-['Roboto']"
              >
                {{ item.answer }}
              </DisclosurePanel>
            </Transition>
          </template>
        </Disclosure>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/vue'

const faqData = ref([
  {
    question: 'Apa syarat pendaftaran?',
    answer:
      'Syarat pendaftaran meliputi ijazah terakhir, transkrip nilai, dan dokumen identitas. Pastikan semua dokumen lengkap sebelum mengajukan pendaftaran. Informasi lebih lanjut dapat ditemukan di halaman pendaftaran.',
  },
  {
    question: 'Berapa biaya kuliah?',
    answer:
      'Biaya kuliah bervariasi tergantung program studi yang dipilih. Rincian biaya dapat dilihat di halaman biaya kuliah. Kami juga menyediakan informasi tentang beasiswa yang tersedia.',
  },
  {
    question: 'Bagaimana cara mendaftar?',
    answer:
      'Pendaftaran dapat dilakukan secara online melalui portal pendaftaran kami. Ikuti langkah-langkah yang terdapat pada halaman pendaftaran.',
  },
])
</script>
