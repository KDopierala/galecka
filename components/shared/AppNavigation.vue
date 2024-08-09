<script>
export default {
  props: ["isOpen"],
  methods: {
    closeMenu() {
      this.$emit('closeMenu');
    },
  },
};
</script>

<template>
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="font-general-regular m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <NuxtLink
      to="/projects"
      class="block text-left text-lg text-primary-light dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
      aria-label="Projects"
      @click="closeMenu"
    >
      Projekty
    </NuxtLink>
    <NuxtLink
      to="/about"
      class="block text-left text-lg text-primary-light dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="About Me"
      @click="closeMenu"
    >
      O mnie
    </NuxtLink>
    <NuxtLink
      to="/contact"
      class="block text-left text-lg text-primary-light dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Contact"
      @click="closeMenu"
    >
      Kontakt
    </NuxtLink>
    <NuxtLink
      to="/offer"
      class="block text-left text-lg text-primary-light dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Offer"
      @click="closeMenu"
    >
      Oferta
    </NuxtLink>
  </div>
</template>

<style scoped>
/* Możesz dodać dodatkowe style jeśli potrzebujesz */
</style>
