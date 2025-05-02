<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view :key="$route.fullPath" />
</template>
