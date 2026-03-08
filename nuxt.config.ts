// @ts-ignore - nuxt.config types can be finicky with modules
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/apollo'
  ],
  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // @ts-ignore
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    }
  },

  runtimeConfig: {
    public: {
      githubToken: process.env.GITHUB_TOKEN || ''
    }
  },

  typescript: {
    strict: true,
    typeCheck: false,
    lib: ['ESNext', 'DOM']
  },

  compatibilityDate: '2025-08-29'
})
