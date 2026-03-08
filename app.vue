<template>
  <div class="grid-noise relative flex min-h-screen flex-col text-slate-100 selection:bg-cyan-500/30">
    <!-- Scroll Progress Bar -->
    <div class="fixed top-0 left-0 right-0 z-[100] h-1 bg-white/5">
      <div ref="scrollBar" class="h-full bg-gradient-to-r from-cyan-500 to-sky-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-150 ease-out" style="width: 0%"></div>
    </div>

    <!-- Custom Cursor -->
    <div ref="cursor" class="custom-cursor hidden lg:block"></div>
    <div ref="follower" class="custom-cursor-follower hidden lg:block"></div>

    <!-- Animated background blobs -->
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="absolute -left-28 top-20 h-[500px] w-[500px] animate-blob rounded-full bg-cyan-500/10 blur-[120px]"></div>
      <div class="absolute right-0 top-1/3 h-[500px] w-[500px] animate-blob animation-delay-2000 rounded-full bg-blue-600/10 blur-[140px]"></div>
      <div class="absolute -bottom-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 animate-blob animation-delay-4000 rounded-full bg-purple-600/10 blur-[120px]"></div>
    </div>
    
    <SiteHeader class="sticky top-0 z-50" />
    <main class="relative mx-auto w-full max-w-7xl grow px-4 py-8 sm:px-6 lg:px-8">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#app'
import { onMounted, onUnmounted, ref } from 'vue'
import hi from './assets/hi.png'

const cursor = ref<HTMLElement | null>(null)
const follower = ref<HTMLElement | null>(null)
const scrollBar = ref<HTMLElement | null>(null)

const updateScroll = () => {
  if (!import.meta.client || !scrollBar.value) return
  
  const winScroll = window.scrollY
  const height = document.documentElement.scrollHeight - window.innerHeight
  const scrolled = height > 0 ? (winScroll / height) * 100 : 0
  scrollBar.value.style.width = scrolled + "%"

  // Parallax background blobs
  const blobs = document.querySelectorAll('.animate-blob')
  blobs.forEach((blob, i) => {
    const el = blob as HTMLElement
    const speed = (i + 1) * 0.05
    el.style.transform = `translate3d(0, ${winScroll * speed}px, 0)`
  })
}

const moveCursor = (e: MouseEvent) => {
  if (!import.meta.client || !cursor.value || !follower.value) return
  
  const x = e.clientX
  const y = e.clientY
  
  // Update CSS variables for glass-card glow effect
  const cards = document.querySelectorAll('.glass-card')
  cards.forEach(card => {
    const el = card as HTMLElement
    const rect = el.getBoundingClientRect()
    const cardX = x - rect.left
    const cardY = y - rect.top
    el.style.setProperty('--mouse-x', `${cardX}px`)
    el.style.setProperty('--mouse-y', `${cardY}px`)
  })

  const target = e.target as HTMLElement | null
  if (!target) return

  const magnetic = target.closest('.magnetic-effect') as HTMLElement | null
  
  if (magnetic) {
    const rect = magnetic.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const pullX = centerX + (x - centerX) * 0.4
    const pullY = centerY + (y - centerY) * 0.4
    
    cursor.value.style.left = `${pullX}px`
    cursor.value.style.top = `${pullY}px`
    follower.value.style.left = `${pullX}px`
    follower.value.style.top = `${pullY}px`
    
    cursor.value.classList.add('cursor-hover')
    follower.value.style.opacity = '0.6'
    
    magnetic.style.transform = `translate3d(${(x - centerX) * 0.25}px, ${(y - centerY) * 0.25}px, 0) scale(1.05)`
  } else {
    cursor.value.style.left = `${x}px`
    cursor.value.style.top = `${y}px`
    follower.value.style.left = `${x}px`
    follower.value.style.top = `${y}px`
    
    if (target.closest('button, a, .glass-card, .tilt-card')) {
      cursor.value.classList.add('cursor-hover')
      follower.value.style.opacity = '0.6'
    } else {
      cursor.value.classList.remove('cursor-hover')
      follower.value.style.opacity = '0.15'
    }
  }
}

// Reset magnetic elements on mouse out
const resetMagnetic = (e: MouseEvent) => {
  if (!import.meta.client) return
  const target = e.target as HTMLElement | null
  if (!target) return
  const magnetic = target.closest('.magnetic-effect') as HTMLElement | null
  if (magnetic) {
    magnetic.style.transform = ''
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseout', resetMagnetic)
    window.addEventListener('scroll', updateScroll)
    updateScroll()
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('mousemove', moveCursor)
    window.removeEventListener('mouseout', resetMagnetic)
    window.removeEventListener('scroll', updateScroll)
  }
})

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