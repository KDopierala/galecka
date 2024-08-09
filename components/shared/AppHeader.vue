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
  <nav id="nav" class="z-50 bg-gradient-to-b from-zinc-800 to-transparent">
    <div class="sm:container sm:mx-auto">
      <!-- Header -->
      <div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
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
              class="text-primary-light focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
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
