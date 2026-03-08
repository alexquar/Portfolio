<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, ref } from 'vue'
import { useTyping } from '../composables/useTyping'

const showModal = ref(false)
const { typedText, startTyping } = useTyping('Alex Quarrie', 80)

const topMetrics = [
  { value: '4x', label: 'Internships at Top Companies' },
  { value: '4x', label: 'Outstanding Co-op Ratings' },
  { value: '4x', label: "Dean\'s Honours List" },
  { value: '4.0', label: 'GPA' },
  { value: '10+', label: 'Years Writing Code' },
  { value: '50+', label: 'Respositories created while building and learning' },
  { value: '4', label: 'Core Focuses: Mobile, Full-Stack, Embedded, AI' },
  { value: '∞', label: 'Passion for Building and Learning' }
]

const workExperience = [
  {
    company: "Roo (Internship)",
    role: "Software Engineer",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQEEqHtA8LjCAg/company-logo_100_100/company-logo_100_100/0/1664838001236/roovets_logo?e=1774483200&v=beta&t=mSR7oo_BSGNyxp0LnOWOmoYG0RyyqW5JrwE7COoJVNc",
  }, 
  {
    company: "Deloite (Internship)",
    role: "Software Engineer",
    icon: "https://media.licdn.com/dms/image/v2/C560BAQGNtpblgQpJoQ/company-logo_100_100/company-logo_100_100/0/1662120928214/deloitte_logo?e=1774483200&v=beta&t=cp9habE3mU3rFLnOuZdnEk1DMrvPfvXfptsB_ClqDcM",
  },
  {
    company: "OpenText (Internship)",
    role: "Software Engineer",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQGPd0lmMwrnuA/company-logo_100_100/company-logo_100_100/0/1720445944258/opentext_logo?e=1774483200&v=beta&t=nDJvDxSLzkNE57EaqtXToeN-nRQwNZJj11HYO_-yWv4",
  },
  {
    company: "WSIB (Internship)",
    role: "Software Engineer",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQG5qgocXFUI4Q/company-logo_100_100/company-logo_100_100/0/1727696147867/wsib_logo?e=1774483200&v=beta&t=KVggDZ5je_acfEr4n_Z5PmlO5KBpy57POZxzoqE7uno",
  },
  {
    company: "Watelroo Rocketry (Design Team)",
    role: "Software Engineer",
    icon:"https://media.licdn.com/dms/image/v2/C4D0BAQFgOetarQGJ7Q/company-logo_100_100/company-logo_100_100/0/1631307813876?e=1774483200&v=beta&t=wGqTAN0mA-x0bLQ2PaMTAFY7G_4Ph6ip3_ZoN4d2KUk"
  }
]

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
          I'm a Computer Engineering student at Waterloo. I like building things end-to-end, from backend systems to clean UI/UX. No matter what I'm working on I love creating practical solutions that people actually use.           I am also a huge sports fan, tech enthousiast, chef, movie critic and animal lover. 


        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <button
            class="group magnetic-effect relative overflow-hidden rounded-2xl bg-cyan-500 px-8 py-4 text-sm font-bold text-white transition-all active:scale-95"
            @click="showModal = true"
          >
            <span class="relative z-10">View Resume</span>
            <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
          </button>
          <a
            class="group magnetic-effect rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:border-white/20 hover:bg-white/10 active:scale-95"
            href="/webdev"
          >
            Explore Projects
          </a>
        </div>

      </div>
    </section>

    <section class="mt-12 grid gap-8 lg:grid-cols-3">
      <div class="glass-card tilt-card lg:col-span-2 rounded-3xl p-8 sm:p-10" data-aos="fade-up" data-aos-delay="100">
        <div class="flex items-center gap-3 mb-8">
          <div class="h-8 w-1 bg-cyan-500 rounded-full"></div>
          <h2 class="text-2xl font-bold text-white tracking-tight">Key Metrics</h2>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="item in topMetrics" :key="item.label" class="group flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all hover:bg-white/[0.06] hover:border-white/10">
            <p class="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">{{ item.value }}</p>
            <p class="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-300">{{ item.label }}</p>
          </div>
        </div>
      </div>

      <div class="glass-card tilt-card rounded-3xl p-8 sm:p-10" data-aos="fade-up" data-aos-delay="200">
        <div class="flex items-center gap-3 mb-8">
          <div class="h-8 w-1 bg-sky-500 rounded-full"></div>
          <h2 class="text-2xl font-bold text-white tracking-tight">Experience</h2>
        </div>
        <div class="grid gap-4">
          <div v-for="experience in workExperience" :key="experience.company" class="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:bg-white/[0.06] hover:border-white/10">
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

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-10 backdrop-blur-sm">
          <div class="glass-card relative h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl p-6 shadow-2xl">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h2 class="text-2xl font-bold text-white tracking-tight">Resume</h2>
                <p class="text-sm text-slate-400">For best formatting, use the PDF download.</p>
              </div>
              <button
                class="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-white/30 hover:text-white active:scale-90"
                @click="showModal = false"
                aria-label="Close"
              >
                <Icon name="heroicons:x-mark-20-solid" size="1.5rem" />
              </button>
            </div>
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vTR5rRQJRGxh4hCQFeSb2PJ7AlGrGKKu-VV1cnoz4sa6DyvLGlU6wtdIRD9B0TLWA/pub?embedded=true"
              class="mt-4 h-[72%] w-full rounded-2xl border border-white/5 bg-slate-900/50"
              sandbox="allow-scripts allow-same-origin"
              allowfullscreen
            ></iframe>
            <a
              class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-4 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 active:scale-[0.98]"
              href="https://docs.google.com/document/d/1DpYM3ZNC261ZI3attx_S56qtFXKhqdUw/export?format=pdf"
              target="_blank"
              rel="noopener"
              download
            >
              <Icon name="heroicons:arrow-down-tray-20-solid" />
              Download Resume
            </a>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

