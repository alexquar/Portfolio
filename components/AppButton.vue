<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  href?: string
  target?: string
  rel?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  isMagnetic?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  isMagnetic: true
})

const classes = computed(() => {
  const base = 'group inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm font-bold text-white transition-all active:scale-95'
  const variants = {
    primary: 'bg-cyan-500 shadow-lg shadow-cyan-500/20 hover:bg-cyan-400',
    secondary: 'border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10',
    ghost: 'hover:text-cyan-400'
  }
  return [base, variants[props.variant], props.isMagnetic ? 'magnetic-effect' : '']
})
</script>

<template>
  <component
    :is="props.href ? 'a' : 'button'"
    :href="props.href"
    :target="props.target"
    :rel="props.rel"
    :class="classes"
  >
    <slot></slot>
    <div v-if="props.variant === 'primary'" class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
  </component>
</template>
