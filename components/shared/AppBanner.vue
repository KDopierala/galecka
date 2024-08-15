<template>
  <div :class="['relative w-full h-screen overflow-hidden', { '-mt-[90px] md:-mt-[112px]': true }]" :style="{ borderRadius: `${borderRadiusValue}px` }">
    <div ref="slider" class="flex h-full transition-transform duration-500 ease-in-out">
      <div v-for="(slide, index) in slides" :key="index" class="min-w-full h-full flex items-center justify-center">
        <img :src="slide.image" alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>
    </div>
    <div class="absolute inset-0 flex justify-between items-center p-4">
      <button @click="prevSlide" class="bg-zinc-800 text-white px-2 py-2 rounded-full"><i data-feather="chevron-left"></i></button>
      <button @click="nextSlide" class="bg-zinc-800 text-white px-2 py-2 rounded-full"><i data-feather="chevron-right"></i></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import feather from "feather-icons";

const slides = ref([
  { image: '/static/hero/1.png' },
  { image: '/static/hero/2.png' },
  { image: '/static/hero/3.png' }
])

const currentIndex = ref(0)
const slider = ref(null)
const borderRadiusValue = ref(0)
let autoSlideInterval = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
  updateSlider()
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
  updateSlider()
}

const updateSlider = () => {
  const sliderElement = slider.value
  const slideWidth = sliderElement.clientWidth
  sliderElement.style.transform = `translateX(-${currentIndex.value * slideWidth}px)`
}

const handleResize = () => {
  updateSlider()
}

const handleScroll = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  const scrollFraction = window.scrollY / maxScroll
  borderRadiusValue.value = Math.min(scrollFraction * 640, 640)
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(nextSlide, 3000) // zmiana co 3 sekundy
}

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval)
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll)
  updateSlider()
  feather.replace()
  startAutoSlide()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
  stopAutoSlide()
})
</script>

<style scoped>
</style>
