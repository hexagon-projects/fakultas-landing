<script setup lang="ts">
import TitleMain from '@/components/TitleMain.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import Bg from '@/assets/prestasi.png'
import BgMobile from '@/assets/prestasi2.png'
import TextSection from '@/components/TextSection.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="py-[32px] md:py-[60px] lg:py-[60px]">
    <div class="w-full md:h-[350px] lg:h-[550px] relative overflow-hidden hidden md:block"
      :style="{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
      <div
        class="w-full h-full flex lg:gap-20 gap-5 lg:flex-row flex-col items-center relative custom-gradient px-[20px] md:px-[60px] lg:px-[120px]">
        <div class="text-center w-full md:w-3/4 lg:w-1/2 mx-auto">
          <TitleMain text="Setiap Prestasi Adalah Langkah Menuju Perubahan"></TitleMain>
          <TextSection class="mt-8">
            Mahasiswa Universitas Pasundan terus mengukir prestasi membanggakan di berbagai bidang
            baik di tingkat nasional maupun internasional.
          </TextSection>
          <div class="flex gap-10 mt-10 justify-center">
            <a href="https://registrasi.unpas.ac.id/register" target="_blank">
              <InteractiveHoverButton :text="t('global.register_now')" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full h-[429px] relative overflow-hidden md:hidden block py-[32px]"
    :style="{ backgroundImage: `url(${BgMobile})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
    <div
      class="w-full h-full flex lg:gap-20 gap-5 lg:flex-row flex-col justify-center items-center relative custom-gradient px-[20px]">
      <div class="text-center w-full md:w-3/4 lg:w-1/2 mx-auto">
        <TitleMain text="Setiap Prestasi Adalah Langkah Menuju Perubahan"></TitleMain>
        <TextSection class="mt-8">
          Mahasiswa Universitas Pasundan terus mengukir prestasi membanggakan di berbagai bidang
          baik di tingkat nasional maupun internasional.
        </TextSection>
        <div class="flex gap-10 mt-10 justify-center">
          <a href="https://registrasi.unpas.ac.id/register" target="_blank">
            <InteractiveHoverButton :text="t('global.register_now')" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-gradient {
  background: radial-gradient(circle at center,
      rgba(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b), 0.15) 0%,
      rgba(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b), 0.05) 20%,
      transparent 35%);
}

/* Responsive mobile */
@media (max-width: 768px) {
  .custom-gradient {
    background: radial-gradient(circle at center,
        rgba(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b), 0.15) 0%,
        rgba(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b), 0.05) 40%,
        transparent 70%);
  }
}
</style>
