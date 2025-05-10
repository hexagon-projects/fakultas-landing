<script setup lang="ts">
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue'
import Title from '@/components/Title.vue'
import ContactAdminButton from '@/components/ContactAdminButton.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div class="mx-[5%] lg:mx-[15%] lg:p-28 md:p-20 py-20 px-5 bg-colorPrimary rounded-[32px] relative">
    <div class="flex flex-col-reverse">
      <div class="w-full lg:w-1/2 mt-10 lg:mt-0">
        <Title class="text-center lg:text-left text-white">Wujudkan Masa Depan Cemerlangmu Bersama Kami!</Title>
        <div class="flex gap-4 mt-8 justify-center items-center lg:justify-start">
          <div class="w-fit">
            <a href="https://registrasi.unpas.ac.id/register" target="_blank">
              <InteractiveHoverButton :text="t('global.register_now')" bg-color="bg-white"
                textColor="text-colorPrimary" borderHover="border-white" />
            </a>
          </div>
          <div class="w-fit">
            <ContactAdminButton />
          </div>
        </div>
      </div>
      <img src="/src/assets/images/CTAImage.png" alt="CTA Image"
        class="lg:absolute w-[500px] relative lg:block bottom-0 right-0 mx-auto -mt-40" loading="lazy" />
    </div>
    <img src="/src/assets/images/CTA-rounded.svg" alt="" class="absolute top-0 left-0" loading="lazy" />
    <img src="/src/assets/images/CTA-rounded.svg" alt="" class="absolute top-0 right-0 -scale-x-100" loading="lazy" />
  </div>
</template>
