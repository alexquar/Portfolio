<script setup lang="ts">
import { onMounted } from 'vue'
import { useTyping } from '../composables/useTyping'
import communoLearn from '../assets/communoLearn.png'
import uwatchlist from '../assets/uwatchlist.png'
import geesespotter from '../assets/geesespotter.png'
import diary from '../assets/diary.png'
import ushop from '../assets/ushop.png'
import helpphoto from '../assets/U-help.png'

const { typedText: typedTitle, startTyping } = useTyping('Web Applications')

onMounted(() => {
  startTyping()
})

interface WebProject {
  name: string
  website: string
  image: {
    src: string
    alt: string
  }
  details: string
  tools: string[]
}

const infos: WebProject[] = [
  {
    name: 'CommunoLearn',
    website: 'https://communo-learn.vercel.app/',
    image: { src: communoLearn, alt: 'CommunoLearn screenshot' },
    tools: ['Next.js', 'TypeScript', 'tRPC', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    details:
      'Collaborative planning and study platform with scheduling, tasks, and shared workspaces. Full-stack architecture with modern TypeScript tooling.'
  },
  {
    name: 'Custom Go Webserver',
    website: 'https://github.com/alexquar/Go-Custom-Webserver',
    image: { src: uwatchlist, alt: 'Go watchlist screenshot' },
    tools: ['Go', 'HTMX', 'SQLite', 'Bootstrap'],
    details:
      'Custom Go webserver with CRUD workflows, cookie-based sessions, and server-rendered UI for a movie watchlist product.'
  },
  {
    name: 'Geese Spotter',
    website: 'https://geesespotter.co',
    image: { src: geesespotter, alt: 'Geese Spotter screenshot' },
    tools: ['React', 'Ruby on Rails', 'PostgreSQL', 'Google Maps API', 'Tailwind CSS'],
    details:
      'Hackathon product for discovering campus activities and social events in real time with map-based interaction.'
  },
  {
    name: 'Diary App',
    website: 'https://github.com/alexquar/Diary_App',
    image: { src: diary, alt: 'U Diary screenshot' },
    tools: ['C#', '.NET', 'SQL Server', 'Entity Framework', 'Razor Pages'],
    details:
      'Diary management application with complete CRUD functionality and a structured backend architecture.'
  },
  {
    name: 'Shopping App',
    website: 'https://github.com/alexquar/U-shop',
    image: { src: ushop, alt: 'U Shop screenshot' },
    tools: ['Nuxt', 'Tailwind CSS', 'Pinia', 'Stripe', 'Firebase'],
    details:
      'E-commerce app featuring authentication, cart state management, and Stripe checkout integration.'
  },
  {
    name: 'Ticketing Service',
    website: 'https://github.com/alexquar/U-help',
    image: { src: helpphoto, alt: 'U Help screenshot' },
    tools: ['Next.js', 'Supabase', 'Tailwind CSS'],
    details:
      'Ticketing system prototype supporting issue creation, prioritization, and owner-managed lifecycle actions.'
  }
]
</script>

<template>
  <div>
    <div class="glass-card relative overflow-hidden rounded-3xl p-10 sm:p-12 mb-12">
      <div class="relative z-10 max-w-3xl">
        <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl min-h-[1.2em]">
          {{ typedTitle }}<span class="animate-pulse">|</span>
        </h1>
        <p class="mt-6 text-xl text-slate-400 leading-relaxed">
          A selection of full-stack projects showcasing my ability to architect scalable systems and craft delightful user interfaces.
        </p>
      </div>
      <div class="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]"></div>
    </div>

    <div class="mt-10 space-y-6">
      <div v-for="info in infos" :key="info.name">
        <Webproj :info="info" />
      </div>
    </div>
  </div>
</template>
