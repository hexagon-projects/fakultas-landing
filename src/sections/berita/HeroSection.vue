<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';

</script>

<template>
    <SectionLayout>
        <div class="w-full min-h-full flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20">
            <div class="w-full min-h-full md:w-[30%] flex flex-col justify-between space-y-4 lg:space-y-6">
                <div class="space-y-4 lg:space-y-6">
                    <p class="text-base">Blog > Berita</p>
                    <h3 class="text-[32px] lg:text-[48px] font-bold leading-tight">Berita dan Acara Terbaru di Fakultas
                    </h3>
                </div>

                <div class="space-y-4 lg:space-y-6">
                    <div class="space-y-2 lg:space-y-4">
                        <p class="text-base">By <span class="font-bold">Nama Lengkap</span></p>
                        <p class="text-base">11 jan 2025 • 5 Menit baca</p>
                    </div>
                    <div class="space-y-2 lg:space-y-4">
                        <p class="text-base font-bold">Share this post</p>
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
            </div>
            <div class="w-full h-full md:w-[70%]">
                <img src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="">
            </div>
        </div>
    </SectionLayout>
</template>