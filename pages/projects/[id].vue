<script>
import { ref, computed } from 'vue';
import { useExampleStore } from '../../store/example.js';
import { useRoute } from 'vue-router';
import feather from "feather-icons";
import ProjectRelatedProjects from "../../components/projects/ProjectRelatedProjects.vue";

export default {
  scrollToTop: true,
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  components: { ProjectRelatedProjects },
  setup() {
    const store = useExampleStore();
    const route = useRoute();

    const project = computed(() => store.getProjectById(route.params.id));
    const category = computed(() => project.value ? project.value.category : '');

    const currentSlide = ref(0);
    const totalSlides = computed(() => project.value ? project.value.projectImages.length : 0);

    const nextSlide = () => {
      if (currentSlide.value < totalSlides.value - 1) {
        currentSlide.value++;
      } else {
        currentSlide.value = 0;
      }
    };

    const prevSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value--;
      } else {
        currentSlide.value = totalSlides.value - 1;
      }
    };

    return {
      project,
      category,
      currentSlide,
      nextSlide,
      prevSlide,
      totalSlides,
    };
  }
};
</script>

<template>
  <div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div v-if="project">

      <!-- Project info -->
      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details -->
        <div class="w-full sm:w-1/3 text-left">
      <!-- Project heading and meta info -->
      <div>
        <p class="
            font-general-medium
            text-left text-3xl
            sm:text-4xl
            font-bold
            text-white
            mt-0
            mb-7
          ">
          {{ project.title }}
        </p>
        <div class="flex mb-14">

          <div class="flex items-center">
            <i data-feather="tag" class="w-4 h-4 text-white"></i>
            <span class="
                font-general-medium
                ml-2
                leading-none
                text-white
              ">{{ project.tag }}</span>
          </div>
        </div>
      </div>
          <!-- Single project objectives -->
          <div class="mb-7">
            <p class="font-general-medium text-2xl text-white mb-2">O projekcie</p>
            <p class="font-general-regular text-white">{{ project.objectivesDetails }}</p>
          </div>

          <!-- Single project social sharing -->
          <div class="flex items-center justify-between">
            <a href="#" class="text-white flex items-center">
              <i data-feather="instagram" class="mr-2"></i>
              <span class="font-general-medium text-2xl">Sprawdź na INSTA</span>
            </a>
          </div>

        </div>

        <!-- Slider section -->
        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <!-- Slider -->
          <div class="relative max-h-[40rem] overflow-hidden"> <!-- Ustaw maksymalną wysokość slidera -->
            <div class="flex transition-transform duration-500"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div class="w-full flex-shrink-0" v-for="(image, index) in project.projectImages" :key="index">
                <img :src="image" class="rounded-xl cursor-pointer shadow-lg sm:shadow-none w-full h-[40rem] object-cover" />
                <!-- Ustaw maksymalną wysokość obrazów -->
              </div>
            </div>
            <!-- Slider controls -->
            <button @click="prevSlide"
              class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
              &#8592;
            </button>
            <button @click="nextSlide"
              class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
              &#8594;
            </button>
          </div>
        </div>
      </div>

      <!-- Project related projects -->
      <ProjectRelatedProjects :category="category" />
    </div>

    <!-- Load not found components if no project found -->
    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
