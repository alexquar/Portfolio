<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
import type { MobileProject } from '../types/portfolio'

const props = defineProps<{ info: MobileProject }>()

onMounted(() => {
  AOS.init({ duration: 900, once: true })
})
</script>

<template>
  <article data-aos="fade-up" class="glass-card tilt-card group overflow-hidden rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
    <div class="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
      <div class="order-2 md:order-1">
        <h2 class="text-3xl font-bold text-white transition-colors group-hover:text-cyan-400">{{ props.info.name }}</h2>
        <p class="mt-5 text-base leading-relaxed text-slate-400">{{ props.info.details }}</p>

        <div class="mt-8 flex flex-wrap gap-2">
          <span
            v-for="tool in props.info.tools"
            :key="tool"
            class="rounded-xl border border-white/5 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 transition-colors group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 group-hover:text-cyan-200"
          >
            {{ tool }}
          </span>
        </div>

        <AppButton
          :href="props.info.website"
          target="_blank"
          rel="noopener"
          variant="secondary"
          class="mt-8"
        >
          View Project
          <Icon name="heroicons:arrow-top-right-on-square" size="1.2rem" class="text-slate-400" />
        </AppButton>
      </div>

      <div class="order-1 md:order-2 flex justify-center">
        <mobilecarousel :images="props.info.image" />
      </div>
    </div>
  </article>
</template>
