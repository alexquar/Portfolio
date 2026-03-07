export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  nuxtApp.hook('apollo:auth', ({ token }) => {
    if (typeof runtimeConfig.githubToken === 'string') {
      token.value = runtimeConfig.githubToken
    }
  })
})
