<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  threshold?: number;
  delay?: number;
  customClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 0.1,
  delay: 0,
  customClass: '',
})

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const observer = ref<IntersectionObserver | null>(null)

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setTimeout(() => {
          isVisible.value = true
        }, props.delay)
        // Once visible, no need to observe anymore
        if (entry.target && observer.value) {
          observer.value.unobserve(entry.target)
        }
      }
    },
    { threshold: props.threshold },
  )

  if (sectionRef.value) {
    observer.value?.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer.value && sectionRef.value) {
    observer.value.unobserve(sectionRef.value)
  }
})
</script>

<template>
  <div
    ref="sectionRef"
    :class="[
      'transition-all duration-700 w-full',
      {
        'opacity-0 translate-y-16': !isVisible,
        'opacity-100 translate-y-0': isVisible,
      },
      customClass,
    ]"
  >
    <slot></slot>
  </div>
</template>
