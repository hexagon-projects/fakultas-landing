<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';
</script>

<template>
    <SectionLayout>
        <div class="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
            <div class="w-full md:w-1/2 space-y-2 lg:space-y-4">
                <p class="text-lg lg:text-xl font-medium">Inovatif</p>
                <h1 class="text-[40px] lg:text-[56px] font-bold leading-tight">Program Studi Teknik</h1>
            </div>
            <div class="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 lg:gap-8">
                <p class="text-base font-normal">Temukan berbagai program studi yang dirancang untuk mempersiapkan Anda
                    menghadapi
                    tantangan dunia kerja. Bergabunglah dengan kami dan kembangkan potensi Anda di bidang yang Anda
                    cintai.
                </p>
                <div class="w-full space-x-4">
                    <button class="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition">Daftar</button>
                    <button
                        class="border border-black text-black py-3 px-6 rounded hover:bg-gray-100 transition">Kontak</button>
                </div>
            </div>
        </div>
    </SectionLayout>
</template>