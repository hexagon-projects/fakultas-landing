<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { useFakultasStore } from '@/stores/fakultas.ts'

const showContent = ref(true);
const fakultasStore = useFakultasStore()

onMounted(async () => {
  await fakultasStore.getFacultyColor();
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="w-full overflow-hidden bg-netral">
    <Header />
    <Transition name="fade-up" appear>
      <div v-show="showContent" class="slot-container lg:mt-28">
        <slot></slot>
      </div>
    </Transition>
    <Footer />
  </div>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active,
.fade-up-appear-active {
  transition:
    opacity 1s ease-out,
    transform 1s ease-out;
}

.fade-up-enter-from,
.fade-up-leave-to,
.fade-up-appear-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>
