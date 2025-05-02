<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';

</script>

<template>
    <SectionLayout>
        <div class="flex flex-col md:flex-row space-y-12 md:space-y-16 lg:space-y-20">
            <div class="w-full md:w-1/2 space-y-4 lg:space-y-6">
                <h2 class="text-[32px] lg:text-[48px] font-bold leading-tight">FAQ</h2>
                <p class="text-base">Temukan jawaban atas pertanyaan umum seputar acara dan berita fakultas kami.</p>
                <button
                    class="border border-black text-black py-3 px-6 rounded hover:bg-gray-100 transition">Kontak</button>
            </div>
            <div class="w-full md:w-1/2">
                <!-- List FAQ -->
            </div>
        </div>
    </SectionLayout>
</template>