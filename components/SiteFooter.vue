<script setup lang="ts">
const currentYear = new Date().getFullYear()

const links = [
  { name: 'GitHub', href: 'https://github.com/alexquar', icon: 'entypo-social:github-with-circle' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/alex-quarrie-81ab3128b/', icon: 'entypo-social:linkedin-with-circle' },
  { name: 'Instagram', href: 'https://www.instagram.com/_alexq_/', icon: 'entypo-social:instagram' }
]
</script>

<template>
  <footer id="contact" class="relative mt-16 pb-10">
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="glass-card rounded-3xl p-6 sm:p-8">
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-base font-semibold tracking-wide text-white">Alex Quarrie</p>
            <p class="text-sm text-slate-300">Built for strong engineering signal: product thinking, execution speed, and quality.</p>
          </div>

          <div class="flex flex-row items-center gap-3">
            <a
              v-for="link in links"
              :key="link.name"
              :href="link.href"
              target="_blank"
              rel="noopener"
              class="rounded-full border border-white/15 bg-white/5 p-2.5 text-slate-200 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
            >
              <Icon :name="link.icon" size="1.3rem" />
            </a>
          </div>
        </div>

        <div class="mt-6 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
          &copy; {{ currentYear }} Alex Quarrie
        </div>
      </div>
    </section>
  </footer>
</template>
