<template>
  <div class="relative -my-[90px]  sm:mt-0 pt-32 sm:pt-6 p-6 bg-cover bg-center bg-about sm:bg-transparent sm:flex sm:items-start">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0 hidden sm:block">
      <img src="/static/about.jpg" class="rounded-lg w-full object-cover fade-in" alt="Profile Image" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 sm:ml-8 text-left text-white space-y-6 xl:space-y-4 text-md lg:text-lg 2xl:text-lg relative z-10 fade-in">
      <p class="text-3xl font-bold">Cześć!</p>
      <p>
        Ukończyłam studia z tytułem Architekta Wnętrz na Uniwersytecie Zielonogórskim. Od razu po zakończeniu edukacji,
        podjęłam pracę w zawodzie.
      </p>
      <p>
        Od zawsze czułam w sobie pasję do wnętrz. Pokój w moim rodzinnym domu przechodził wiele transformacji -
        zaczynając od różowych ścian i dodatków jako dziecko, przez przemeblowania, na które
        wpadałam średnio raz w miesiącu, aż do przemalowania wszystkich ścian na kolor musztardowy jako nastolatka.
      </p>
      <p>
        Jestem miłośniczką wszystkich roślin zielonych. Zaczęło się od niewinnych kaktusów, które zawsze prosiły mnie o
        zabranie ich do domu ze sklepowej półki, teraz ciężko o jakieś „wolne miejsce” na nowego kwiatuszka maluszka.
      </p>

      <p>
        Podróże małe i duże - gdy tylko pojawia się pomysł, pakuję walizki! Poznawanie nowych miejsc oraz ludzi pozwala
        mi na odpoczynek, ładowanie baterii i chłonięcie inspiracji. Lokalna kultura i wnętrza pokazują, jak bardzo może
        się różnić podejście do detali.
      </p>
      <p>
        Na koniec coś słodkiego - bo kto nie kocha deserów?! Ja uwielbiam je robić.
        Okazja czy bez okazji, u mnie zawsze znajdzie się coś do kawki. To pozwala mi się zrelaksować i sprawia mi dużą
        radość.
      </p>
    </div>

    <!-- Optional overlay for better readability -->
    <div class="absolute inset-0 bg-black opacity-70 sm:opacity-0"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.bg-about {
  background-image: url('/static/about.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 640px) {
  .bg-about {
    background-image: none;
  }

}
@media (max-width: 640px) {
  .fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s ease-out 0.9s forwards; /* 1s duration, 0.5s delay */
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
}

</style>