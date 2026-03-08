<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'nuxt/app'
import { NAVIGATION } from '../constants/portfolio'

const route = useRoute()

const isCurrent = (href: string) => route.path === href
</script>

<template>
  <Disclosure as="nav" class="sticky top-0 z-50 py-4 transition-all duration-300" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="glass-card relative flex h-16 items-center justify-between rounded-2xl px-4 shadow-xl backdrop-blur-xl">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden pl-2">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-xl p-2 text-slate-300 hover:bg-white/10 hover:text-white focus:outline-none transition-colors"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
          <a class="flex flex-shrink-0 items-center gap-3 transition-transform hover:scale-105 magnetic-effect" href="/">
            <img class="block h-9 w-auto" src="../assets/port.png" alt="Portfolio" />
            <span
              class="hidden bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-sm font-bold tracking-[0.2em] text-transparent sm:block uppercase"
            >
              ALEX QUARRIE
            </span>
          </a>

          <div class="hidden sm:block">
            <div class="flex items-center space-x-1">
              <a
                v-for="item in NAVIGATION"
                :key="item.name"
                :href="item.href"
                :class="[
                  isCurrent(item.href)
                    ? 'bg-white/10 text-cyan-400 shadow-inner'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white',
                  'nav-link-underline rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-95',
                ]"
                :aria-current="isCurrent(item.href) ? 'page' : undefined"
              >{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Transition name="dropdown">
      <DisclosurePanel class="sm:hidden">
        <div class="mx-4 mt-2 space-y-1 rounded-2xl border border-white/10 bg-slate-900/90 p-2 backdrop-blur-xl shadow-2xl">
          <DisclosureButton
            v-for="item in NAVIGATION"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              isCurrent(item.href)
                ? 'bg-white/10 text-cyan-400'
                : 'text-slate-300 hover:bg-white/5 hover:text-white',
              'block rounded-xl px-4 py-3 text-base font-bold transition-all active:scale-[0.98]',
            ]"
            :aria-current="isCurrent(item.href) ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Transition>
  </Disclosure>
</template>
