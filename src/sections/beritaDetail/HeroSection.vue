<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';

</script>

<template>
    <SectionLayout>
        <div class="space-y-4 lg:space-y-6">
            <div class="text-base font-bold flex  items-center gap-4">
                <div class="p-2 bg-gray-200">
                    <p>Kategori</p>
                </div>
                <p>5 Menit Baca</p>
            </div>
            <h3 class="text-[32px] lg:text-[48px] font-bold leading-tight">Judul Berita Terbaru Fakultas</h3>
        </div>

        <div class="space-y-4 lg:space-y-6">
            <img src="https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" class="rounded-lg md:rounded-2xl lg:rounded-4xl">
            <div class="flex justify-between items-center">
                <div class="flex gap-4 lg:gap-6">
                    <div class="text-base space-y-2">
                        <p class="">Penulis</p>
                        <p class="font-semibold">Diana Putri</p>
                    </div>
                    <div class="text-base space-y-2">
                        <p class="">Tanggal Publish</p>
                        <p class="font-semibold">22 Januari 2025</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-red-500">

                    </div>
                    <div class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-red-500">

                    </div>
                    <div class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-red-500">

                    </div>
                </div>
            </div>
        </div>
    </SectionLayout>
</template>