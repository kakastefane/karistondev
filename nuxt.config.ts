// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
  ],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },

  i18n: {
    locales: [
      { code: 'pt', iso: 'pt-BR', name: 'Português', files: ['pt.json'] },
      { code: 'en', iso: 'en-US', name: 'English', files: ['en.json'] },
    ],
    defaultLocale: 'pt',
    strategy: 'no_prefix',
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      title: 'Kariston Dev - Full Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Full Stack Developer especializado em Shopify e WordPress. Desenvolvimento de sites, e-commerces e sistemas personalizados.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: 'Kariston Dev - Full Stack Developer' },
        {
          property: 'og:description',
          content: 'Full Stack Developer especializado em Shopify e WordPress',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
  },
})
