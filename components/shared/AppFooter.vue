<template>
  <footer class=" text-white mt-12">
    <div class="w-full px-0 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
      
      <!-- Blok lewy -->
      <div class="flex flex-col items-center lg:items-start w-full lg:w-auto">
        <img src="/static/footer/left.png" alt="First Image" class="rounded-br-lg w-[30rem] h-[15rem] object-cover mb-4 lg:mb-0 lg:mt-0">
        <div class="flex flex-col lg:flex-row items-center lg:items-center lg:space-x-4 m-6">
          <img src="/static/footer/code.png" alt="QR Code" class="w-[10rem] h-[10rem] mb-4 lg:mb-0">
          <div class="text-center text-xl lg:text-left space-y-4 tracking-widest">
            <p>517 371 747</p>
            <p>GAŁECKADESIGN@GMAIL.COM</p>
            <p>ZIELONA GÓRA</p>
          </div>
        </div>
      </div>
      <img src="/static/logo.png" alt="" class="w-32 h-32 mt-auto">
      <!-- Blok prawy -->
      <div class="flex flex-col items-center lg:items-end w-full lg:w-auto justify-between">
        <div class="w-full mt-0 pr-8 text-center text-xl lg:text-right space-y-4 mb-6 tracking-widest">
          <p>WIZUALIZACJE 3D / DOKUMENTACJA TECHNICZNA</p>
          <p>MEBLE NA WYMIAR / PROJEKTOWANIE MEBLI</p>
          <p>KOMPLEKSOWA OPIEKA PROJEKTÓW</p>
        </div>
        <img src="/static/footer/right.jpg" alt="Second Image" class="rounded-tl-lg w-[30rem] h-[15rem] object-cover mt-auto lg:mt-0 lg:mb-0">
      </div>

    </div>
    <div class="text-center">© 2023 GaleckaDesign no i tam jeszcze jakieś pierdoły</div>
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
