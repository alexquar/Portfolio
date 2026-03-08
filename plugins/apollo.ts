import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  // @ts-ignore - apollo:auth is a hook from the apollo module
  nuxtApp.hook('apollo:auth', (params: any) => {
    const githubToken = runtimeConfig.public.githubToken
    if (typeof githubToken === 'string' && githubToken && params.token) {
      params.token.value = githubToken
    }
  })
})
