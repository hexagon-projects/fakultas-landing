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
  identity: Identity
}>();
</script>

<template>
  <SectionLayout>
    <div class="w-full flex flex-col justify-center items-center gap-4 md:gap-5 lg:gap-6">
      <TitleMain :text="'Kontak Kami'"></TitleMain>
      <TextSection>Kami siap membantu Anda dengan pertanyaan apapun.</TextSection>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
      <KontakCard type="email" :value="identity.email" :icon="EmailIcon" />
      <KontakCard type="phone" :value="identity.phone" :icon="PhoneIcon" />
      <KontakCard type="map" :link="identity.link_map" :icon="LocationIcon" />
    </div>
  </SectionLayout>
</template>
