<template>
    <SectionLayout>
        <div class="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
            <div class="w-full md:w-1/2 space-y-2 lg:space-y-4">
                <p class="text-lg lg:text-xl font-medium">Program</p>
                <h2 class="text-[36px] lg:text-[40px] font-bold leading-tight">Program Studi Unggulan: Mencetak Generasi
                    Pemimpin Masa Depan</h2>
            </div>
            <div class="w-full md:w-1/2">
                <p class="text-base lg:text-base font-normal">Kami menawarkan berbagai program studi yang dirancang
                    untuk memenuhi kebutuhan
                    industri dan perkembangan ilmu pengetahuan. Setiap program dilengkapi dengan kurikulum yang relevan
                    dan pengajaran dari dosen berpengalaman. Bergabunglah dengan kami untuk memulai perjalanan akademis
                    Anda.</p>
            </div>
        </div>

        <ProgramStudiGrid />
    </SectionLayout>
</template>

<script setup>
import ProgramStudiGrid from '@/components/prodi/ProgramStudiGrid.vue'
import SectionLayout from '@/layouts/SectionLayout.vue';
</script>