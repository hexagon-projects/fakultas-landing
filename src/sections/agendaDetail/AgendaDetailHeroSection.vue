<template>
  <div
    class="flex flex-col justify-center items-start gap-10 md:gap-20 pt-8 pb-8 md:pt-[3.75rem] md:pb-[3.75rem] px-4 sm:px-6 md:px-[7.5rem] w-full max-w-[1440px] bg-[#f3f4f4] mx-auto"
  >
    <div class="flex flex-col justify-center items-start gap-10 md:gap-20 self-stretch">
      <div
        class="self-stretch h-[200px] sm:h-[400px] md:h-[600px] lg:h-[738px] rounded-2xl md:rounded-[32px] overflow-hidden"
      >
        <img :src="imagePath" alt="Event banner image" class="w-full h-full object-cover" />
      </div>
      <div class="flex flex-col lg:flex-row items-start gap-10 md:gap-20 self-stretch">
        <div class="column flex flex-col items-start gap-6 md:gap-8 w-full lg:w-auto order-1">
          <div class="flex flex-col items-start gap-4 md:gap-6 self-stretch">
            <h1
              class="self-stretch text-black font-roboto text-3xl sm:text-4xl md:text-5xl font-bold leading-[120%]"
            >
              Event title heading
            </h1>
            <p class="self-stretch text-black font-roboto text-base md:text-lg leading-[150%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <button
              class="flex justify-center items-center gap-2 py-2 px-4 md:py-3 md:px-6 border border-black bg-black text-white font-roboto text-sm md:text-base leading-[150%] hover:bg-gray-800 transition-colors"
            >
              Save my spot
            </button>
            <button
              class="flex justify-center items-center gap-2 py-2 px-4 md:py-3 md:px-6 border border-black text-black font-roboto text-sm md:text-base leading-[150%] hover:bg-gray-100 transition-colors"
            >
              View events
            </button>
          </div>
        </div>

        <div
          class="flex flex-col items-start gap-6 md:gap-8 w-full lg:w-[464px] order-2 sm:order-3 lg:order-2"
        >
          <!-- First row (Date and Location) -->
          <div class="grid grid-cols-2 gap-4 md:gap-8 w-full">
            <div class="list_item flex flex-col items-start gap-1 md:gap-2">
              <h3
                class="self-stretch text-black font-roboto text-lg md:text-xl font-bold leading-[140%]"
              >
                Date
              </h3>
              <p class="self-stretch text-black font-roboto leading-[150%]">Sat 10 Feb 2024</p>
            </div>
            <div class="list_item flex flex-col items-start gap-1 md:gap-2">
              <h3
                class="self-stretch text-black font-roboto text-lg md:text-xl font-bold leading-[140%]"
              >
                Location
              </h3>
              <p class="self-stretch text-black font-roboto leading-[150%]">Sydney, Australia</p>
            </div>
          </div>

          <!-- Second row (Speaker and Type) -->
          <div class="grid grid-cols-2 gap-4 md:gap-8 w-full">
            <div class="list_item flex flex-col items-start gap-1 md:gap-2">
              <h3
                class="self-stretch text-black font-roboto text-lg md:text-xl font-bold leading-[140%]"
              >
                Speaker
              </h3>
              <p class="self-stretch text-black font-roboto leading-[150%]">Full name</p>
            </div>
            <div class="list_item flex flex-col items-start gap-1 md:gap-2">
              <h3
                class="self-stretch text-black font-roboto text-lg md:text-xl font-bold leading-[140%]"
              >
                Type
              </h3>
              <p class="self-stretch text-black font-roboto leading-[150%]">In-person</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const imagePath =
  'https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VzfGVufDB8fDB8fHww'
</script>

<style>
/* If you need to import the Roboto font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.font-roboto {
  font-family: 'Roboto', sans-serif;
}
</style>
