<script setup lang="ts"></script>

<template v-if="testimoni.length > 0">
  <div class="flex w-full mt-10 gap-6 flex-col md:flex-row md:items-center md:justify-center">
    <!-- Kiri -->
    <div class="basis-[35%] relative overflow-hidden rounded-3xl min-h-[492px]">
      <img
        :src="getImageUrl(testimoni[activeIndex]?.image || null)"
        alt="Foto Testimoni"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/0 to-colorPrimary/50 z-10"></div>
      <div class="absolute bottom-6 px-[22px] z-20">
        <div class="text-left text-white text-xl font-bold font-['Sora'] leading-loose">
          {{ testimoni[activeIndex]?.name }}
        </div>
        <div class="text-left text-white text-lg font-medium font-['Sora'] leading-relaxed">
          {{ testimoni[activeIndex]?.title }}
        </div>
      </div>
    </div>

    <!-- Kanan -->
    <div
      class="flex-1 h-[492px] py-[22px] px-[22px] bg-white rounded-3xl max-w-3xl flex flex-col justify-between"
    >
      <div class="potongan-container">
        <div
          class="relative z-10 py-7 px-8 flex flex-col h-full justify-between bg-colorPrimary potongan rounded-[32px]"
        >
          <div
            class="inline-flex items-center gap-2 p-2 bg-gray-100 rounded-full outline outline-1 outline-gray-100 w-fit h-fit"
          >
            <div class="w-6 h-6 bg-colorPrimary rounded-full">
              <svg
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:anim="http://www.w3.org/2000/anim"
                anim=""
                anim:transform-origin="50% 50%"
                anim:duration="1"
                anim:ease="ease-in-out"
              >
                <g id="bi:quote">
                  <path
                    id="Vector"
                    d="M12.5622 12C12.8275 12 13.0818 11.8946 13.2694 11.7071C13.4569 11.5196 13.5622 11.2652 13.5622 11V8.558C13.5622 8.29278 13.4569 8.03843 13.2694 7.85089C13.0818 7.66336 12.8275 7.558 12.5622 7.558H11.1742C11.1742 7.207 11.1952 6.855 11.2362 6.504C11.2982 6.132 11.4022 5.801 11.5462 5.512C11.6912 5.222 11.8772 4.995 12.1052 4.829C12.3322 4.643 12.6212 4.55 12.9732 4.55V3C12.3942 3 11.8882 3.124 11.4532 3.372C11.022 3.61749 10.6513 3.95645 10.3682 4.364C10.0842 4.81331 9.87479 5.3057 9.74825 5.822C9.62073 6.39176 9.55833 6.97416 9.56225 7.558V11C9.56225 11.2652 9.6676 11.5196 9.85514 11.7071C10.0427 11.8946 10.297 12 10.5622 12H12.5622ZM6.56225 12C6.82746 12 7.08182 11.8946 7.26935 11.7071C7.45689 11.5196 7.56225 11.2652 7.56225 11V8.558C7.56225 8.29278 7.45689 8.03843 7.26935 7.85089C7.08182 7.66336 6.82746 7.558 6.56225 7.558H5.17425C5.17425 7.207 5.19525 6.855 5.23625 6.504C5.29825 6.132 5.40225 5.801 5.54625 5.512C5.69125 5.222 5.87725 4.995 6.10525 4.829C6.33225 4.643 6.62125 4.55 6.97325 4.55V3C6.39425 3 5.88825 3.124 5.45325 3.372C5.02203 3.61749 4.65129 3.95645 4.36825 4.364C4.08417 4.81331 3.87479 5.3057 3.74825 5.822C3.62073 6.39176 3.55833 6.97416 3.56225 7.558V11C3.56225 11.2652 3.6676 11.5196 3.85514 11.7071C4.04268 11.8946 4.29703 12 4.56225 12H6.56225Z"
                    fill="white"
                  ></path>
                </g>
              </svg>
            </div>
            <p class="text-colorPrimary text-base font-medium">Client Testimonial</p>
          </div>

          <div
            class="mt-[22px] w-full text-left text-3xl font-normal leading-snug font-['Inter'] line-clamp-6 text-[#F3F4F4]"
            v-html="sanitizeHtml(testimoni[activeIndex]?.description)"
          ></div>
        </div>

        <svg
          :style="{ visibility: 'hidden', position: 'absolute' }"
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="flex justify-between items-center border">
        <button
          class="flex items-center gap-2 px-5 py-3 bg-colorPrimary text-white rounded-full outline outline-2 outline-gray-100"
        >
          <span class="text-sm font-medium">See more testimonies</span>
          <div class="h-5 w-5">
            <svg
              viewBox="0 0 25 24"
              fill="none"
              xmlns:anim="http://www.w3.org/2000/anim"
              anim=""
              anim:transform-origin="50% 50%"
              anim:duration="1"
              anim:ease="ease-in-out"
            >
              <g id="iconoir:arrow-tr">
                <path
                  id="Vector"
                  d="M6.56226 19L19.5623 6M19.5623 6V18.48M19.5623 6H7.08226"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </button>
        <div class="flex gap-4">
          <button
            class="p-3 bg-gray-100 rounded-full outline outline-1 outline-colorPrimary"
            @click="prevTestimonial"
          >
            <!-- Panah kiri -->
            <svg
              height="24"
              width="25"
              fill="none"
              viewBox="0 0 25 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2692 17.293L8.97619 13H18.5622V11H8.97619L13.2692 6.70697L11.8552 5.29297L5.14819 12L11.8552 18.707L13.2692 17.293Z"
                class="fill-colorPrimary"
              />
            </svg>
          </button>

          <button
            class="p-3 bg-gray-100 rounded-full outline outline-1 outline-colorPrimary"
            @click="nextTestimonial"
          >
            <!-- Panah kanan -->
            <svg
              height="24"
              width="25"
              fill="none"
              viewBox="0 0 25 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8553 17.293L13.2693 18.707L19.9763 12L13.2693 5.29297L11.8553 6.70697L16.1483 11H6.56226V13H16.1483L11.8553 17.293Z"
                class="fill-colorPrimary"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Jika kosong -->
<template v-else>
  <p class="text-gray-400 mt-10">Tidak ada data testimoni yang tersedia saat ini.</p>
</template>
