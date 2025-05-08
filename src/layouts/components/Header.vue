<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { motion } from 'motion-v'
import logo from '@/assets/images/logo.webp'
import union from '@/assets/images/navbar.png'

const route = useRoute()
const router = useRouter()

const isScrolled = ref(false)
const color = ref('text-gray-700')
const navbarColors = ref('text-gray-700')
const isMobile = ref(window.innerWidth <= 768)

const props = defineProps({
    position : {
        type: String,
        default: 'fixed top-0',
    },
    bgColor : {
        type: String,
        default: 'bg-[#F3F4F4]',
    },
    titleColor : {
        type: String,
        default: 'text-gray-700',
    },
    navbarColor : {
        type: String,
        default: 'text-gray-700',
    },
    shadow : {
        type: String,
        default: '',
    },
})

const updateScroll = () => {
    isScrolled.value = window.scrollY > 50
    color.value = isScrolled.value ? 'text-gray-700' : props.titleColor
    navbarColors.value = isScrolled.value ? 'text-gray-700' : props.navbarColor
}

const updateMobile = () => {
    isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
    window.addEventListener('scroll', updateScroll)
    window.addEventListener('resize', updateMobile)
})

watch(() => route.path, () => {
    window.scrollTo(0, 0)
})

const menuItems = [
    { name: 'Beranda', path: '/', icon: 'pi pi-home' },
    { name: 'Tentang', path: '/tentang-fakultas', icon: 'pi pi-book' },
    { name: isMobile.value ? 'Riset' : 'Riset & Inovasi', path: '/riset-dan-inovasi', icon: 'pi pi-calendar' },
    { name: isMobile.value ? 'Prodi' : 'Program Studi', path: '/prodi', icon: 'pi pi-map-marker' },
    { name: isMobile.value ? 'Kegiatan' : 'Kegiatan Mahasiswa', path: '/kegiatan', icon: 'pi pi-users' },
]

const handleClick = () => {
    window.location.href = 'https://registrasi.unpas.ac.id/register'
}

const navigateToHome = () => {
    router.push('/')
}
</script>

<template>
    <div class="w-full h-fit flex justify-center relative z-50">
        <!-- Desktop Navbar -->
        <nav
            :class="[
                'w-[90%] lg:w-[93%] xl:w-[94%] mt-3 xl:mt-4',
                position,
                'z-50 p-4 justify-between items-center hidden lg:flex rounded-lg md:rounded-[32px] transition-all duration-500 ease-in-out',
                shadow,
                isScrolled
                    ? 'bg-white/80 backdrop-blur-md border-2 border-[#FAFAFA]/50'
                    : `${bgColor} border-2 border-[#DCDCDC]`
            ]"
            aria-label="Main navigation"
        >
            <div class="flex items-center gap-3 md:gap-4 z-1 cursor-pointer" @click="navigateToHome">
                <img
                    :src="logo"
                    alt="Logo Universitas Pasundan"
                    class="w-10 h-10 md:w-12 md:h-12 object-cover"
                    loading="lazy"
                    width="48"
                    height="48"
                />
                <div class="w-[85%]">
                    <p :class="['text-xs', color]">Penerimaan Mahasiswa Baru</p>
                    <span :class="['text-lg md:text-base lg:text-lg font-medium', color]">Universitas Pasundan</span>
                </div>
            </div>

            <img
                :src="union"
                alt=""
                class="absolute top-0 left-0 h-full w-[23%] object-fit -z-10"
                loading="lazy"
                aria-hidden="true"
            />

            <div :class="['hidden xl:w-9/12 md:flex items-center xl:justify-between gap-4 xl:gap-8 font-medium', navbarColors]">
                <RouterLink
                    v-for="(item, index) in menuItems"
                    :key="index"
                    :to="item.path"
                    :aria-label="item.name"
                    class="relative p-4 text-center text-xs lg:text-base rounded-lg md:rounded-xl lg:rounded-2xl transition-colors duration-500 ease-in-out hover:font-semibold"
                    :class="{ 'text-[#444444]': route.path === item.path }"
                >
                    {{ item.name }}
                    <motion.div
                        v-if="route.path === item.path"
                        layoutId="activeNavItem"
                        initial="{ scaleY: 0 }"
                        animate="{ scaleY: 1 }"
                        exit="{ scaleY: 0 }"
                        class="absolute inset-0 h-full bg-[#D0D0D0] border-2 border-[#FAFAFA]/50 rounded-lg md:rounded-xl lg:rounded-2xl z-[-1]"
                        :style="{
                            originY: 'top',
                            scaleY: 1.1,
                        }"
                        :transition="{
                            type: 'spring',
                            bounce: 0.2,
                            duration: 0.6
                        }"
                    />
                </RouterLink>
                <button
                    class="pulsating-button flex gap-2 cursor-pointer items-center text-xs md:text-sm lg:text-sm px-8 py-4 md:px-8 md:py-4 font-bold border-2 border-transparent bg-primary text-gray-700 rounded-lg md:rounded-xl lg:rounded-2xl hover:border-2 hover:border-white/50 shadow-black/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254,242,81,0.5)] hover:shadow-black/5 transition-colors duration-500"
                    @click="handleClick"
                >
                    Daftar
                </button>
            </div>
        </nav>

        <!-- Mobile Navbar -->
        <nav
            class="w-screen fixed bottom-0 left-0 z-50 bg-white px-3 py-3 flex justify-between items-center lg:hidden rounded-t-xl"
            aria-label="Mobile navigation"
        >
            <RouterLink
                v-for="(item, index) in menuItems"
                :key="index"
                :to="item.path"
                :aria-label="item.name"
                class="w-full relative flex flex-col items-center py-2 justify-between rounded-full transition-colors duration-500 ease-in-out"
                :class="route.path === item.path ? 'text-[#C73929]' : 'text-[#484C52]'"
            >
                <i :class="item.icon"></i>
                <span :class="['text-xs mt-2', route.path === item.path ? 'text-[#C73929] font-bold' : '']">
                    {{ item.name }}
                </span>
            </RouterLink>
        </nav>
    </div>
</template>

<style scoped>
.pulsating-button {
    border: 2px solid;
    position: relative;
    animation: border-pulse 2s infinite;
}

@keyframes border-pulse {
    0% {
        border-color: rgba(199, 57, 41, 0.7);
        box-shadow: 0 0 0 0 rgba(199, 57, 41, 0.7);
    }
    50% {
        border-color: rgba(199, 57, 41, 0.7);
        box-shadow: 0 0 0 12px rgba(199, 57, 41, 0);
    }
    100% {
        border-color: rgba(199, 57, 41, 0.7);
        box-shadow: 0 0 0 0 rgba(199, 57, 41, 0);
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(199, 57, 41, 0.7);
    }
    50% {
        transform: scale(1);
        box-shadow: 0 0 0 12px rgba(199, 57, 41, 0);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(199, 57, 41, 0);
    }
}
</style>
