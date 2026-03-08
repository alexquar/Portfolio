<script setup lang="ts">
interface Props {
  title: string
  colorClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  colorClass: 'bg-cyan-500'
})
</script>

<template>
  <div class="flex items-center gap-3 mb-8">
    <div :class="['h-8 w-1 rounded-full', props.colorClass]"></div>
    <h2 class="text-2xl font-bold text-white tracking-tight">{{ props.title }}</h2>
  </div>
</template>
