<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';
import People from '@/assets/People.png'
import banner from '@/assets/banner-dosen.jpg'

</script>

<template>
  <SectionLayout>
    <div class="w-full flex flex-col md:flex-row-reverse jsutify-center items-center md:justify-center gap-4">
      <div
        class="w-full md:w-1/2 h-[310px] md:[h-450px] lg:h-[630px] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] group overflow-hidden">
        <img :src="banner" alt="Banner Dosen" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
      </div>
      <div class="w-full md:w-1/2 space-y-12 md:space-y-16 lg:space-y-20">
        <div class="space-y-2 lg:space-y-4">
          <TitleMain :text="'Tenaga Pengajar Unggul'"></TitleMain>
          <TextSection>Kami memiliki tim pengajar yang berkualitas dan berpengalaman. Setiap dosen berkomitmen untuk
            memberikan pendidikan terbaik kepada mahasiswa.</TextSection>
        </div>

        <div class="flex gap-4 md:gap-6 lg:gap-8">
          <div>
            <img :src="People" alt="">
          </div>
          <div>
            <h5 class="text-[16px] md:text-[20px] lg:text-[24px]">100+ Dosen</h5>
            <TextSection>Dengan Berbagai Bidang Keahlian</TextSection>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
