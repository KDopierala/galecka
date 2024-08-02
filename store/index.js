// store/index.ts

import { createPinia } from 'pinia';
import { defineNuxtPlugin } from 'nuxt3';

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.use(pinia);
});