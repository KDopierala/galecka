// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
  devtools: { enabled: true },
  css: ["~/assets/app.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  plugins: [
    { src: '~/plugins/vue-compare-image.js', mode: 'client' },
    { src: '~/plugins/aos.client.ts', mode: 'client' },
  ],
})