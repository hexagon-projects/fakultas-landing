<template>
  <button ref="buttonRef" :class="cn(
    'group relative w-auto cursor-pointer overflow-hidden rounded-full border text-[10px] md:text-[12px] lg:text-[14px] font-bold text-center transition-all duration-300',
    props.bgColor || 'bg-colorPrimary',
    props.border || 'border-[3px]',
    props.borderColor || 'border-outline/50',
    props.textColor || 'text-netral',
    props.borderHover ? `hover:${props.borderHover}` : 'hover:border-colorPrimary',
    props.padding || 'py-3 px-6 lg:py-4 lg:px-6',
    props.class,
  )">
    <div class="flex items-center justify-center relative">
      <!-- Center background animation element -->
      <div :class="[
        'absolute inset-0 m-auto w-0 h-0 scale-0 rounded-full transition-all duration-300 group-hover:scale-[100] group-hover:w-full group-hover:h-full',
        bgHover || 'bg-netral'
      ]"></div>

      <!-- Default text that disappears on hover -->
      <span class="inline-block whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {{ text }}
      </span>
    </div>

    <!-- Hover state content that appears -->
    <div
      class="absolute top-0 z-10 flex size-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100"
      :class="textHover || 'text-colorPrimary'">
      <span class="whitespace-nowrap">{{ text }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-arrow-right transition-colors duration-500"
        :class="textHover ? textHover.replace('text-', 'stroke-') : 'stroke-colorPrimary'">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils';
import { ref } from 'vue';

interface Props {
  text?: string;
  class?: string;
  bgColor?: string;
  bgHover?: string;
  textHover?: string;
  borderHover?: string;
  border?: string;
  borderColor?: string;
  textColor?: string;
  padding?: string;
}
const props = withDefaults(defineProps<Props>(), {
  text: 'Button',
});

const buttonRef = ref<HTMLButtonElement>();
</script>

<style></style>
