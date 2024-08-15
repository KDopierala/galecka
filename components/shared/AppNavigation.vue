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
    :class="isOpen ? 'block animation-slideDown' : 'hidden'"
    class="absolute right-0 z-0 border-b-2 border-solid border-white rounded-bl-2xl bg-gradient to-transparent -mt-[62px] px-5
    font-general-regular justify-center items-center
    sm:ml-4 sm:mt-3 sm:flex sm:p-0 sm:bg-none sm:border-none sm:rounded-none sm:relative sm:flex-row sm:items-center sm:justify-end"
  >
    <NuxtLink
      to="/projects"
      class="block text-left text-lg sm:mx-4 mb-2 sm:py-2 text-white hover:-translate-y-1 hover:scale-110"
      aria-label="Projects"
      @click="closeMenu"
    >
      Projekty
    </NuxtLink>
    <NuxtLink
      to="/about"
      class="block text-left text-lg sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 text-white hover:-translate-y-1 hover:scale-110"
      aria-label="About Me"
      @click="closeMenu"
    >
      O mnie
    </NuxtLink>
    <NuxtLink
      to="/contact"
      class="block text-left text-lg sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 text-white hover:-translate-y-1 hover:scale-110"
      aria-label="Contact"
      @click="closeMenu"
    >
      Kontakt
    </NuxtLink>
    <NuxtLink
      to="/offer"
      class="block text-left text-lg sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 text-white hover:-translate-y-1 hover:scale-110"
      aria-label="Offer"
      @click="closeMenu"
    >
      Oferta
    </NuxtLink>
  </div>
</template>

<style scoped>
@keyframes slideDown {
  0% {
    transform: translateY(-30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animation-slideDown {
  animation: slideDown 0.4s ease-in-out;
}

</style>
