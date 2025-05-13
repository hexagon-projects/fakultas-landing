<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const currentLanguage = ref({
  code: 'ID',
  name: 'Indonesia'
});

const languageMap: Record<string, string> = {
  'ID': 'Indonesia',
  'EN': 'English',
  'ES': 'Español',
  'FR': 'Français',
  'DE': 'Deutsch',
  'JA': '日本語',
  'ZH-CN': '中文',
  'AR': 'العربية',
  'RU': 'Русский'
};

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.head.appendChild(script);

  window.googleTranslateElementInit = () => {
    new (window as any).google.translate.TranslateElement(
      {
        pageLanguage: 'id',
        includedLanguages: 'en,es,fr,de,ja,zh-CN,ar,ru',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      'google_translate_element'
    );

    setTimeout(() => {
      setupLanguageChangeListener();
      checkCurrentLanguage();
      customizeDropdownStyles();
    }, 500);
  };
});

const customizeDropdownStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    .goog-te-menu2 {
      background: white !important;
      border-radius: 8px !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
      border: none !important;
      padding: 8px 0 !important;
      min-width: 160px !important;
      margin-top: 8px !important;
    }

    .goog-te-menu2-item {
      padding: 8px 16px !important;
      font-family: 'Inter', sans-serif !important;
      color: #334155 !important;
      font-size: 14px !important;
      transition: all 0.2s ease !important;
    }

    .goog-te-menu2-item:hover {
      background: #f8fafc !important;
      color: #1e293b !important;
    }

    .goog-te-menu2-item-selected {
      background: #f1f5f9 !important;
    }

    .goog-te-menu2-item div,
    .goog-te-menu2-item span {
      color: inherit !important;
      font-size: inherit !important;
      font-family: inherit !important;
    }

    .goog-te-menu2-item-selected .text {
      color: #1e293b !important;
    }
  `;
  document.head.appendChild(style);
};

const checkCurrentLanguage = () => {
  const langCookie = document.cookie.match(/googtrans=([^;]+)/);
  if (langCookie) {
    const langCode = langCookie[1].split('/')[2].toUpperCase();
    updateLanguageDisplay(langCode);
  }
};

const updateLanguageDisplay = (langCode: string) => {
  currentLanguage.value = {
    code: langCode,
    name: languageMap[langCode] || languageMap['ID']
  };
};

const setupLanguageChangeListener = () => {
  // Listen for language changes via cookie
  const checkCookie = () => {
    const langCookie = document.cookie.match(/googtrans=([^;]+)/);
    if (langCookie) {
      const langCode = langCookie[1].split('/')[2].toUpperCase();
      if (langCode !== currentLanguage.value.code) {
        updateLanguageDisplay(langCode);
      }
    }
  };

  // Check every 300ms for changes
  const intervalId = setInterval(checkCookie, 300);

  // Also listen for DOM changes as fallback
  const observer = new MutationObserver(() => {
    const langElement = document.querySelector('.goog-te-menu-value span:first-child');
    if (langElement) {
      const langCode = langElement.textContent?.trim().toUpperCase() || 'ID';
      if (langCode !== currentLanguage.value.code) {
        updateLanguageDisplay(langCode);
      }
    }
  });

  const target = document.querySelector('.goog-te-menu-value');
  if (target) {
    observer.observe(target, { childList: true, subtree: true });
  }

  const gadget = document.querySelector('.goog-te-gadget');

  if (gadget) {
    const googleText = gadget.querySelector('span');
    if (googleText) googleText.style.display = 'none';
  }

  onUnmounted(() => {
    clearInterval(intervalId);
    observer.disconnect();
  });
};
</script>

<template>
  <div class="google-translate-container">
    <div id="google_translate_element"></div>
  </div>
</template>

<style scoped>
.google-translate-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  justify-items: center;
  align-items: center;
  background: white;
  padding: 14px;
  border-radius: 9999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.9);
}

.google-translate-container:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

.language-display {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  color: #334155;
  min-width: 100px;
}

.language-info {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.language-code {
  font-size: 14px;
  font-weight: 600;
}

.language-name {
  font-size: 12px;
  opacity: 0.8;
}

/* Animation for dropdown */
.goog-te-menu2 {
  animation: fadeIn 0.2s ease-out !important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .google-translate-container {
    bottom: 100px;
    right: 10px;
    padding: 10px;
  }

  .language-name {
    display: none;
  }

  .language-code {
    font-size: 13px;
  }
}
</style>
