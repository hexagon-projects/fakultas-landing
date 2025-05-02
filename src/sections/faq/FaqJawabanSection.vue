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
      <div class="flex flex-col gap-2 w-full">
        <Accordion type="single" collapsible class="w-full space-y-1">
          <AccordionItem
            v-for="(item, index) in faqData"
            :key="index"
            :value="`item-${index}`"
            class="overflow-hidden rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-50/50"
          >
            <AccordionTrigger
              class="hover:no-underline hover:bg-gray-50/70 w-full py-4 px-4 md:px-6 transition-colors duration-150 ease-out [&[data-state=open]]:bg-gray-50/30"
            >
              <div class="flex items-center justify-between w-full gap-4">
                <span
                  class="text-base md:text-[17px] font-semibold text-gray-900 font-['Roboto'] text-left tracking-tight leading-snug"
                >
                  {{ item.question }}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent
              class="overflow-hidden text-sm md:text-[15px] text-gray-600 font-normal font-['Roboto'] leading-relaxed transition-all duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]"
            >
              <div class="px-4 md:px-6 pb-5 pt-1">
                {{ item.answer }}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqData = [
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
]
</script>
