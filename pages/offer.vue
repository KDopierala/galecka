<script>
import feather from "feather-icons";

export default {
  name: "Offer",
  scrollToTop: true,
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="container mx-auto">
    <OfferTiles />
    <OfferCards />
  </div>

</template>

<style scoped></style>
