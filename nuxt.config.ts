export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/apollo'
  ],
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN || ''
  },

  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    }
  },
  typescript: {
    strict: true,
    typeCheck: false
  },

  compatibilityDate: '2025-08-29'
})
