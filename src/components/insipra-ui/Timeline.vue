<template>
  <div ref="timelineContainerRef" class="w-full bg-[#f3f4f4] md:px-10 dark:bg-neutral-950 hidden md:block">

    <div ref="timelineRef" class="relative z-0 mx-auto max-w-7xl pb-20">
      <div v-for="(item, index) in props.items" :key="item.id + index" class="flex justify-start md:gap-10 grow"
        :class="index == 0 ? 'pt-0' : 'pt-10'">
        <div class="sticky top-40 z-50 flex flex-col items-center self-start md:w-full md:flex-row">
          <div
            class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full bg-colorPrimary md:left-3 dark:bg-black">
            <img src="/src/assets/images/logo.webp" alt="" class="w-1/2">
          </div>
          <div>
            <p class=" mt-14 md:mt-0 text-[12px] md:text-[10px] lg:text-[14px] font-bold md:pl-20 pb-2">{{ formatDate(item.date) }}
            </p>
            <h3 class="mt-0 text-[18px] md:text-[20px] lg:text-[22px] font-bold md:block md:pl-20">
              {{ item.label }}
            </h3>
            <TextSection class="md:block md:pl-20 mt-2" v-html="item.description"></TextSection>
          </div>
        </div>
        <slot :name="item.id"></slot>
      </div>

      <div :style="{
        height: height + 'px',
      }"
        class="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700">
        <div v-motion :style="{
          height: `${height * scrollYProgress}px`,
          opacity: opacityTransform
        }"
          class="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-colorPrimary/50 from-0% via-colorPrimary/75 via-10% to-transparent">
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile -->
<div class="w-full block md:hidden">
  <div v-for="(item, index) in props.items" :key="item.id + index" class="sticky flex flex-col" :style="{ top: `${20 + (index * 2)}px` }"
       :class="index == 0 ? 'pt-0' : 'pt-4'">
    <div class="sticky top-4 z-50 bg-white p-4 rounded-[16px] mb-4">
      <div class="flex items-center gap-3">
        <div class="flex size-10 items-center justify-center rounded-full bg-colorPrimary dark:bg-black">
          <img src="/src/assets/images/logo.webp" alt="" class="w-1/2">
        </div>
        <div>
          <p class="text-[12px] font-bold pb-1">{{ formatDate(item.date) }}</p>
          <h3 class="text-[18px] font-bold">{{ item.label }}</h3>
        </div>
      </div>
      <TextSection class="mt-2" v-html="item.description"></TextSection>
    </div>
    <slot :name="item.id"></slot>
  </div>
</div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { onMounted, ref, nextTick, onUnmounted } from 'vue'
import TextSection from '../TextSection.vue'

interface Props {
  containerClass?: HTMLAttributes['class']
  class?: HTMLAttributes['class']
  items?: {
    id: string
    label: string
    description: string
    date: string
  }[]
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
})

const formatDate = (dateString: string) => {
  if (!dateString) return ''

  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ]

  const [year, month, day] = dateString.split('-')
  const monthIndex = parseInt(month, 10) - 1

  return `${parseInt(day, 10)} ${months[monthIndex]} ${year}`
}

const timelineContainerRef = ref<HTMLElement | null>(null)
const timelineRef = ref<HTMLElement | null>(null)
const height = ref(0)
const scrollYProgress = ref(0)
const opacityTransform = ref(0)

onMounted(async () => {
  await nextTick()
  if (timelineRef.value) {
    const rect = timelineRef.value.getBoundingClientRect()
    height.value = rect.height

    // Set up scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll)
        } else {
          window.removeEventListener('scroll', handleScroll)
        }
      },
      { threshold: 0.1 }
    )

    if (timelineRef.value) {
      observer.observe(timelineRef.value)
    }

    // Initial calculation
    handleScroll()
  }
})

const handleScroll = () => {
  if (!timelineRef.value) return

  const rect = timelineRef.value.getBoundingClientRect()
  const start = window.innerHeight * 0.5
  const end = window.innerHeight * 0.5

  // Calculate how far we've scrolled through the timeline
  const totalScrollDistance = rect.height + end
  const currentScrollPosition = window.innerHeight - rect.top

  // Convert to a value between 0 and 1
  let progress = (currentScrollPosition - start) / (totalScrollDistance - start)
  progress = Math.max(0, Math.min(1, progress))

  scrollYProgress.value = progress
  opacityTransform.value = progress < 0.1 ? progress * 10 : 1
}

// Clean up event listener on component unmount
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
