<script setup lang="ts">
import { onMounted } from 'vue'
import { useTyping } from '../composables/useTyping'
const { typedText: typedTitle, startTyping } = useTyping('Mobile Engineering')

onMounted(() => {
  startTyping()
})

interface MobileProject {
  name: string
  website: string
  image: string[]
  details: string
  tools: string[]
}

const infos: MobileProject[] = [
  {
    name: "What's That Dog",
    website: 'https://github.com/alexquar/WhatIsThatDog',
    image: [
      '/mobile/home.png',
      '/mobile/gryff.png',
      '/mobile/husky.png',
      '/mobile/huskypost.png',
      '/mobile/pug.png',
      '/mobile/socialtop.png',
      '/mobile/socialbottom.png',
      '/mobile/picture.png',
      '/mobile/gryffpresub.png',
      '/mobile/emptysubmit.png'
    ],
    details:
      'Dog breed classifier built with React Native. Users capture a dog image and the app sends it to a Flask API backed by a custom PyTorch model.',
    tools: ['React Native', 'Expo', 'Flask', 'PyTorch', 'Docker', 'AWS', 'TypeScript', 'Python']
  },
  {
    name: 'U Videos',
    website: 'https://github.com/alexquar/U-Videos',
    image: ['/mobile/home.jpg', '/mobile/login.jpg', '/mobile/posts.png', '/mobile/search.png', '/mobile/submit.png', '/mobile/upload.png'],
    details:
      'AI video sharing app built with React Native and Appwrite. Includes authentication, uploads, and feed/discovery views.',
    tools: ['React Native', 'Expo', 'Appwrite', 'NativeWind', 'TypeScript', 'JavaScript']
  },
  {
    name: 'The Local Weather Mobile',
    website: 'https://github.com/alexquar/Mobile-Apps/tree/main/weatherApp',
    image: ['/mobile/weatherhome.png', '/mobile/weatherdark.png'],
    details:
      'Weather app built with SwiftUI featuring search, forecast views, and day/night mode.',
    tools: ['Swift', 'SwiftUI']
  },
  {
    name: 'Menu App',
    website: 'https://github.com/alexquar/Mobile-Apps/tree/main/MenuApp',
    image: ['/mobile/foods.png', '/mobile/fooditem.png', '/mobile/food1.png', '/mobile/foodprofile.png'],
    details:
      'Food ordering app built with SwiftUI and async data fetching, including cart and profile flows.',
    tools: ['Swift', 'SwiftUI']
  }
]
</script>

<template>
  <div >
    <div class="glass-card relative overflow-hidden rounded-3xl p-10 sm:p-12 mb-12">
      <div class="relative z-10 max-w-3xl">
        <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl min-h-[1.2em]">
          {{ typedTitle }}<span class="animate-pulse">|</span>
        </h1>
        <p class="mt-6 text-xl text-slate-400 leading-relaxed">
          Crafting high-performance mobile experiences with React Native and SwiftUI, focusing on native-like feel and seamless system integration.
        </p>
      </div>
      <div class="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]"></div>
    </div>

    <div class="mt-10 space-y-6">
      <div v-for="info in infos" :key="info.name">
        <mobileproj :info="info" />
      </div>
    </div>
  </div>
</template>
