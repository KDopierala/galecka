<script>
import { mapState } from 'pinia';
import { useExampleStore } from '@/store/example.js';
import AppNavigation from "./AppNavigation.vue";

export default {
  components: {
    AppNavigation,
  },
  data: () => {
    return {
      isOpen: false,
      modal: false,
    };
  },
  computed: {
    ...mapState(useExampleStore, ['categories']),
  },
  methods: {
    showModal() {
      if (this.modal) {
        document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden");
        this.modal = false;
      } else {
        document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden");
        this.modal = true;
      }
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<template>
  <nav id="nav" class="z-50 sm:bg-gradient-to-b from-zinc-800 to-transparent">
    <div class="sm:container sm:mx-auto">
      <!-- Header -->
      <div class="relative z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        <!-- Header menu links and small screen hamburger menu -->
        <div class="flex justify-between items-center px-6 sm:px-0">
          <!-- Header logos -->
          <div>
            <NuxtLink to="/">
              <img src="/static/logo.png" class="w-12" alt="Light Logo" />
            </NuxtLink>
          </div>

          <!-- Small screen hamburger menu -->
          <div class="sm:hidden">
            <button
              @click="toggleMenu"
              :class="{'translate-y-[160px] bg-gradient border-2 border-white rounded-full': isOpen, 'translate-x-0': !isOpen}"
              class="text-primary-light focus:outline-none transform transition-transform duration-300"
              aria-label="Toggle menu"
            >
              <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Header links -->
        <AppNavigation :isOpen="isOpen" @closeMenu="closeMenu" />

        <!-- Header right section buttons -->
        <div>
          <!-- Add your right section buttons here if needed -->
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
/* CSS for animating the icons */
button svg {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

button svg.v-enter-active, button svg.v-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

button svg.v-enter-from, button svg.v-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
