<template>
  <div
    class="
      container
      mx-auto
      flex flex-col
      text-white
      "
  >
    <h2 class="my-12 text-3xl font-bold text-center">Skontaktuj się ze mną!</h2>
    <p class="text-center text-lg">Napisz do mnie na instagramie lub facebooku!<br> Kliknij ikonę słuchawki lub listu aby skopiować numer telefonu oraz adres email. Możesz też skorzystać z poniższego forumlarza kontaktowego</p>
    <!-- Contact form -->
    <div class="flex flex-col-reverse md:flex-row md:py-10 md:mt-20 relative">
      
      <!-- Circle with "LUB" -->
      <div class="
      hidden
      absolute 
      left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 
      bg-zinc-800 text-white 
      rounded-full 
      h-32 w-32 
      border-2 border-white
      md:flex items-center justify-center 
      text-3xl font-bold 
      z-10"
           >
        LUB
      </div>

      <ContactForm />

      <!-- Contact details -->
      <ContactDetails :contacts="contacts" />
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "INSTAGRAM",
          icon: "instagram",
          url: "https://www.instagram.com/twojprofil",  // Dodaj adres URL
        },
        {
          id: 2,
          name: "FACEBOOK",
          icon: "facebook",
          url: "https://www.facebook.com/twojprofil",  // Dodaj adres URL
        },
        {
          id: 3,
          name: "555 8888 888",
          icon: "phone",
        },
        {
          id: 4,
          name: "galeckadesign@gmail.com",
          icon: "mail",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};

</script>
