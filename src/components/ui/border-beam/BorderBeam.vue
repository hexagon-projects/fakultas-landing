borderbeam.vue

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface BorderBeamProps {
  class?: string
  size?: number
  duration?: number
  borderWidth?: number
  anchor?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
  sizeSecond?: number
  durationSecond?: number
  anchorSecond?: number
  colorFromSecond?: string
  colorToSecond?: string
  delaySecond?: number
  enableSecondBorder?: boolean
  startPositionSecond?: number
  finishPositionSecond?: number
  finishPosition?: number
}

const defaultColor = 'rgb(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b))'

const props = withDefaults(defineProps<BorderBeamProps>(), {
  size: 300,
  duration: 30000,
  anchor: 90,
  borderWidth: 1.5,
  colorFrom: defaultColor,
  colorTo: defaultColor,
  delay: 0,
  sizeSecond: 180,
  durationSecond: 30000,
  anchorSecond: 75,
  colorFromSecond: defaultColor,
  colorToSecond: defaultColor,
  delaySecond: 0,
  enableSecondBorder: true,
  startPositionSecond: 50,
  finishPositionSecond: 100,
  finishPosition: 100,
})

const durationInSeconds = computed(() => `${props.duration}s`)
const delayInSeconds = computed(() => `${props.delay}s`)
const durationSecondInSeconds = computed(() => `${props.durationSecond}s`)
const delaySecondInSeconds = computed(() => `${props.delaySecond}s`)
const startPositionSecondPercent = computed(() => `${props.startPositionSecond}%`)
const finishPositionSecondPercent = computed(() => `${props.finishPositionSecond}%`)
const finishPositionPercent = computed(() => `${props.finishPosition}%`)
</script>

<template>
  <div
    :class="
      cn(
        'border-beam',
        'pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]',
        '![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]',
        'after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]',
        'before:absolute before:aspect-square before:w-[calc(var(--size-second)*1px)] animate-border-beam-second before:[animation-delay:var(--delay-second)] before:[background:linear-gradient(to_left,var(--color-from-second),var(--color-to-second),transparent)] before:[offset-anchor:calc(var(--anchor-second)*1%)_50%] before:[offset-path:rect(0_auto_auto_0_round_calc(var(--size-second)*1px))]',
        props.class,
      )
    "
  ></div>
</template>

<style scoped>
.border-beam {
  --size: v-bind('size');
  --duration: v-bind('durationInSeconds');
  --anchor: v-bind('anchor');
  --border-width: v-bind('borderWidth');
  --color-from: v-bind('colorFrom');
  --color-to: v-bind('colorTo');
  --delay: v-bind('delayInSeconds');
  --size-second: v-bind('sizeSecond');
  --duration-second: v-bind('durationSecondInSeconds');
  --anchor-second: v-bind('anchorSecond');
  --color-from-second: v-bind('colorFromSecond');
  --color-to-second: v-bind('colorToSecond');
  --delay-second: v-bind('delaySecondInSeconds');
  --start-position-second: v-bind('startPositionSecondPercent');
  --finish-position-second: v-bind('finishPositionSecondPercent');
  --finish-position: v-bind('finishPositionPercent');
}

.animate-border-beam::after {
  animation: border-beam-anim var(--duration) infinite linear;
  offset-distance: 0%;
}

.animate-border-beam-second::before {
  animation: border-beam-anim-second var(--duration-second) infinite linear;
  offset-distance: var(--start-position-second);
}

@keyframes border-beam-anim {
  to {
    offset-distance: var(--finish-position, 100%);
  }
}

@keyframes border-beam-anim-second {
  to {
    offset-distance: var(--finish-position-second, 100%);
  }
}
</style>
