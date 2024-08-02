<script>
import { mapState } from 'pinia'
import { useExampleStore } from '@/store/example.js';
import HireMeModal from "../HireMeModal.vue";
import AppNavigation from "./AppNavigation.vue";

export default {
  components: {
    HireMeModal,
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
        // Stop screen scrolling
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal = true;
      }
    },
  },
};
</script>

<template>
  <nav id="nav" class="z-50 bg-gradient-to-b from-zinc-800 to-transparent">
    <div class="sm:container sm:mx-auto ">
    <!-- Header -->
    <div
      class="
        z-10
        max-w-screen-lg
        xl:max-w-screen-xl
        block
        sm:flex sm:justify-between sm:items-center
        py-6
      "
    >
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-6 sm:px-0">
        <!-- Header logos -->
        <div>
          <NuxtLink to="/">
            <img
              src="/static/logo.png"
              class="w-12"
              alt="Light Logo"
            />
          </NuxtLink>
        </div>

        <!-- Theme switcher small screen -->
        <button
          class="
            sm:hidden
            ml-8
            bg-primary-light
            dark:bg-ternary-dark
            px-2
            py-1.5
            sm:px-3 sm:py-2
            shadow-sm
            rounded-xl
            cursor-pointer
          "
        >
          <!-- Dark mode icon -->
        </button>
        <!-- Small screen hamburger menu -->
        <div class="sm:hidden">
        </div>
      </div>

      <!-- Header links -->
      <AppNavigation
      />

      <!-- Header right section buttons -->
      <div
    
      >
        <!-- Hire me button -->
        <div class="font-general-medium hidden md:block">
          <button
            class="
              text-md
              bg-indigo-500
              hover:bg-indigo-600
              text-white
              shadow-sm
              rounded-md
              px-5
              py-2.5
            "
            @click="showModal()"
            aria-label="Hire Me Button"
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>

    <!-- Hire me modal -->
    <HireMeModal
      :showModal="showModal"
      :modal="modal"
      :categories="categories"
      aria-modal="Hire Me Modal"
    />
  </div>
  </nav>
</template>
