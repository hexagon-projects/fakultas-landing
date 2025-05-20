<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import Org from '@/assets/org.png'
import ProspekCard from '../components/ProspekCard.vue'
import TitleSection from '@/components/TitleSection.vue'
import type { Prospek } from '@/core/types/prospek'
import type { Departement } from '@/core/types/departement'

const props = defineProps<{
  prospek: Prospek[]
  prodiDetail: Departement
}>()

const baseUrl = import.meta.env.VITE_APP_IMG_URL

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return ''
  return `${baseUrl}/${imagePath}`
}

const titleHTML = `Prospek Karir Program Studi <span class="text-colorPrimary font-bold">${props?.prodiDetail?.name}</span>`

const halfLength = Math.ceil(props?.prospek?.length / 2)
const leftCards = props?.prospek?.slice(0, halfLength)
const rightCards = props?.prospek?.slice(halfLength)
</script>

<template>
  <SectionLayout>
    <div class="w-full h-full flex flex-col justify-center items-center gap-2 lg:gap-4 text-center">
      <div class="px-4 py-2 rounded-[40px] border-[1px] border-colorPrimary">
        <p class="text-base font-medium text-colorPrimary">Peluang dan Jalur Professional</p>
      </div>
      <TitleSection :text="titleHTML" :html="true" :delay="60" class="lg:max-w-[680px]" />
    </div>

    <!-- DESKTOP LAYOUT -->
    <div class="hidden md:flex justify-start items-center gap-14">
      <div class="grid grid-cols-2">
        <div class="w-full">
          <img :src="Org" alt="org" class="w-full max-w-[554px] h-auto object-contain" />
        </div>
        <div class="w-full">
          <div class="flex flex-col justify-start items-start gap-12">
            <div class="self-stretch h-px bg-neutral-600/10" />
            <div
              v-for="(card, index) in props.prospek"
              :key="index"
              class="self-stretch relative flex flex-col justify-start items-start gap-6"
            >
              <div
                class="self-stretch px-10 rounded-3xl flex justify-start items-start gap-8 flex-wrap content-start"
              >
                <div class="flex justify-start items-center gap-2.5">
                  <div class="w-11 h-11 relative overflow-hidden">
                    <img
                      :src="getImageUrl(card.icon)"
                      alt="icon"
                      class="w-11 h-11 object-contain absolute left-[0.67px] top-[0.67px]"
                    />
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-start items-start gap-8">
                  <div class="text-netral-text text-xl font-medium leading-7">
                    {{ card.title }}
                  </div>
                  <div
                    class="text-netral-text text-base font-normal leading-normal"
                    v-html="card.description"
                  />
                </div>
              </div>
              <div
                class="left-0 top-[-34px] absolute justify-center text-FISS-950 text-sm font-normal leading-tight"
              >
                {{ index + 1 }}
              </div>
              <div class="self-stretch h-px bg-neutral-600/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE LAYOUT -->
    <div class="flex flex-col gap-4 md:hidden w-full mt-6">
      <img :src="Org" alt="org" class="w-56 mx-auto object-contain" />
      <div
        v-for="(card, index) in props.prospek"
        :key="index"
        class="self-stretch p-2 bg-white rounded-lg flex items-center gap-4"
      >
        <div class="p-2.5 rounded-lg flex justify-center items-center">
          <div class="w-6 h-6 relative">
            <img :src="getImageUrl(card.icon)" alt="icon" class="w-full h-full object-contain" />
          </div>
        </div>
        <div class="flex-1 flex flex-col justify-start items-start gap-1">
          <div class="text-text-color text-base font-normal leading-normal">
            {{ card.title }}
          </div>
          <div
            class="text-text-color text-xs font-normal leading-none"
            v-html="card.description"
          ></div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
