<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const showContent = ref(false);

onMounted(async () => {
  await nextTick();
  showContent.value = true;
});
</script>

<template>
  <div class="w-full overflow-hidden bg-netral">
    <Header />
    <Transition name="fade-up">
      <div v-if="showContent" class="slot-container lg:mt-28">
        <slot></slot>
      </div>
    </Transition>
    <Footer />
  </div>
</template>

<style scoped>
.slot-container {}

.fade-up-enter-active,
.fade-up-leave-active {
  transition:
    opacity 1s ease-out,
    transform 1s ease-out;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
