<template>
  <div class="language-switcher">
    <button
      @click="changeLanguage('id')"
      :class="{ 'active': currentLocale === 'id' }"
      class="language-button"
    >
      ID
    </button>
    <span class="divider">|</span>
    <button
      @click="changeLanguage('en')"
      :class="{ 'active': currentLocale === 'en' }"
      class="language-button"
    >
      EN
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = locale

const changeLanguage = (lang: string) => {
  locale.value = lang
  localStorage.setItem('userLanguage', lang)
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  gap: 8px;
}

.language-button {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;
  transition: all 0.3s ease;
}

.language-button:hover {
  color: #333;
}

.language-button.active {
  color: #000;
  font-weight: bold;
  text-decoration: underline;
}

.divider {
  color: #ccc;
}
</style>
