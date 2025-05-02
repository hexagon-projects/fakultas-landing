<template>
  <div
    class="w-full max-w-screen-xl mx-auto px-5 md:px-10 py-8 md:py-20 overflow-x-hidden bg-netral-bg-unpas mt-0 md:-mt-10 lg:-mt-21">
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-10">
      <TextSection>Memuat data...</TextSection>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-10 text-red-500">
      <TextSection>{{ error }}</TextSection>
    </div>

    <!-- Success State -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
      <!-- Left Section -->
      <div class="flex flex-col gap-6 justify-start items-start">
        <div class="flex flex-col gap-4">
          <TitleSection :text="'FAQ'"></TitleSection>
          <TextSection>Temukan jawaban untuk pertanyaan umum mengenai pendaftaran dan biaya di sini.</TextSection>
        </div>
        <InteractiveHoverButton :text="'Hubungi Admin'"></InteractiveHoverButton>
      </div>

      <!-- Right Section -->
      <div class="flex flex-col gap-4">
        <Disclosure v-for="(item) in faqs" :key="item.id" as="div" class="w-full">
          <template #default="{ open }">
            <DisclosureButton
              class="w-full flex justify-between items-center py-4 px-2 border-b border-gray-200 group hover:bg-gray-100 transition">
              <TextSection class="font-bold">{{ item.question }}</TextSection>
              <svg :class="{ 'rotate-180': open }"
                class="w-5 h-5 text-Color-Scheme-1-Text transform transition-transform duration-300 group-hover:text-gray-500"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </DisclosureButton>

            <Transition enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-200 ease-in" enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-[500px] opacity-100" leave-from-class="max-h-[500px] opacity-100"
              leave-to-class="max-h-0 opacity-0">
              <DisclosurePanel class="px-2 pt-2 pb-4">
                <div v-html="item.answer" class="prose"></div>
              </DisclosurePanel>
            </Transition>
          </template>
        </Disclosure>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import TitleSection from '@/components/TitleSection.vue';
import TextSection from '@/components/TextSection.vue';
import ButtonSection from '@/components/ButtonSection.vue';
import type { FAQ } from '@/core/types/faq';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';

defineProps<{
  faqs: FAQ[];
  loading: boolean;
  error: string | null;
}>();
</script>
