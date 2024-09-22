import { defineNuxtPlugin } from '#app';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      duration: 400, // przykładowa konfiguracja
      once: false,    // animacja będzie odtwarzana tylko raz
    });
  });
});
