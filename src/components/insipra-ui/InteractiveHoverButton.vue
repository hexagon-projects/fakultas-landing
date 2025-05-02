<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { ref } from 'vue'

interface Props {
  text?: string
  class?: string
  color?: string
  borderCustom?: string
  background?: string
  padding?: string
  logo?: string
}
const props = withDefaults(defineProps<Props>(), {
  text: 'Button',
  class: '',
  color: 'text-white',
  borderCustom: 'border-colorPrimary',
  background: 'bg-colorPrimary hover:bg-primary',
  padding: 'py-3 md:px-8 px-5',
  logo : '',
})

const buttonRef = ref<HTMLButtonElement>()
</script>
<template>
  <button
    ref="buttonRef"
    :class="
      cn(
        'group relative w-auto cursor-pointer overflow-hidden rounded-full border text-center font-semibold hover:border-transparent',
        props.class,
        props.borderCustom,
        props.background,
        props.padding,
      )
    "
  >
    <div class="flex items-center gap-2">
      <div
        class="size-2 scale-100 rounded-lg bg-primary transition-all duration-300 group-hover:scale-[100.8]"
      ></div>
      <span
        class="inline-block whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-sm md:text-base"
        :class="
          cn(
            props.color
          )
        "
      >
        {{ text }}
      </span>
      <i :class="logo"></i>
    </div>

    <div
      class="absolute top-0 z-10 flex size-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100"
    >
      <span class="whitespace-nowrap text-sm md:text-base">{{ text }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-arrow-right"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </div>
  </button>
</template>

<style></style>
