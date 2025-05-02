<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';

defineProps<{
  type: 'email' | 'phone' | 'map' | 'social';
  value?: string;
  link?: string;
  icon: string;
}>();
</script>

<template>
  <div class="flex flex-col justify-center items-center text-center gap-4 md:gap-5 lg:gap-6">
    <div class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
      <img :src="icon" :alt="type" class="w-full h-full object-contain">
    </div>
    <h4 class="text-[16px] lg:text-[32px] font-bold leading-tight">
      <template v-if="type === 'email'">Email</template>
      <template v-else-if="type === 'phone'">Telepon</template>
      <template v-else-if="type === 'map'">Lokasi</template>
    </h4>
    <TextBody>
      <template v-if="type === 'email'">Hubungi kami melalui email untuk pertanyaan dan informasi lebih lanjut</template>
      <template v-else-if="type === 'phone'">Hubungi kami melalui telepon selama jam kerja</template>
      <template v-else-if="type === 'map'">Kunjungi kampus kami di lokasi berikut</template>
    </TextBody>
    <TextBody>
      <template v-if="type === 'email'">{{ value }}</template>
      <template v-else-if="type === 'phone'">{{ value }}</template>
      <template v-else-if="type === 'map'">
        <a :href="link" target="_blank" class="hover:underline">Lihat di Google Maps</a>
      </template>
    </TextBody>
  </div>
</template>
