<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

interface MobileProjectInfo {
  name: string
  website: string
  image: string[]
  details: string
  tools: string[]
}

const props = defineProps<{ info: MobileProjectInfo }>()

onMounted(() => {
  AOS.init({ duration: 900, once: true })
})
</script>

<template>
  <article data-aos="fade-up" class="glass-card overflow-hidden rounded-3xl p-5 sm:p-7">
    <div class="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
      <div>
        <h2 class="text-2xl font-semibold text-white sm:text-3xl">{{ props.info.name }}</h2>
        <p class="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{{ props.info.details }}</p>

        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="tool in props.info.tools"
            :key="tool"
            class="rounded-full border border-cyan-200/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100"
          >
            {{ tool }}
          </span>
        </div>

        <a
          :href="props.info.website"
          target="_blank"
          rel="noopener"
          class="mt-6 inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/40"
        >
          View Project
        </a>
      </div>

      <div class="mx-auto md:mx-0">
        <mobilecarousel :images="props.info.image" />
      </div>
    </div>
  </article>
</template>
