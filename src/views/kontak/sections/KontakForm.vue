<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import { useIdentityStore } from '@/stores/identity';
import { ref } from 'vue';

const identityStore = useIdentityStore();
const formData = ref({
  name: '',
  email: '',
  message: ''
});

const sendWhatsAppMessage = () => {
  if (!identityStore.identity?.phone) return;

  const phone = identityStore.identity.phone.replace(/^0/, '62');
  const text = `Halo, saya ${formData.value.name} (${formData.value.email}). ${formData.value.message}`;
  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;

  window.open(whatsappUrl, '_blank');

  // Reset form
  formData.value = { name: '', email: '', message: '' };
};
</script>

<template>
  <div
    class="w-full px-[30px] py-[20px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[120px] flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-20">
    <div class="w-full flex flex-col justify-center items-center gap-4 md:gap-5 lg:gap-6">
      <TextSection>Hubungi</TextSection>
      <TitleSection :text="'Kontak Kami'"></TitleSection>
      <TextSection>Hubungi kami dengan cara mengisi form dibawah ini.</TextSection>
    </div>

    <div
      class="p-[30px] lg:p-[60px] bg-white border border-[#DCDCDC] rounded-[8px] md:rounded-[16px] lg:rounded-[24px] w-full md:w-2/3 lg:w-1/2 space-y-4 lg:space-y-6">
      <div class="space-y-2 lg:space-y-4">
        <TextBody class="text-black/40">Nama</TextBody>
        <input
          v-model="formData.name"
          type="text"
          class="w-full border border-[#DCDCDC] py-3 px-4 text-sm md:text-base lg:text-lg rounded-[2px] md:rounded-[6px] lg:rounded-[12px]"
          required
        >
      </div>
      <div class="space-y-2 lg:space-y-4">
        <TextBody class="text-black/40">Email</TextBody>
        <input
          v-model="formData.email"
          type="email"
          class="w-full border border-[#DCDCDC] py-3 px-4 text-sm md:text-base lg:text-lg rounded-[2px] md:rounded-[6px] lg:rounded-[12px]"
          required
        >
      </div>
      <div class="space-y-2 lg:space-y-4">
        <TextBody class="text-black/40">Pesan</TextBody>
        <textarea
          v-model="formData.message"
          class="w-full border border-[#DCDCDC] py-3 px-4 text-sm md:text-base lg:text-lg rounded-[2px] md:rounded-[6px] lg:rounded-[12px] min-h-[120px]"
          required
        ></textarea>
      </div>
      <button
        @click="sendWhatsAppMessage"
        class="w-full py-3 bg-colorPrimary rounded-full text-white font-bold tetxt-sm md:text-base lg:text-lg hover:bg-opacity-90 transition"
        :disabled="!formData.name || !formData.email || !formData.message"
      >
        Kirim
      </button>
    </div>
  </div>
</template>
