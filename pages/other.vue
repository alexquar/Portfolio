<script setup lang="ts">
import { OTHER_PROJECTS } from '../constants/portfolio'
</script>

<template>
  <section>
    <PageHeader
      title="Other Projects"
      glow-color="bg-purple-500/10"
    />

    <div class="mt-10 grid gap-8 md:grid-cols-2">
      <article v-for="project in OTHER_PROJECTS" :key="project.name" class="glass-card group flex flex-col justify-between rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
        <div>
          <div class="flex items-start justify-between gap-4">
            <h2 class="text-2xl font-bold text-white transition-colors group-hover:text-purple-400">{{ project.name }}</h2>
            <span class="rounded-xl border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-300">
              {{ project.category }}
            </span>
          </div>

          <p class="mt-5 text-base leading-relaxed text-slate-400">{{ project.details }}</p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span v-for="tool in project.tools" :key="tool" class="rounded-xl border border-white/5 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:border-purple-500/30 group-hover:bg-purple-500/5 group-hover:text-purple-200 transition-colors">
              {{ tool }}
            </span>
          </div>
        </div>

        <AppButton
          :href="project.website"
          target="_blank"
          rel="noopener"
          variant="secondary"
          class="mt-8"
        >
          View Repository
          <Icon name="mdi:github" size="1.2rem" class="text-slate-400" />
        </AppButton>
      </article>
    </div>
  </section>
</template>
