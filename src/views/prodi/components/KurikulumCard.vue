  <script setup lang="ts">
  const baseUrl = import.meta.env.VITE_APP_IMG_URL;

  const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) return '';
    return `${baseUrl}/${imagePath}`;
  };

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
    },
    margin: {
      type: String,
      default: ''
    }
  });
</script>

  <template>
    <div
      :class="[`py-5 px-5 lg:py-12 lg:px-6 h-fit flex flex-col justify-center items-center text-center rounded-[8px] md:rounded-[16px] lg:rounded-[24px] relative border-2 border-black hover:-translate-y-2 transition duration-500 shadow-gray-300/5 hover:shadow-black/5 shadow-xl hover:shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]`, margin]">
      <div class="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-3 lg:mb-10">
        <img :src="getImageUrl(image)" alt="" class="w-full h-full svg-primary" v-if="image">
      </div>
      <div class="space-y-2 lg:space-y-4 xl:max-w-[70%] mx-auto">
        <h3 class="text-[14px] md:text-[18px] lg:text-[20px] font-light">{{ title }}</h3>
        <!-- <TextBody><span v-html="sanitizeHtml(description)"></span></TextBody> -->
      </div>
      <!-- <div class="p-3 lg:p-4 absolute top-0 left-4">
        <p class="text-lg md:text-xl lg:text-2xl">{{ number.toString().padStart(2, '0') }}</p>
      </div> -->
    </div>
  </template>
