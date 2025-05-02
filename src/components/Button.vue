<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  onClick: {
    type: Function as PropType<() => void>,
  },
  icon: {
    type: [Object, Function, String] as PropType<any>,
  },
  iconRight: {
    type: [Object, Function, String] as PropType<any>,
  },
  className: {
    type: String,
    default: 'btn-primary',
  },
  borderName : {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  padding : {
    type: String,
    default: 'md:px-8 md:py-4 px-6 py-3',
  },
});

const emit = defineEmits<{
  (e: 'click'): void
}>();

const handleClick = () => {
  props.onClick?.();
  emit('click');
};
</script>

<template>
    <button
        type="button"
        @click="handleClick"
        class="cursor-pointer hover:scale-95 transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:scale-100"
        :class="[
            className,
            borderName,
            padding,
        ]"
        :disabled="disabled"
    >
    <span>
        <template v-if="icon">
            <component :is="icon" />
        </template>
    </span>
    <slot></slot>
    <span>
        <template v-if="iconRight">
            <component :is="iconRight" />
        </template>
    </span>
  </button>
</template>