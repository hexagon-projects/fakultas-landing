<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: 'Hello World'
  },
  html: {
    type: Boolean,
    default: false
  },
  delay: {
    type: Number,
    default: 60
  },
  wordBased: {
    type: Boolean,
    default: true
  }
});

const container = ref(null);
const characters = ref([]);
const htmlCharacters = ref([]);
const words = ref([]);
const htmlWords = ref([]);
const isVisible = ref(false);

const parseHTML = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return doc.body;
};

const processNodeForAnimation = (node, result = [], tagStack = [], isWordBased = false) => {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent;
    if (text.trim()) {
      if (isWordBased) {
        // Split text content into words for word-based animation
        const wordArray = text.split(/(\s+)/);

        wordArray.forEach(word => {
          if (word) {
            const wordChars = word.split('').map(char => ({
              char: char === ' ' ? '\u00A0' : char,
              tags: [...tagStack]
            }));

            result.push({
              type: 'word',
              chars: wordChars
            });
          }
        });
      } else {
        // Character-based animation (original approach)
        const chars = text.split('');
        chars.forEach(char => {
          result.push({
            char: char === ' ' ? '\u00A0' : char,
            tags: [...tagStack]
          });
        });
      }
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const tagInfo = {
      name: node.nodeName.toLowerCase(),
      attributes: Array.from(node.attributes).map(attr => ({
        name: attr.name,
        value: attr.value
      }))
    };
    tagStack.push(tagInfo);

    Array.from(node.childNodes).forEach(child => {
      processNodeForAnimation(child, result, tagStack, isWordBased);
    });

    tagStack.pop();
  }

  return result;
};

onMounted(() => {
  if (!props.html) {
    if (props.wordBased) {
      // Split by words first, then by characters
      const wordArray = props.text.split(/(\s+)/).filter(word => word.trim().length > 0);
      let charCount = 0;

      words.value = wordArray.map(word => {
        const wordChars = word.split('').map((char, charIndex) => ({
          char: char === ' ' ? '\u00A0' : char,
          style: {
            animationDelay: `${(charCount + charIndex) * props.delay}ms`
          }
        }));
        charCount += word.length;
        return wordChars;
      });
    } else {
      // Original character-based splitting
      characters.value = props.text.split('').map((char, index) => {
        return {
          char: char === ' ' ? '\u00A0' : char,
          style: {
            animationDelay: `${index * props.delay}ms`
          }
        };
      });
    }
  } else {
    const domBody = parseHTML(props.text);

    if (props.wordBased) {
      // Process HTML in word-based mode
      const extractedWords = [];
      Array.from(domBody.childNodes).forEach(node => {
        processNodeForAnimation(node, extractedWords, [], true);
      });

      let charCount = 0;
      htmlWords.value = extractedWords.map((wordObj, wordIndex) => {
        const wordWithDelay = wordObj.chars.map((charObj, charIndex) => {
          return {
            ...charObj,
            style: {
              animationDelay: `${(charCount + charIndex) * props.delay}ms`
            }
          };
        });
        charCount += wordObj.chars.length;
        return wordWithDelay;
      });
    } else {
      // Process HTML in character-based mode (original approach)
      const extractedChars = [];
      Array.from(domBody.childNodes).forEach(node => {
        processNodeForAnimation(node, extractedChars);
      });

      htmlCharacters.value = extractedChars.map((item, index) => {
        return {
          ...item,
          style: {
            animationDelay: `${index * props.delay}ms`
          }
        };
      });
    }
  }

  // Set up Intersection Observer to detect when the title is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect(); // Stop observing once animation is triggered
      }
    });
  }, {
    threshold: 0.01, // Lower threshold to detect even minimal visibility
    rootMargin: "0px 0px -10% 0px" // Trigger slightly before the element is fully in view
  });

  // Wait a short time to ensure the component is fully rendered
  setTimeout(() => {
    if (container.value) {
      observer.observe(container.value);
    }
  }, 100);
});

const renderCharWithTags = (charObj) => {
  let result = charObj.char;

  if (charObj.tags && charObj.tags.length) {
    charObj.tags.forEach(tag => {
      const attributesStr = tag.attributes
        .map(attr => `${attr.name}="${attr.value}"`)
        .join(' ');

      const openTag = attributesStr
        ? `<${tag.name} ${attributesStr}>`
        : `<${tag.name}>`;

      result = `${openTag}${result}</${tag.name}>`;
    });
  }

  return result;
};
</script>

<template>
  <h2
    ref="container"
    class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight transform translate-x-full opacity-0 transition-all duration-700 ease-out whitespace-normal"
    :class="{
      'word-based-container': wordBased,
      'start-animation': isVisible
    }"
  >
    <template v-if="!html">
      <template v-if="wordBased">
        <span
          v-for="(word, wordIndex) in words"
          :key="`word-${wordIndex}`"
          class="word-container"
        >
          <span
            v-for="(item, charIndex) in word"
            :key="`char-${wordIndex}-${charIndex}`"
            :style="item.style"
            class="inline-block opacity-0 character-animation"
            :class="{ 'animate-character': isVisible }"
          >{{ item.char }}</span>
        </span>
      </template>
      <template v-else>
        <span
          v-for="(item, index) in characters"
          :key="`char-${index}`"
          :style="item.style"
          class="inline-block opacity-0 character-animation"
          :class="{ 'animate-character': isVisible }"
        >{{ item.char }}</span>
      </template>
    </template>

    <template v-else>
      <template v-if="wordBased">
        <span
          v-for="(word, wordIndex) in htmlWords"
          :key="`html-word-${wordIndex}`"
          class="word-container-html"
        >
          <span
            v-for="(item, charIndex) in word"
            :key="`html-char-${wordIndex}-${charIndex}`"
            :style="item.style"
            class="inline-block opacity-0 character-animation"
            :class="{ 'animate-character': isVisible }"
            v-html="renderCharWithTags(item)"
          ></span>
        </span>
      </template>
      <template v-else>
        <span
          v-for="(item, index) in htmlCharacters"
          :key="`html-char-${index}`"
          :style="item.style"
          class="inline-block opacity-0 character-animation"
          :class="{ 'animate-character': isVisible }"
          v-html="renderCharWithTags(item)"
        ></span>
      </template>
    </template>
  </h2>
</template>

<style scoped>
.start-animation {
  transform: translateX(0) !important;
  opacity: 1 !important;
}

.character-animation {
  opacity: 0;
  transform: translateX(20px);
}

.animate-character {
  animation: fadeInChar 0.5s forwards;
}

@keyframes fadeInChar {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.word-container {
  display: inline-block;
  white-space: nowrap;
  margin-right: 0.225em;
}

.word-container-html {
  display: inline-block;
  white-space: nowrap;
  margin-right: 0.01em;
}

.word-based-container :deep(.word-container:last-child) {
  margin-right: 0;
}

:deep(span) {
  display: inline-block;
}
</style>
