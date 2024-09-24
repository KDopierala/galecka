<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <!-- Kafelek 1 -->
    <div class="flex flex-col items-center p-4 bg-none ">
      <div class="h-[10rem] w-[10rem] md:h-[15rem] md:w-[15rem] rounded-lg overflow-hidden text-gray-500 mb-2">
          <img class="w-full h-full object-cover" src="/static/offer/interior.webp"></img>
      </div>
      <div class="text-md md:text-lg font-semibold text-white text-center my-auto">PROJEKTOWANIE WNĘTRZ</div>
    </div>
    

    <!-- Kafelek 2 -->
    <div class="flex flex-col items-center p-4 bg-none ">
      <div class="h-[10rem] w-[10rem] md:h-[15rem] md:w-[15rem] rounded-lg overflow-hidden text-gray-500 mb-2">
        <img class="w-full h-full object-cover" src="/static/offer/furniture.webp"></img>
      </div>
      <div class="text-md md:text-lg font-semibold text-white text-center my-auto">PROJEKTOWANIE MEBLI NA WYMIAR</div>
    </div>

    <!-- Kafelek 3 -->
    <div class="flex flex-col items-center p-4 bg-none  ">
      <div class="h-[10rem] w-[10rem] md:h-[15rem] md:w-[15rem] rounded-lg overflow-hidden  text-gray-500 mb-2">
        <img class="w-full h-full object-cover" src="/static/offer/documentation.webp"></img>
      </div>
      <div class="text-md md:text-lg font-semibold text-white text-center my-auto">DOKUMENTACJA TECHNICZNA</div>
    </div>

    <!-- Kafelek 4 -->
    <div class="flex flex-col items-center p-4 bg-none ">
      <div class="h-[10rem] w-[10rem] md:h-[15rem] md:w-[15rem] rounded-lg overflow-hidden text-gray-500 mb-2">
        <img class="w-full h-full object-cover" src="/static/offer/manucacturing.webp"></img>
      </div>
      <div class="text-md md:text-lg font-semibold text-white text-center my-auto">RYSUNKI WYKONAWCZE</div>
    </div>

    <!-- Kafelek 5 -->
    <div class="flex flex-col items-center p-4 bg-none ">
      <div class="h-[10rem] w-[10rem] md:h-[15rem] md:w-[15rem] rounded-lg overflow-hidden text-gray-500 mb-2">
          <img class="w-full h-full object-cover" src="/static/offer/functional.webp"></img>
      </div>
      <div class="text-md md:text-lg font-semibold text-white text-center my-auto">UKŁADY FUNKCJONALNE</div>
    </div>

    <!-- Kafelek 6 -->
    <div class="flex flex-col items-center p-4 bg-none ">
      <div class="h-[10rem] w-[10rem] md:h-[15rem] md:w-[15rem] rounded-lg overflow-hidden text-gray-500 mb-2">
          <img class="w-full h-full object-cover" src="/static/offer/3d.webp"></img>
      </div>
      <div class="text-md md:text-lg font-semibold text-white text-center my-auto">WIZUALIZACJE 3D</div>
    </div>

    <!-- Kafelek 7 -->
    <div class="flex flex-col items-center p-4 bg-none ">
      <div class="h-[10rem] w-[10rem] md:h-[15rem] md:w-[15rem] rounded-lg overflow-hidden text-gray-500 mb-2">
          <img class="w-full h-full object-cover" src="/static/offer/arrangement.webp"></img>
      </div>
      <div class="text-md md:text-lg font-semibold text-white text-center my-auto">ARANŻACJE GOTOWYCH PRZESTRZENI</div>
    </div>

    <!-- Kafelek 8 -->
    <div class="flex flex-col items-center p-4 bg-none ">
      <div class="h-[10rem] w-[10rem] md:h-[15rem] md:w-[15rem] rounded-lg overflow-hidden text-gray-500 mb-2">
          <img class="w-full h-full object-cover" src="/static/offer/individual.webp"></img>
      </div>
      <div class="text-md md:text-lg font-semibold text-white text-center my-auto">PROJEKT INDYWIDUALNY</div>
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: 'OfferTiles',
  }
  </script>
  
  <style scoped>
  /* Dostosowanie wielkości kontenera */
  .relative {
    width: 300px; /* Możesz dostosować do preferowanej wielkości */
    height: 200px; /* Możesz dostosować do preferowanej wielkości */
  }
  </style>
  