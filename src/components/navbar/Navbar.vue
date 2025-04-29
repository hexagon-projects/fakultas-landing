<template>
  <div class="w-full h-fit flex justify-center relative z-50">
    <!-- Desktop Navbar -->
    <nav
      :class="[
        'w-[90%] lg:w-[93%] xl:w-[94%]',
        'mt-3 ml-11 xl:mt-4',
        position,
        'z-50 p-4 justify-between items-center hidden lg:flex rounded-lg md:rounded-4xl transition-all duration-500 ease-in-out',
        shadow,
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-2 border-[#FAFAFA]/50'
          : `${bgColor} border-2 border-[#e2dbdb]`,
      ]"
      aria-label="Main navigation"
    >
      <div
        class="flex items-center gap-3 md:gap-4 z-1 cursor-pointer"
        @click="() => router.push('/')"
      >
        <img
          :src="Logo"
          alt="Logo Universitas Pasundan"
          class="w-10 h-10 md:w-12 md:h-12 object-cover"
        />
        <div class="w-[85%]">
          <p :class="`text-xs ${color}`">Penerimaan Mahasiswa Baru</p>
          <span :class="`text-lg md:text-base lg:text-lg font-medium ${color}`"
            >Universitas Pasundan</span
          >
        </div>
      </div>

      <img :src="Union" alt="" class="absolute top-0 left-0 h-full w-[23%] object-fit" />

      <div
        :class="`hidden xl:w-9/12 md:flex items-center xl:justify-between gap-4 xl:gap-8 font-medium ${navbarColors}`"
      >
        <RouterLink
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.path"
          :aria-label="item.name"
          class="relative p-4 text-center text-xs lg:text-base rounded-lg md:rounded-xl lg:rounded-2xl transition-colors duration-500 ease-in-out hover:font-semibold"
          :class="{ 'text-[#444444]': route.path === item.path }"
        >
          {{ item.name }}
        </RouterLink>
        <Button
          @click="handleClick"
          class="flex justify-center items-center gap-2.5 py-3 px-8 rounded-2xl border-[2px] border-[#c93829] bg-[#fef251] text-[#444] text- font-inter text-md font-medium leading-7 transition duration-200 hover:bg-[#ffef5b] hover:brightness-95"
        >
          Daftar
        </Button>
      </div>
    </nav>

    <!-- Mobile Navbar -->
    <nav
      class="w-full fixed bottom-0 left-0 z-50 bg-white px-3 py-3 flex justify-between items-center lg:hidden rounded-t-xl"
    >
      <RouterLink
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.path"
        :aria-label="item.name"
        class="w-full relative flex flex-col items-center p-2 justify-between rounded-full transition-colors duration-500 ease-in-out"
        :class="route.path === item.path ? 'text-[#C73929]' : 'text-[#484C52]'"
      >
        <component :is="item.icon" class="w-6 h-6" />
        <span
          :class="`text-xs mt-2 ${route.path === item.path ? 'text-[#C73929] font-bold' : ''}`"
          >{{ item.name }}</span
        >
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  HomeIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  MapPinIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'
import Logo from '@/assets/logo.png'
import Union from '@/assets/navbar.png'

const route = useRoute()
const router = useRouter()

const isScrolled = ref(false)
const color = ref('text-gray-700')
const navbarColors = ref('text-gray-700')
const isMobile = ref(window.innerWidth <= 768)

const menuItems = [
  { name: 'Beranda', path: '/', icon: HomeIcon },
  { name: isMobile.value ? 'Tentang' : 'Tentang', path: '/Tentang', icon: BookOpenIcon },
  { name: isMobile.value ? 'Riset' : 'Riset & Inovasi', path: '/Riset', icon: CalendarDaysIcon },
  { name: 'Program Studi', path: '/ProgramStudi', icon: MapPinIcon },
  {
    name: isMobile.value ? 'Kegiatan Mahasiwa' : 'Kegiatan Mahasiwa ',
    path: '/Kegiatan Mahasiwaa',
    icon: UsersIcon,
  },
]

const position = 'fixed top-0 left-0'
const bgColor = 'bg-[#DCDCDC]'
const titleColor = 'text-gray-700'
const shadow = ''

const handleClick = () => {
  window.location.href = 'https://registrasi.unpas.ac.id/register'
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  color.value = isScrolled.value ? 'text-gray-700' : titleColor
  navbarColors.value = isScrolled.value ? 'text-gray-700' : titleColor
}

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>
