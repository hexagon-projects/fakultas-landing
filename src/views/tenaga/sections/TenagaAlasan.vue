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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <TenagaAlasanCard number="1" title="Latar Belakang dan Pengalaman Dosen"
        content="Setiap dosen memiliki latar belakang akademis yang kuat dan pengalaman profesional di bidangnya." />
      <TenagaAlasanCard number="2" title="Bidang Minat Dosen dan Kontribusi"
        content="Dosen kami aktif dalam penelitian dan publikasi ilmiah." />
      <TenagaAlasanCard number="3" title="Profil Dosen dan Kualifikasi"
        content="Kami menyediakan profil lengkap untuk setiap dosen di website kami." />
    </div>
  </SectionLayout>
</template>
