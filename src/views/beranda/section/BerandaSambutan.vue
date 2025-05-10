<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import type { Faculty } from '@/core/types/fakultas';
import type { Team } from '@/core/types/team';
import SectionLayout from '@/layouts/SectionLayout.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  fakultas: Faculty | null;
  dosen: Team[];
  isLoading?: boolean;
}>();

const titleHTML = computed(() => {
  if (!props.fakultas?.name) return 'Sambutan Dekan';
  return `Sambutan Dekan <span class="text-colorPrimary">${props.fakultas?.name}</span>`;
});
</script>

<template>
  <SectionLayout>
    <div class="w-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-12">
      <div class="w-full lg:w-[60%]">
        <div class="space-y-4">
          <div class="flex gap-5 items-center">
            <h5 class="text-xl hidden lg:block">
              <span class="text-colorPrimary">Tentang</span> {{ fakultas?.name }}
            </h5>
            <hr class="w-1/5 border-t-2 border-colorPrimary hidden lg:block" />
          </div>
          <TitleSection v-if="fakultas?.title1" :text="titleHTML" :html="true">
          </TitleSection>

          <TextSection><span v-html="fakultas?.description1"></span></TextSection>
        </div>
        <div class="flex gap-5 mt-10">
          <a href="https://registrasi.unpas.ac.id/register" target="_blank">
            <InteractiveHoverButton :text="t('global.register_now')" />
          </a>
          <InteractiveHoverButton @click="$router.push('/tentang-fakultas')" text="Selengkapnya" bg-color="bg-none"
            border-color="border-colorPrimary" text-color="text-colorPrimary" bg-hover="bg-colorPrimary"
            text-hover="text-white"></InteractiveHoverButton>
        </div>
      </div>

      <div class="w-full lg:w-1/3" v-if="dosen && dosen.length > 0">
        <div
          class="relative mx-auto w-full lg:w-full h-[348px] lg:h-[420px] xl:h-[500px] bg-no-repeat bg-cover rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden"
          :style="{ backgroundImage: `url(${getImageUrl(dosen[0].image)})` }">

          <div
            class="absolute bottom-0 left-0 w-full h-1/3 md:h-full bg-gradient-to-t from-black/70 via-black/40 to-black/0 backdrop-blur-sm z-10"
            style="mask-image: linear-gradient(to top, black, transparent); -webkit-mask-image: linear-gradient(to top, black, transparent);">
          </div>

          <div
            class="relative z-20 flex flex-col gap-2 md:gap-4 justify-end h-full text-white py-4 px-4 lg:py-6 lg:px-6">
            <TextBody class="text-white">{{ dosen[0].title }}</TextBody>
            <TextSection class="text-white font-bold">{{ dosen[0].name }}</TextSection>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
