<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';

</script>

<template>
    <SectionLayout>
        <div class="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
            <div class="w-full md:w-1/2">
                <h2 class="text-[36px] lg:text-[40px] font-bold leading-tight">Statistik dan Data Penting Program Studi Kami</h2>
            </div>
            <div class="w-full md:w-1/2">
                <p class="text-base font-normal">Temukan berbagai program studi yang dirancang untuk mempersiapkan Anda
                    menghadapi
                    tantangan dunia kerja. Bergabunglah dengan kami dan kembangkan potensi Anda di bidang yang Anda
                    cintai.
                </p>
            </div>
        </div>

        <div class="w-full grid grid-cols-3">
            <div class="space-y-4">
                <h2 class="text-[40px] lg:text-[80px] font-bold">30%</h2>
                <p class="text-base lg:text-xl font-bold">Lulusan</p>
            </div>
            <div class="space-y-4">
                <h2 class="text-[40px] lg:text-[80px] font-bold">30%</h2>
                <p class="text-base lg:text-xl font-bold">Lulusan</p>
            </div>
            <div class="space-y-4">
                <h2 class="text-[40px] lg:text-[80px] font-bold">30%</h2>
                <p class="text-base lg:text-xl font-bold">Lulusan</p>
            </div>
        </div>
    </SectionLayout>
</template>