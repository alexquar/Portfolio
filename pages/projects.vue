<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import { computed, onMounted } from 'vue';
import { useTyping } from '../composables/useTyping'

const { typedText: typedTitle, startTyping } = useTyping('GitHub Ecosystem')

// gql is auto-imported by Nuxt Apollo module, but we define the query here
// If the plugin complains, we use the global declaration
const query = gql`
  {
    viewer {
      repositories(first: 100, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        nodes {
          id
          name
          createdAt
          description
          url
          forks {
            totalCount
          }
          watchers {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

// useAsyncQuery is auto-imported by Nuxt Apollo module
// @ts-ignore
const { data } = await useAsyncQuery(query)

const featuredRepoNames = new Set([
  'Boxscore',
  'CommunoLearn',
  'WhatIsThatDog',
  'Go-Custom-Webserver',
  'Rust-Custom-Webserver',
  'FlappyBot',
  'Neural_Networks',
  'EmeraldCompiler',
  'SmartBackpack',
  'U-Videos',
  'U-shop',
  'U-help',
  'U-fitness',
  'hawkHacks',
  'Diary_App'
])

const repositories = computed(
  () =>
    (((data.value as { viewer?: { repositories?: { nodes?: Array<Record<string, any>> } } } | null)?.viewer?.repositories?.nodes ??
      []) as Array<Record<string, any>>).filter((repo) => featuredRepoNames.has(String(repo.name)))
)

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
          Real-time feed of my active repositories. An overview of my open-source contributions and development patterns.
        </p>
      </div>
      <div class="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]"></div>
    </div>

    <div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="repo in repositories"
        :key="repo.id"
        class="glass-card group flex flex-col justify-between rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
        data-aos="fade-up"
      >
        <div>
          <div class="flex items-center justify-between">
            <div class="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5 transition-all">
              <Icon name="mdi:github" class="text-2xl text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div class="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-400">
              <span class="flex items-center gap-1.5">
                <Icon name="mdi:star-outline" size="1rem" class="text-slate-600 group-hover:text-amber-500" />
                {{ repo.stargazers.totalCount }}
              </span>
              <span class="flex items-center gap-1.5">
                <Icon name="mdi:source-fork" size="1rem" class="text-slate-600 group-hover:text-cyan-400" />
                {{ repo.forks.totalCount }}
              </span>
            </div>
          </div>
          <h2 class="mt-6 text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">{{ repo.name }}</h2>
          <p class="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
            {{ repo.description || 'No description provided.' }}
          </p>
        </div>

        <div class="mt-10 flex items-center justify-between pt-6 border-t border-white/5">
          <span class="text-[10px] font-bold uppercase tracking-widest text-slate-600">
            {{ new Date(repo.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) }}
          </span>
          <a
            :href="repo.url"
            target="_blank"
            rel="noopener"
            class="group/link flex items-center gap-2 text-sm font-bold text-white transition-all hover:text-cyan-400"
          >
            Explore
            <Icon name="heroicons:arrow-right-20-solid" class="transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>
      </article>
    </div>
  </div>
</template>
