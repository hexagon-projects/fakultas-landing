<template>
  <div ref="timelineContainerRef" class="w-full bg-[#f3f4f4] font-sans md:px-10 dark:bg-neutral-950">
    <!-- <div class="mx-auto max-w-7xl px-4 py-20 lg:px-10 md:px-8">
      <h2 class="mb-4 max-w-4xl text-lg text-black md:text-4xl dark:text-white">
        {{ title }}
      </h2>
      <p class="max-w-sm text-sm text-neutral-700 md:text-base dark:text-neutral-300">
        {{ description }}
      </p>
    </div> -->

    <div ref="timelineRef" class="relative z-0 mx-auto max-w-7xl pb-20">
      <div
        v-for="(item, index) in props.items"
        :key="item.id + index"
        class="flex justify-start md:gap-10 grow"
        :class="index == 0 ? 'pt-0' : 'pt-10'"
      >
        <div
          class="sticky top-40 z-50 flex flex-col items-center self-start md:w-full md:flex-row"
        >
          <div
            class="absolute left-3 top-0 flex size-10 items-center justify-center rounded-full bg-colorPrimary md:left-3 dark:bg-black"
          >
            <img src="/src/assets/images/logo.webp" alt="" class="w-1/2">
          </div>
          <div>
            <h3
              class="hidden font-bold text-xl md:block md:pl-20"
            >
              {{ item.label }}
            </h3>
            <p class="hidden md:block md:pl-20 mt-2" v-html="item.description"></p>
          </div>
        </div>
        <slot :name="item.id"></slot>
      </div>
      <div
        :style="{
          height: height + 'px',
        }"
        class="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
      >
        <Motion
          as="div"
          :style="{
            height: typeof heightTransform === 'object' ? heightTransform.get() : heightTransform,
            opacity:
              typeof opacityTransform === 'object' ? opacityTransform.get() : opacityTransform,
          }"
          class="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-0% via-blue-500 via-10% to-transparent"
        >
        </Motion>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Motion, useScroll, useTransform } from 'motion-v'
import type { HTMLAttributes } from 'vue'
import { onMounted, ref, watch, nextTick } from 'vue'

interface Props {
  containerClass?: HTMLAttributes['class']
  class?: HTMLAttributes['class']
  items?: {
    id: string
    label: string
    description: string
  }[]
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
})

const timelineContainerRef = ref<HTMLElement | null>(null)
const timelineRef = ref<HTMLElement | null>(null)
const height = ref(0)

onMounted(async () => {
  await nextTick()
  if (timelineRef.value) {
    const rect = timelineRef.value.getBoundingClientRect()
    height.value = rect.height
  }
})

const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ['start 10%', 'end 50%'],
})

const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])
const heightTransform = ref(useTransform(scrollYProgress, [0, 1], [0, 0]))

watch(height, (newHeight) => {
  heightTransform.value = useTransform(scrollYProgress, [0, 1], [0, newHeight])
})
</script>
