// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  srcDir: "app/",
  css: ['../assets/css/main.css'],
  modules: ['motion-v/nuxt', '@vueuse/nuxt'],
})