<script setup lang="ts">
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import { useAnalyticStore } from '@/stores/analytic';
import { useIdentityStore } from '@/stores/identity';
import { onMounted } from 'vue';

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const identityStore = useIdentityStore();
const analyticStore = useAnalyticStore();

defineProps({
  bgColor: {
    type: String,
    default: 'bg-colorPrimary'
  },
  textColor: {
    type: String,
    default: 'text-white'
  },
  bgHover: {
    type: String,
    default: 'bg-white'
  },
  textHover: {
    type: String,
    default: 'text-colorPrimary'
  },
  borderColor: {
    type: String,
    default: 'border-white'
  },
  borderHover: {
    type: String,
    default: 'border-white'
  },
  buttonText: {
    type: String,
    default: 'Hubungi Admin'
  }
});

onMounted(async () => {
  await identityStore.fetchIdentity();
  await analyticStore.fetchAnalytic();
});

const contactAdmin = () => {
  const phoneNumber = identityStore.identity?.phone;
  const chatMessage = analyticStore.analytic?.chat;

  if (phoneNumber) {
    const cleanedPhone = phoneNumber.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(chatMessage || 'Halo, saya ingin bertanya...');
    const whatsappUrl = `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  } else {
    console.error('Nomor telepon admin tidak tersedia');
    alert('Maaf, tidak dapat menghubungi admin saat ini.');
  }
};
</script>

<template>
  <InteractiveHoverButton
    :bg-color="bgColor"
    :text-color="textColor"
    :bg-hover="bgHover"
    :text-hover="textHover"
    :border-color="borderColor"
    :border-hover="borderHover"
    :text="t('global.contact_admin')"
    @click="contactAdmin"
  />
</template>
