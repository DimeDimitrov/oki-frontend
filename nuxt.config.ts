// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/seo',
    'nuxt-gtag',
    '@nuxtjs/i18n',
  ],
  plugins: [
    { src: '~/plugins/chart.js', mode: 'client' },
    { src: '~/plugins/easy-data-table.js', mode: 'client' },
  ],
  gtag: {
    id: "G-J64JSE1X54"
  },
  i18n: {
    defaultLocale: "mk",
    locales: ['mk']
  },
})