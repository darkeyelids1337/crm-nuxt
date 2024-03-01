// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image",'nuxt-icon', '@nuxtjs/tailwindcss','shadcn-nuxt',['@nuxtjs/google-fonts', {
    families: {
      Lato: {
        wght: [300, 400, 700],
        ital: [300]
      },
    },
  },], ],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
})