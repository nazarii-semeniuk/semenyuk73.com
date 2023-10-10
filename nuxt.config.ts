// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: 'Nazarii Semeniuk',
      htmlAttrs: {
        lang: 'uk'
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap', rel: 'stylesheet' }
      ]
    }
  },
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: ['uk', 'en'],
    defaultLocale: 'uk',
    strategy: 'prefix_except_default'
  },
  css: [
    '@/assets/scss/style.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/variables.scss";`
        }
      }
    },
  }
})
