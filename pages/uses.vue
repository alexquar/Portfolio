<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
import Skill from './skill.vue'
import { useTyping } from '../composables/useTyping'

interface SkillItem {
  name: string
  icon: string
}

const languages: SkillItem[] = [
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'Go', icon: 'logos:go' },
  { name: 'Rust', icon: 'logos:rust' },
  { name: 'Java', icon: 'logos:java' },
  { name: 'C++', icon: 'logos:c-plusplus' },
  { name: 'C#', icon: 'logos:c-sharp' },
  { name: 'Swift', icon: 'logos:swift' },
  { name: 'SQL', icon: 'vscode-icons:file-type-sql' },
  { name: 'C', icon: 'logos:c' }, 
]

const frameworks: SkillItem[] = [
  { name: 'React', icon: 'logos:react' },
  { name: 'React Native', icon: 'logos:react' },
  { name: 'Next.js', icon: 'logos:nextjs-icon' },
  { name: 'Vue', icon: 'logos:vue' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Express', icon: 'simple-icons:express' },
  { name: 'Flask', icon: 'simple-icons:flask' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'Prisma', icon: 'logos:prisma' },
  { name: 'tRPC', icon: 'simple-icons:trpc' },
  { name: 'PyTorch', icon: 'logos:pytorch' }
]

const databases: SkillItem[] = [
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'MongoDB', icon: 'logos:mongodb-icon' },
  { name: 'MySQL', icon: 'logos:mysql' },
  { name: 'SQLite', icon: 'logos:sqlite' },
  { name: 'Redis', icon: 'logos:redis' },
  { name: 'Supabase', icon: 'logos:supabase-icon' },
  { name: 'Firebase', icon: 'logos:firebase' }
]

const tools: SkillItem[] = [
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'GitHub', icon: 'logos:github-icon' },
  { name: 'GitHub Actions', icon: 'logos:github-actions' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'Kubernetes', icon: 'logos:kubernetes' },
  { name: 'AWS', icon: 'logos:aws' },
  { name: 'Vercel', icon: 'logos:vercel-icon' },
  { name: 'Netlify', icon: 'logos:netlify' },
  { name: 'Postman', icon: 'logos:postman' },
  { name: 'GraphQL', icon: 'logos:graphql' }
]

const { typedText: typedTitle, startTyping } = useTyping('Technical Stack')

onMounted(() => {
  AOS.init({ duration: 900, once: true })
  startTyping()
})
</script>

<template>
  <div>
    <div class="glass-card relative overflow-hidden rounded-3xl p-10 sm:p-12 mb-12" data-aos="fade-up">
      <div class="relative z-10 max-w-3xl">
        <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl min-h-[1.2em]">
          {{ typedTitle }}<span class="animate-pulse">|</span>
        </h1>
        <p class="mt-6 text-xl text-slate-400 leading-relaxed">
          The tools and technologies I use to build scalable, high-performance software. My stack is focused on type-safety, modularity, and great developer experience.
        </p>
      </div>
      <div class="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]"></div>
    </div>

    <section class="mt-10 space-y-12">
      <div v-for="section in [
        { title: 'Languages', items: languages, color: 'text-cyan-400' },
        { title: 'Frameworks', items: frameworks, color: 'text-blue-400' },
        { title: 'Databases', items: databases, color: 'text-purple-400' },
        { title: 'Tools', items: tools, color: 'text-sky-400' }
      ]" :key="section.title" data-aos="fade-up">
        <div class="flex items-center gap-3 mb-6">
          <div class="h-6 w-1 rounded-full bg-white/20"></div>
          <h2 class="text-2xl font-bold text-white tracking-tight">{{ section.title }}</h2>
        </div>
        <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Skill v-for="item in section.items" :key="item.name" :name="item.name" :icon="item.icon" />
        </ul>
      </div>
    </section>
  </div>
</template>
