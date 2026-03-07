<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'nuxt/app'

const route = useRoute()

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Skills', href: '/uses' },
  { name: 'Web Apps', href: '/webdev' },
  { name: 'Mobile Apps', href: '/mobile' },
  { name: 'Other Projects', href: '/other' },
  { name: 'Repositories', href: '/projects' },
]

const isCurrent = (href: string) => route.path === href
</script>

<template>
  <Disclosure as="nav" class="sticky top-0 z-50 mt-4" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="glass-card relative flex h-16 items-center justify-between rounded-2xl px-3">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-400"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
          <a class="flex flex-shrink-0 items-center gap-3" href="/">
            <img class="block h-10 w-auto" src="../assets/port.png" alt="Portfolio" />
            <span
              class="hidden bg-gradient-to-r from-cyan-200 to-sky-300 bg-clip-text text-sm font-semibold tracking-[0.18em] text-transparent sm:block"
            >
              ALEX QUARRIE
            </span>
          </a>

          <div class="hidden sm:block">
            <div class="flex items-center space-x-2">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  isCurrent(item.href)
                    ? 'bg-white/15 text-white'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white hover:-translate-y-0.5',
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                ]"
                :aria-current="isCurrent(item.href) ? 'page' : undefined"
              >{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="mx-4 mt-2 space-y-1 rounded-2xl border border-white/10 bg-slate-900/80 p-2 backdrop-blur-md">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            isCurrent(item.href)
              ? 'bg-white/10 text-white'
              : 'text-slate-300 hover:bg-white/10 hover:text-white',
            'block rounded-xl px-3 py-2 text-base font-medium transition',
          ]"
          :aria-current="isCurrent(item.href) ? 'page' : undefined"
        >{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
