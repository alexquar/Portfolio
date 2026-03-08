<script setup lang="ts">
defineProps<{ name: string; icon: string }>()
</script>

<template>
  <li
    class="group magnetic-effect pulse-hover flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5"
  >
    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
      <Icon :name="icon" size="1.3rem" />
    </div>
    <span class="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{{ name }}</span>
  </li>
</template>
