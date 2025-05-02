<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    sizeText: {
        type: String,
        default: 'text-xs md:text-sm lg:text-sm',
    },
    color: {
        type: String,
        default: 'text-gray-800',
    },
    leading: {
        type: String,
        default: 'leading-5',
    },
    weight: {
        type: String,
        default: 'font-normal',
    },
    lineClamp: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <p :class="[sizeText, color, leading, weight, lineClamp]">{{ props.text }}</p>
</template>