<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, ref } from 'vue'
import { useTyping } from '../composables/useTyping'
import { TOP_METRICS, WORK_EXPERIENCE } from '../constants/portfolio'

const showModal = ref(false)
const { typedText, startTyping } = useTyping('Alex Quarrie', 160)

onMounted(() => {
  AOS.init({ duration: 900, once: true })
  startTyping()
})
</script>

<template>
  <div class="relative pb-4">
    <section data-aos="fade-up" class="glass-card tilt-card relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 lg:px-16">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-400/25 blur-[120px]"></div>
        <div class="absolute right-0 top-6 h-64 w-64 rounded-full bg-sky-500/25 blur-[120px]"></div>
      </div>

      <div class="relative z-10">
        <h1 class="text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl tracking-tight min-h-[1.2em]">
          <span class="text-gradient">{{ typedText }}</span><span class="animate-pulse">|</span>
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
          I'm a Computer Engineering student at Waterloo. I like building things end-to-end, from backend systems to clean UI/UX. No matter what I'm working on I love creating practical solutions that people actually use. I am also a huge sports fan, tech enthousiast, chef, movie critic and animal lover. 
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <AppButton @click="showModal = true">
            View Resume
          </AppButton>
          <AppButton href="/webdev" variant="secondary">
            Explore Projects
          </AppButton>
        </div>

      </div>
    </section>

    <section class="mt-12 grid gap-8 lg:grid-cols-3">
      <div class="glass-card tilt-card lg:col-span-2 rounded-3xl p-8 sm:p-10" data-aos="fade-up" data-aos-delay="100">
        <SectionHeader title="Key Metrics" />
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="item in TOP_METRICS" :key="item.label" class="group flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all hover:bg-white/[0.06] hover:border-white/10">
            <p class="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">{{ item.value }}</p>
            <p class="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-300">{{ item.label }}</p>
          </div>
        </div>
      </div>

      <div class="glass-card tilt-card rounded-3xl p-8 sm:p-10" data-aos="fade-up" data-aos-delay="200">
        <SectionHeader title="Experience" color-class="bg-sky-500" />
        <div class="grid gap-4">
          <div v-for="experience in WORK_EXPERIENCE" :key="experience.company" class="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:bg-white/[0.06] hover:border-white/10">
            <div class="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-slate-800 ring-1 ring-white/10 group-hover:ring-cyan-500/50 transition-all">
              <img v-if="experience.icon" :src="experience.icon" :alt="experience.company" class="h-full w-full object-cover" />
            </div>
            <div class="min-w-0">
              <p class="truncate font-bold text-white group-hover:text-cyan-400 transition-colors">{{ experience.role }}</p>
              <p class="truncate text-xs font-semibold text-slate-400">{{ experience.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <GenericModal
      title="Resume"
      :is-open="showModal"
      @close="showModal = false"
    >
      <template #header-subtitle>
        <p class="text-sm text-slate-400">For best formatting, use the PDF download.</p>
      </template>

      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vTR5rRQJRGxh4hCQFeSb2PJ7AlGrGKKu-VV1cnoz4sa6DyvLGlU6wtdIRD9B0TLWA/pub?embedded=true"
        class="h-full w-full"
        sandbox="allow-scripts allow-same-origin"
        allowfullscreen
      ></iframe>

      <template #footer>
        <AppButton
          href="https://docs.google.com/document/d/1DpYM3ZNC261ZI3attx_S56qtFXKhqdUw/export?format=pdf"
          target="_blank"
          rel="noopener"
          class="w-full"
        >
          <Icon name="heroicons:arrow-down-tray-20-solid" />
          Download Resume
        </AppButton>
      </template>
    </GenericModal>
  </div>
</template>

