<script setup lang="ts">
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
  <section class="mt-10 md:mt-16">
    <div class="glass-card rounded-3xl p-8">
      <h1 class="text-4xl font-semibold text-white sm:text-5xl">Other Projects</h1>
      <p class="mt-4 text-lg text-slate-300">Selected systems, ML, and experimental projects beyond web and mobile development.</p>
    </div>

    <div class="mt-10 grid gap-6 md:grid-cols-2">
      <article v-for="project in projects" :key="project.name" class="glass-card rounded-3xl p-6">
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-xl font-semibold text-white">{{ project.name }}</h2>
          <span class="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-slate-300">
            {{ project.category }}
          </span>
        </div>

        <p class="mt-3 text-sm leading-7 text-slate-300">{{ project.details }}</p>

        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="tool in project.tools" :key="tool" class="rounded-full border border-sky-200/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-100">
            {{ tool }}
          </span>
        </div>

        <a :href="project.website" target="_blank" rel="noopener" class="mt-5 inline-flex rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/40">
          View Repository
        </a>
      </article>
    </div>
  </section>
</template>
