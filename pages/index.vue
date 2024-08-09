<script>
import AppBanner from "../components/shared/AppBanner.vue";
import AppOpinions from "../components/shared/AppOpinions.vue";
import Button from "../components/reusable/Button.vue";
export default {
  scrollToTop: true,
  components: { AppBanner, Button, AppOpinions},
};
</script>

<template>
  <div class="">
    <AppBanner/>

    <div class="container mx-auto">
    <ProjectsGrid />
    <!-- View more projects button -->
    <div class="mt-5 sm:mt-14 flex justify-center">
      <NuxtLink
        to="/projects"
        class="
          font-general-medium
          flex
          items-center
          px-6
          py-3
          border-2
          border-[#27272A]
          hover:border-white
          rounded-lg
          shadow-lg
          hover:shadow-xl
          text-white text-lg
          sm:text-xl
          bg-gradient
        "
        aria-label="More Projects"
      >
        <Button title="More Projects" />
      </NuxtLink>
    </div>
    <AppOpinions />
  </div>
</div>

</template>

<style scoped></style>
