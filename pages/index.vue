<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, ref } from 'vue'

const showModal = ref(false)

const topMetrics = [
  { value: '4x', label: 'Internships at Top Companies' },
  { value: '4x', label: 'Outstanding Co-op Ratings' },
  { value: '4x', label: "Dean\'s Honours List" },
  { value: '4.0', label: 'GPA' },
  { value: '10+', label: 'Years Writing Code' },
  { value: '50+', label: 'Respositories created while building and learning' },
  { value: '4', label: 'Core Focus Areas: Mobile, Full-Stack, Embedded, AI' },
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
})
</script>

<template>
  <div class="relative mt-10 pb-4 md:mt-14">
    <section data-aos="fade-up" class="glass-card relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 lg:px-16">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-400/25 blur-[120px]"></div>
        <div class="absolute right-0 top-6 h-64 w-64 rounded-full bg-sky-500/25 blur-[120px]"></div>
      </div>

      <div class="relative z-10">
        <p class="text-xs uppercase tracking-[0.4em] text-cyan-200">Alex Quarrie</p>
        <h1 class="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Software Engineer, Computer Engineering Student, and Lifelong Builder
        </h1>

        <p class="mt-5  text-lg text-slate-300">
          I'm a Computer Engineering student at Waterloo. I like building things end-to-end, from backend systems to clean UI/UX. No matter what I'm working on I love creating practical solutions that people actually use.
        </p>

        <p class="mt-5 text-lg text-slate-300">
          I am also a huge sports fan, tech enthousiast, chef, movie critic and animal lover. 
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <button
            class="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            @click="showModal = true"
          >
            View Resume
          </button>
          <a
            class="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            href="/webdev"
          >
            Explore Projects
          </a>
        </div>

      </div>
    </section>

    <section class="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="glass-card rounded-3xl p-8" data-aos="fade-up" data-aos-delay="60">
        <h2 class="text-3xl font-semibold text-white">Key Metrics</h2>
        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <div v-for="item in topMetrics" :key="item.label" class="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p class="text-2xl font-semibold text-white">{{ item.value }}</p>
            <p class="mt-1 text-sm text-slate-300">{{ item.label }}</p>
          </div>
        </div>
      </div>

      <div class="glass-card rounded-3xl p-8" data-aos="fade-up" data-aos-delay="120">
        <h2 class="text-2xl font-semibold text-white">My Experience </h2>
        <div class="mt-6 grid gap-3">
          <!-- shows experience + icons  -->
          <div v-for="experience in workExperience" :key="experience.company" class="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div class="h-10 w-10 rounded-full bg-slate-700">
              <!-- Placeholder for company icon -->
              <img v-if="experience.icon" :src="experience.icon" :alt="experience.company + ' logo'" class="h-full w-full object-cover rounded-full" />
            </div>
            <div>
              <p class="font-semibold text-white">{{ experience.role }}</p>
              <p class="text-sm text-slate-300">{{ experience.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-10">
        <div class="glass-card relative h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl p-6">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h2 class="text-2xl font-semibold text-white">Resume</h2>
              <p class="text-sm text-slate-400">For best formatting, use the PDF download.</p>
            </div>
            <button
              class="rounded-full border border-white/10 px-3 py-1 text-xl text-slate-200 transition hover:border-white/30 hover:text-white"
              @click="showModal = false"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vTR5rRQJRGxh4hCQFeSb2PJ7AlGrGKKu-VV1cnoz4sa6DyvLGlU6wtdIRD9B0TLWA/pub?embedded=true"
            class="mt-4 h-[72%] w-full rounded-2xl border border-white/10"
            sandbox="allow-scripts allow-same-origin"
            allowfullscreen
          ></iframe>
          <a
            class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/35 transition hover:bg-sky-400"
            href="https://docs.google.com/document/d/1DpYM3ZNC261ZI3attx_S56qtFXKhqdUw/export?format=pdf"
            target="_blank"
            rel="noopener"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </Teleport>
  </div>
</template>
