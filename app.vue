<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader />
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from 'nuxt/app'
const title = ref('Alex\'s portfolio')
const description = ref('Welcome all to my portfolio!')
const des = ref('This is my personal portfolio where I showcase my projects and skills.')
import hi from './assets/hi.png'
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: hi }]
})
</script>