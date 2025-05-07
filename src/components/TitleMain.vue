<script lang="ts" setup>
import { ref, onMounted } from 'vue';

// Definisikan tipe untuk karakter HTML
interface HtmlChar {
  char: string;
  tags: TagInfo[];
  style?: {
    animationDelay: string;
  };
}

interface TagInfo {
  name: string;
  attributes: {
    name: string;
    value: string;
  }[];
}

interface CharItem {
  char: string;
  style: {
    animationDelay: string;
  };
}

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

const container = ref<HTMLElement | null>(null);
const characters = ref<CharItem[]>([]);
const htmlCharacters = ref<HtmlChar[]>([]);
const words = ref<CharItem[][]>([]);

const parseHTML = (htmlString: string): HTMLElement => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return doc.body;
};

const processNodeForAnimation = (
  node: Node,
  result: HtmlChar[] = [],
  tagStack: TagInfo[] = []
): HtmlChar[] => {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent || '';
    if (text.trim()) {
      const chars = text.split('');
      chars.forEach(char => {
        result.push({
          char: char === ' ' ? '\u00A0' : char,
          tags: [...tagStack]
        });
      });
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const element = node as Element;
    const tagInfo: TagInfo = {
      name: element.nodeName.toLowerCase(),
      attributes: Array.from(element.attributes).map(attr => ({
        name: attr.name,
        value: attr.value
      }))
    };
    tagStack.push(tagInfo);

    Array.from(node.childNodes).forEach(child => {
      processNodeForAnimation(child, result, tagStack);
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
    const extractedChars: HtmlChar[] = [];

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

  // Tambahkan kelas untuk memulai animasi setelah komponen dipasang
  if (container.value) {
    container.value.classList.add('start-animation');
  }
});

const renderCharWithTags = (charObj: HtmlChar): string => {
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

<!-- Template dan style tetap sama seperti sebelumnya -->
<template>
  <h1
    ref="container"
    class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight overflow-hidden transform translate-x-full opacity-0 transition-all duration-700 ease-out whitespace-normal"
    :class="{ 'word-based-container': wordBased }"
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
          >{{ item.char }}</span>
        </span>
      </template>
      <template v-else>
        <span
          v-for="(item, index) in characters"
          :key="`char-${index}`"
          :style="item.style"
          class="inline-block opacity-0 character-animation"
        >{{ item.char }}</span>
      </template>
    </template>

    <template v-else>
      <span
        v-for="(item, index) in htmlCharacters"
        :key="`html-char-${index}`"
        :style="item.style"
        class="inline-block opacity-0 character-animation"
        v-html="renderCharWithTags(item)"
      ></span>
    </template>
  </h1>
</template>

<style scoped>
.start-animation {
  transform: translateX(0) !important;
  opacity: 1 !important;
}

.character-animation {
  animation: fadeInChar 0.5s forwards;
  animation-play-state: paused;
}

.start-animation .character-animation {
  animation-play-state: running;
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

.word-based-container :deep(.word-container:last-child) {
  margin-right: 0;
}

:deep(span) {
  display: inline-block;
}
</style>
