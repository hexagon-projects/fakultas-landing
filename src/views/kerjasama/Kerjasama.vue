<script setup lang="ts">
import { kerjasamaStore } from '@/stores'
import { onMounted } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import KerjasamaHero from './sections/KerjasamaHero.vue'
import KerjasamaMitra from './sections/KerjasamaList.vue'
import MitraSection from '@/components/sections/MitraSection.vue'
import KerjasamaProyek from './sections/KerjasamaProyek.vue'
import CTASection from '@/components/sections/CTASection.vue'
import { usePartnerStore } from '@/stores/partner'

const partnerStore = usePartnerStore()

onMounted(() => {
  partnerStore.fetchPartners()
  kerjasamaStore.getInitialData()
})
</script>

<template>
  <MainLayout>
    <KerjasamaHero />
    <KerjasamaProyek />
    <KerjasamaMitra :partner="partnerStore.partners"/>
    <MitraSection :partners="partnerStore.partners"/>
    <CTASection />
  </MainLayout>
</template>
