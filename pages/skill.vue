<script setup lang="ts">
defineProps<{ name: string; icon: string }>()
</script>

<template>
  <li
    class="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white/25"
  >
    <Icon :name="icon" size="1.2rem" class="text-sky-200" />
    {{ name }}
  </li>
</template>
