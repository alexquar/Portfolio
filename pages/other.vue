<script setup lang="ts">
import { onMounted } from 'vue'
import { useTyping } from '../composables/useTyping'
const { typedText: typedTitle, startTyping } = useTyping('Specialized Projects')

onMounted(() => {
  startTyping()
})

interface OtherProject {
  name: string
  website: string
  category: string
  tools: string[]
  details: string
}

const projects: OtherProject[] = [
  {
    name : "SpaSense",
    website: 'https://github.com/alexquar/SpaSense',
    category: 'Embedded / Hardware',
    tools: ['C++', 'ESP32', 'MQTT', 'Go', "SQLite"],
    details: ' IoT hot tub monitor using an ESP32 to collect temperature, pH, and environmental data, transmitting telemetry over Wi-Fi'
  },

  {
    name: 'FlappyBot',
    website: 'https://github.com/alexquar/FlappyBot',
    category: 'Reinforcement Learning',
    tools: ['Python', 'PyTorch', 'Gymnasium'],
    details: 'DQN-based reinforcement learning project with training, evaluation, and replay tooling.'
  },
  {
    name: 'Neural Networks',
    website: 'https://github.com/alexquar/Neural_Networks',
    category: 'Machine Learning',
    tools: ['Python', 'PyTorch', 'NumPy', 'Pandas'],
    details: 'Collection of applied neural network experiments across public datasets.'
  },
  {
    name: 'Emerald Compiler',
    website: 'https://github.com/alexquar/EmeraldCompiler',
    category: 'Systems',
    tools: ['C++'],
    details: 'Compiler implementation project for a custom programming language.'
  },
  {
    name: 'Rust Custom Webserver',
    website: 'https://github.com/alexquar/Rust-Custom-Webserver',
    category: 'Systems',
    tools: ['Rust', 'Concurrency'],
    details: 'Custom multi-threaded webserver built from scratch to understand low-level networking and thread pools.'
  },
  {
    name: 'Embedded Smart Backpack',
    website: 'https://github.com/alexquar/SmartBackpack',
    category: 'Embedded / Hardware',
    tools: ['C++', 'Embedded Systems', 'Hardware Prototyping'],
    details: 'Embedded software and hardware integration project for a smart backpack system.'
  },
]
</script>

<template>
  <section >
    <div class="glass-card relative overflow-hidden rounded-3xl p-10 sm:p-12 mb-12">
      <div class="relative z-10 max-w-3xl">
        <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl min-h-[1.2em]">
          {{ typedTitle }}<span class="animate-pulse">|</span>
        </h1>
        <p class="mt-6 text-xl text-slate-400 leading-relaxed">
          Beyond web and mobile: exploring embedded systems, machine learning, and low-level engineering.
        </p>
      </div>
      <div class="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]"></div>
    </div>

    <div class="mt-10 grid gap-8 md:grid-cols-2">
      <article v-for="project in projects" :key="project.name" class="glass-card group flex flex-col justify-between rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
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

        <a 
          :href="project.website" 
          target="_blank" 
          rel="noopener" 
          class="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
        >
          View Repository
          <Icon name="mdi:github" size="1.2rem" class="text-slate-400" />
        </a>
      </article>
    </div>
  </section>
</template>
