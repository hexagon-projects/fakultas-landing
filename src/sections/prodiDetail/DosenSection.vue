<script setup lang="ts">
import DosenCard from '@/components/prodi/DosenCard.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';

</script>

<template>
    <SectionLayout>
        <div class="flex flex-col gap-4 lg:gap-6">
            <p class="text-base">Tim</p>
            <h2 class="text-[36px] lg:text-[64px] font-semibold leading-10 lg:leading-12">Dosen Akademi</h2>
            <p class="text-base">Dosen-dosen unggulan dengan pengalaman dan keahlian tinggi</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <DosenCard />
            <DosenCard />
            <DosenCard />
            <DosenCard />   
        </div>
    </SectionLayout>
</template>