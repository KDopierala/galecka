<template>
  <div class="rounded-b-[10rem] relative w-full h-screen overflow-hidden -mt-[86.6px] md:-mt-[112px]"> <!-- Dodajemy -mt dla odpowiedniego marginesu -->
    <div ref="slider" class="flex h-full transition-transform duration-500 ease-in-out">
      <div v-for="(slide, index) in slides" :key="index" class="min-w-full h-full flex items-center justify-center">
        <img :src="slide.image" alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-10"></div> <!-- Ciemny filtr -->
      </div>
    </div>
    <div class="absolute inset-0 flex justify-between items-center p-4">
      <button @click="prevSlide" class="bg-gray-800 text-white px-4 py-2 rounded-full">Prev</button>
      <button @click="nextSlide" class="bg-gray-800 text-white px-4 py-2 rounded-full">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = ref([
  { image: '/static/hero/1.png' },
  { image: '/static/hero/2.png' },
  { image: '/static/hero/3.png' }
])

const currentIndex = ref(0)
const slider = ref(null)

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

// Update slider on window resize
const handleResize = () => {
  updateSlider()
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  updateSlider()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
</style>
