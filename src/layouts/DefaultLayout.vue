<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import CTASection from './components/CTASection.vue';
import { berandaStore } from '@/stores';
import { onMounted } from 'vue';

onMounted(async () => {
    if(!berandaStore.isLoaded) {
        await berandaStore.getDataBeranda();
    }
});
</script>

<template>
    <div v-if="berandaStore.isLoading" class="flex justify-center items-center h-screen">
        <i class="pi pi-spin pi-spinner text-[#444444]" style="font-size: 300%;"></i>
    </div>
    <div v-show="!berandaStore.isLoading">
        <Header/>
        <div class="px-0 lg:px-[5%]">
            <router-view></router-view>
        </div>
        <div class="mb-32 lg:mt-48 mt-32">
            <CTASection/>
        </div>
        <Footer/>
    </div>
</template>