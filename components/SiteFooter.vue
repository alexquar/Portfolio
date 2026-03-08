<script setup lang="ts">
const currentYear = new Date().getFullYear();

const links = [
  {
    name: "GitHub",
    href: "https://github.com/alexquar",
    icon: "entypo-social:github-with-circle",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alex-quarrie-81ab3128b/",
    icon: "entypo-social:linkedin-with-circle",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_alexq_/",
    icon: "entypo-social:instagram",
  },
  {
    name: "Email",
    href: "mailto:alexquarrie@gmail.com",
    icon: "entypo:mail",
  }
];
</script>

<template>
  <footer id="contact" class="relative pb-12">
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="glass-card overflow-hidden rounded-3xl p-8 sm:p-10">
        <div
          class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          <div class="max-w-md">
            <p class="text-xl font-bold tracking-tight text-white mb-2">
              &copy; {{ currentYear }} Alex Quarrie
            </p>
          </div>

          <div class="flex flex-row items-center gap-4">
            <a
              v-for="link in links"
              :key="link.name"
              :href="link.href"
              target="_blank"
              rel="noopener"
              class="group magnetic-effect flex items-center justify-center h-12 w-12 rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400"
              :title="link.name"
            >
              <Icon :name="link.icon" size="1.5rem" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
