export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    [
      '@nuxtjs/apollo',
      {
        clients: {
          default: {
            tokenName: 'github-token',
            httpEndpoint: 'https://api.github.com/graphql'
          }
        }
      }
    ]
  ],
  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN || ''
  },

  typescript: {
    strict: true,
    typeCheck: false
  },

  compatibilityDate: '2025-08-29'
})
