<template>
  <footer class=" text-white mt-12 h-svh sm:h-auto overflow-hidden">
    <div class="w-full h-full px-0 flex flex-col lg:flex-row justify-center items-center lg:space-y-0">
      
      <!-- Blok lewy -->
      <div class="flex flex-col items-center lg:items-start w-full lg:w-auto sm:space-y-4">
        <img data-aos="fade-right" src="/static/footer/left.png" alt="First Image" class="rounded-br-lg w-[30rem] h-[10rem] sm:h-[15rem] object-cover mb-4 lg:mb-0 lg:mt-0">
          <div class="flex flex-col self-start text-center text-lg sm:text-xl lg:text-left sm:space-y-4 tracking-widest ml-2 sm:ml-0" data-aos="fade-up-right">
            <div class="flex flex-row items-center">
              <i data-feather="mail"></i>
              <p class="ml-2">GAŁECKADESIGN@GMAIL.COM</p>
            </div>
            <div class="flex flex-row items-center">
              <i data-feather="phone"></i>
              <p class="ml-2">517 371 747</p>
            </div>
            <div class="flex flex-row items-center">
              <i data-feather="map-pin"></i>
              <p class="ml-2">ZIELONA GÓRA</p>
            </div>
          </div>
      </div>
      <img data-aos="zoom-in" src="/static/logo.png" alt="" class="sm:w-32 sm:h-32 w-16 h-16 mt-auto sm:mx-32 mb-auto">
      <!-- Blok prawy -->
      <div class="flex flex-col items-center lg:items-end w-full lg:w-auto justify-between">
        <div class="w-full mt-0 text-right text-md sm:text-xl lg:text-right sm:space-y-4 mb-6 tracking-widest mr-2 sm:mr-0" data-aos="fade-down-left">
          <p>MEBLE NA WYMIAR / PROJEKTOWANIE MEBLI</p>
          <p>PROJEKTOWANIE WNĘTRZ ZIELONA GÓRA</p>
          <p>KOMPLEKSOWA OPIEKA PROJEKTÓW</p>
        </div>
        <img data-aos="fade-left" src="/static/footer/right.jpg" alt="Second Image" class="rounded-tl-lg w-[30rem] h-[10rem] sm:h-[15rem] object-cover mt-auto lg:mt-0 lg:mb-0">
      </div>
      <div class="text-center sm:hidden">© 2023 GaleckaDesign no i tam jeszcze jakieś pierdoły</div>
    </div>
    <div class="text-center hidden sm:block">© 2023 GaleckaDesign no i tam jeszcze jakieś pierdoły</div>
  </footer>
</template>

<script setup>
// Skrypt setup (jeśli jest potrzebny, na razie puste)
</script>

<style scoped>
/* Opcjonalnie, dodatkowe style */
.rounded-br-lg {
  border-bottom-right-radius: 13rem; /* Adjust the value as needed */
  border-top-left-radius: 0; /* Reset other corners */
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
}

.rounded-tl-lg {
  border-top-left-radius: 13rem; /* Adjust the value as needed */
  border-top-right-radius: 0; /* Reset other corners */
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
