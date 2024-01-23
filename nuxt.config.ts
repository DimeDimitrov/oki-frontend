// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
  plugins: [
    { src: '~/plugins/chart.js', mode: 'client' },
    { src: '~/plugins/easy-data-table.js', mode: 'client' },
  ],
})
