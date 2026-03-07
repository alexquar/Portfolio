<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import { computed, onMounted } from 'vue';

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
})
</script>

<template>
  <div class="mt-10 md:mt-14">
    <div class="glass-card rounded-3xl p-8" data-aos="fade-up">
      <h1 class="text-4xl font-semibold text-white sm:text-5xl">GitHub Projects</h1>
      <p class="mt-4 text-lg text-slate-300">A collection of my open-source work and repositories.</p>
    </div>

    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="repo in repositories"
        :key="repo.id"
        class="glass-card flex flex-col justify-between rounded-2xl p-6 transition-all hover:border-white/20 hover:bg-white/[0.07]"
        data-aos="fade-up"
      >
        <div>
          <div class="flex items-center justify-between">
            <Icon name="mdi:github" class="text-2xl text-slate-400" />
            <div class="flex gap-3 text-xs text-slate-400">
              <span class="flex items-center gap-1">
                <Icon name="mdi:star-outline" />
                {{ repo.stargazers.totalCount }}
              </span>
              <span class="flex items-center gap-1">
                <Icon name="mdi:source-fork" />
                {{ repo.forks.totalCount }}
              </span>
            </div>
          </div>
          <h2 class="mt-4 text-xl font-semibold text-white">{{ repo.name }}</h2>
          <p class="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">
            {{ repo.description || 'No description provided.' }}
          </p>
        </div>

        <div class="mt-6 flex items-center justify-between">
          <span class="text-xs text-slate-500">
            Updated {{ new Date(repo.createdAt).toLocaleDateString() }}
          </span>
          <a
            :href="repo.url"
            target="_blank"
            rel="noopener"
            class="text-sm font-medium text-sky-400 transition hover:text-sky-300"
          >
            View Repo →
          </a>
        </div>
      </article>
    </div>
  </div>
</template>
