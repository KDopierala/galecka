<script>
import { mapState } from "pinia";
import { useExampleStore } from '@/store/example.js';
import feather from 'feather-icons';

export default {
  data: () => {
    return {
      selectedProject: "",
      searchProject: "",
    };
  },
  computed: {
    ...mapState(useExampleStore, ["projectsHeading", "projectsDescription", "projects"]),
    filteredProjects() {
      if (this.selectedProject) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
  },
  methods: {
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        return item.category === this.selectedProject;
      });
    },
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
    handleProjectFilterChange($event) {
      this.selectedProject = $event;
    }
  },
  mounted() {
    feather.replace();
  },
};
</script>


<template>
  <div class="pt-10 sm:pt-20 md:pt-24">
    <!-- Projects grid header -->
    <div class="text-center">
      <p class="
          font-general-semibold
          text-2xl
          sm:text-5xl
          font-semibold
          mb-2
          text-white
        ">
        {{ projectsHeading }}
      </p>
    </div>

    <!-- Filter and search projects -->
    <div class="mt-8 sm:mt-10">
      <div class="
          flex
          justify-between
          border-b border-primary-light
          dark:border-secondary-dark
          pb-3
          gap-2
        ">
        <ProjectsFilter @dropChange="handleProjectFilterChange" />
      </div>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <div v-for="project in filteredProjects" :key="project.id" class="
          rounded-xl
          hover:shadow-xl
          cursor-pointer
          mb-10
          sm:mb-0
          bg-secondary-light
          dark:bg-ternary-dark
        " aria-label="Single Project">
        <NuxtLink :to="`/projects/${project.id}`">
          <div class="relative overflow-hidden rounded-t-xl group cursor-pointer">
            <!-- Obrazek -->
            <img :src="project.img" :alt="project.title"
              class="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110" />

            <!-- Filtr -->
            <div
              class="absolute inset-0 
            bg-gray-700 bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <!-- Napis "Kuchnia" -->
              <h1 class="text-white text-2xl font-bold">{{ project.title }}</h1>
            </div>
            <!-- Kategoria -->
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-zinc-800 p-2 text-center rounded-t-3xl transition-transform duration-500 ease-in-out group-hover:translate-y-full">
              <span class="font-general-medium text-lg text-white mx-2">{{ project.category }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>




<style lang="scss" scoped></style>
