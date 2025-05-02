<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="loader">
      <div class="circle" v-for="n in 4" :key="n" :class="`circle-${n}`">
        <div class="dot" :class="`dot-${n}`"></div>
        <div class="outline" :class="`outline-${n}`"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No TS logic for now
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  --color: #fef251;
  --animation: 1.6s ease-in-out infinite;
}

.circle {
  position: relative;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-radius: 50%;
  margin: 0 10px;
  animation: circle-keys var(--animation);
}

.dot {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color);
  animation: dot-keys var(--animation);
  z-index: 2;
}

.outline {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  z-index: 1;
  animation: outline-keys var(--animation);
}

/* Individual animation delays */
.circle-1 {
  animation-delay: 0s;
}
.circle-2 {
  animation-delay: 0.2s;
}
.circle-3 {
  animation-delay: 0.4s;
}
.circle-4 {
  animation-delay: 0.6s;
}

.dot-1 {
  animation-delay: 0s;
}
.dot-2 {
  animation-delay: 0.2s;
}
.dot-3 {
  animation-delay: 0.4s;
}
.dot-4 {
  animation-delay: 0.6s;
}

.outline-1 {
  animation-delay: 0.2s;
}
.outline-2 {
  animation-delay: 0.4s;
}
.outline-3 {
  animation-delay: 0.6s;
}
.outline-4 {
  animation-delay: 0.8s;
}

@keyframes circle-keys {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes dot-keys {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes outline-keys {
  0% {
    transform: translate(-50%, -50%) scale(0);
    box-shadow: 0 0 0 0 var(--color);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 0 20px transparent;
    opacity: 0;
  }
}
</style>
