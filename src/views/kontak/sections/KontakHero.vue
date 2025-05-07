<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';
import KontakCard from '../components/KontakCard.vue';
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';

import EmailIcon from '@/assets/icons/gmail.png';
import PhoneIcon from '@/assets/icons/phone.png';
import LocationIcon from '@/assets/icons/location.png';

import type { Identity } from '@/core/types/identity';

defineProps<{
  identity: Identity | null;
  isLoading?: boolean;
}>();
</script>

<template>
  <SectionLayout>
    <div class="w-full flex flex-col justify-center items-center gap-4 md:gap-5 lg:gap-6">
      <template v-if="isLoading">
        <div class="h-12 w-64 bg-gray-300 animate-pulse rounded-lg"></div>
        <div class="h-4 w-96 bg-gray-300 animate-pulse rounded"></div>
      </template>
      <template v-else>
        <TitleMain :text="'Kontak Kami'"></TitleMain>
        <TextSection>Kami siap membantu Anda dengan pertanyaan apapun.</TextSection>
      </template>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
      <template v-if="isLoading">
        <div v-for="i in 3" :key="i" class="h-32 bg-gray-300 animate-pulse rounded-lg"></div>
      </template>
      <template v-else>
        <KontakCard type="email" :value="identity?.email" :icon="EmailIcon" />
        <KontakCard type="phone" :value="identity?.phone" :icon="PhoneIcon" />
        <KontakCard type="map" :link="identity?.link_map" :icon="LocationIcon" />
      </template>
    </div>
  </SectionLayout>
</template>
