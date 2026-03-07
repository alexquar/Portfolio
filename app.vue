<template>
  <div class="grid-noise relative flex min-h-screen flex-col text-slate-100">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -left-28 top-20 h-80 w-80 animate-floaty rounded-full bg-cyan-400/15 blur-[120px]"></div>
      <div class="absolute right-0 top-1/3 h-80 w-80 animate-floaty rounded-full bg-sky-500/20 blur-[130px]"></div>
    </div>
    <SiteHeader />
    <main class="relative mx-auto w-full max-w-7xl grow items-start px-4 sm:px-6 lg:px-8">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import hi from './assets/hi.png'

useHead({
  title: 'Alex Quarrie | Software Engineer',
  meta: [
    {
      name: 'description',
      content: 'Software engineering portfolio with full-stack, mobile, and product-focused projects.'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: hi }]
})
</script>
