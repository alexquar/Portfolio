<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
import Skill from './skill.vue'

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

onMounted(() => {
  AOS.init({ duration: 900, once: true })
})
</script>

<template>
  <div class="mt-10 md:mt-14">
    <div class="glass-card rounded-3xl p-8" data-aos="fade-up">
      <h1 class="text-4xl font-semibold text-white sm:text-5xl">Technical Stack</h1>
      <p class="mt-4 text-lg text-slate-300">The tools I rely on to ship software, although I have had the priviledge to work with many more than just those listed here</p>
    </div>

    <section class="mt-10 space-y-10">
      <div>
        <h2 class="text-2xl font-semibold text-white">Languages</h2>
        <ul class="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Skill v-for="item in languages" :key="item.name" :name="item.name" :icon="item.icon" />
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-semibold text-white">Frameworks</h2>
        <ul class="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Skill v-for="item in frameworks" :key="item.name" :name="item.name" :icon="item.icon" />
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-semibold text-white">Databases</h2>
        <ul class="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Skill v-for="item in databases" :key="item.name" :name="item.name" :icon="item.icon" />
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-semibold text-white">Tools</h2>
        <ul class="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Skill v-for="item in tools" :key="item.name" :name="item.name" :icon="item.icon" />
        </ul>
      </div>
    </section>
  </div>
</template>
