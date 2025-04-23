<script lang="ts" setup>
import SectionLayout from '@/layouts/SectionLayout.vue'
</script>

<template>
  <SectionLayout>
    <div class="flex flex-wrap -mt-[20vh]">
      <!-- Kolom Kiri (Gambar) -->
      <div class="w-full md:w-1/2 bg-gray-200">
        <div
          className="lightgray 50% / cover no-repeat] self-stretch h-[420px] bg-[url(<path-to-image>)"
        />
      </div>

      <!-- Kolom Kanan (Teks + Button) -->
      <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <div className="content flex flex-col justify-center items-start gap-6 self-stretch">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div
              className="flex flex-wrap items-center content-center gap-4 self-stretch h-[1.8125rem]"
            >
              <div
                className="flex items-start py-1 px-2 bg-[#eee] text-black  text-sm font-semibold leading-[150%]"
              >
                Category
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch">
              <div className="flex flex-col justify-center items-start self-stretch">
                <div className="self-stretch text-black  text-2xl font-bold leading-[140%]">
                  Event title heading
                </div>
                <div className="self-stretch text-black  leading-[150%]">Location</div>
              </div>
              <div className="self-stretch text-black  leading-[150%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros.
              </div>
            </div>
          </div>
          <button
            class="items-center gap-2 py-3 px-6 border border-black text-black leading-[150%]"
          >
            Save My Spot
          </button>
        </div>
      </div>
    </div>

    <!------ list -------->
    <div className="flex items-center">
      <div
        className="flex justify-center items-center gap-2 py-2 px-4 border border-black bg-white text-black  leading-[150%]"
      >
        View all
      </div>
      <div className="flex justify-center items-center gap-2 py-2 px-4 text-black  leading-[150%]">
        Category one
      </div>
      <div className="flex justify-center items-center gap-2 py-2 px-4 text-black  leading-[150%]">
        Category two
      </div>
      <div className="flex justify-center items-center gap-2 py-2 px-4 text-black  leading-[150%]">
        Category three
      </div>
      <div className="flex justify-center items-center gap-2 py-2 px-4 text-black  leading-[150%]">
        Category four
      </div>
    </div>
    <div
      className="flex items-center gap-8 self-stretch py-8 px-0 border-t-[var(--Stroke-Divider-Width,] border-t-[1px)] border-t-[#000]"
    >
      <div
        className="flex flex-col justify-center items-center py-3 px-1 w-28 border-[var(--Stroke-Border-Width,] border-[1px)] border-black bg-white"
      >
        <div className="self-stretch text-black text-center  leading-[150%]">Fri</div>
        <div className="self-stretch text-black text-center  text-[2rem] font-bold leading-[130%]">
          09
        </div>
        <div className="self-stretch text-black text-center  leading-[150%]">Feb 2024</div>
      </div>
      <div className="content flex flex-col items-start gap-4">
        <div className="flex flex-col items-start self-stretch">
          <div className="flex items-center gap-4 self-stretch">
            <div className="text-black  text-2xl font-bold leading-[140%]">Event title heading</div>
            <div
              className="flex items-start py-1 px-2 bg-[#eee] text-black  text-sm font-semibold leading-[150%]"
            >
              Sold out
            </div>
          </div>
          <div className="self-stretch text-black  text-sm leading-[150%]">Location</div>
        </div>
        <div className="self-stretch text-black  leading-[150%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
          elementum tristique.
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-2 py-2 px-5 border border-black text-black  leading-[150%]"
      >
        Save my spot
      </div>
    </div>
  </SectionLayout>
</template>
