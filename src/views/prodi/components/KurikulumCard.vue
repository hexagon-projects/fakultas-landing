  <script setup lang="ts">
  import TextBody from '@/components/TextBody.vue';
  import { useSanitize } from '@/composables/useSanitize';

  const baseUrl = import.meta.env.VITE_APP_IMG_URL;

  const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) return '';
    return `${baseUrl}/${imagePath}`;
  };

  const { sanitizeHtml } = useSanitize()

  defineProps({
    number: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ''
    }
  });
</script>

  <template>
    <div
      class="p-6 flex flex-col justify-start items-center gap-2 text-center rounded-[16px] md:rounded-[24px] lg:rounded-[32px] relative bg-[#FAFAFA]/50 hover:-translate-y-2 transition duration-500 shadow-gray-300/5 hover:shadow-black/5 shadow-xl hover:shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
      <div class="w-full flex gap-4 md:gap-5 lg:gap-6 items-center md:items-start text-left">
        <div class="w-8 h-8">
          <img :src="getImageUrl(image)" alt="" class="w-full h-full svg-primary" v-if="image">
        </div>
        <p class="text-[18px] md:text-[20px] lg:text-[24px]">{{ title }}</p>
      </div>

      <div class="text-left">
        <TextBody><span v-html="sanitizeHtml(description)"></span></TextBody>
      </div>
      <!-- <div class="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-10 lg:mb-14">
      </div>
      <div class="space-y-2 lg:space-y-4">
        <h3 class="text-lg md:text-xl lg:text-2xl font-semibold">{{ title }}</h3>
      </div>
      <div class="p-3 lg:p-4 absolute top-0 left-4">
        <p class="text-lg md:text-xl lg:text-2xl">{{ number.toString().padStart(2, '0') }}</p>
      </div> -->
    </div>
  </template>
