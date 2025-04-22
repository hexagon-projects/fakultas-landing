<template>
    <SectionLayout>
        <h3 class="text-center text-[32px] lg:text-[48px] font-normal leading-tight"><span
                class="font-semibold text-[#AA2132]">Kurikulum Terintegrasi</span> untuk Mempersiapkan <br> Mahasiswa
            Menghadapi
            Tantangan Global</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <KurikulumCard />
            <KurikulumCard />
            <KurikulumCard />
        </div>
    </SectionLayout>
</template>

<script setup>
import KurikulumCard from '@/components/prodi/KurikulumCard.vue'
import SectionLayout from '@/layouts/SectionLayout.vue';
</script>