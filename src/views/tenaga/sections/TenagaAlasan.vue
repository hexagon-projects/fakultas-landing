<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';
import TenagaAlasanCard from '../components/TenagaAlasanCard.vue';

</script>

<template>
  <SectionLayout>
    <div class="w-full flex justify-center items-center">
      <div class="w-full md:w-1/2 text-center space-y-4 lg:space-y-6">
        <TextBody>Pengajar</TextBody>
        <TitleMain :text="'Dosen-Dosen Berpengalaman di Fakultas Kami'"></TitleMain>
        <TextSection>Kami memiliki tim pengajar yang berkualitas dan berpengalaman. Setiap dosen berkomitmen untuk
          memberikan pendidikan terbaik kepada mahasiswa.</TextSection>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <TenagaAlasanCard />
      <TenagaAlasanCard />
      <TenagaAlasanCard />
    </div>
  </SectionLayout>
</template>
