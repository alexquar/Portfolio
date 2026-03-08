<script setup lang="ts">
import { onMounted } from 'vue'
import { useTyping } from '../composables/useTyping'

interface Props {
  title: string
  description?: string
  glowColor?: string 
}

const props = defineProps<Props>()

const { typedText, startTyping } = useTyping(props.title)

onMounted(() => {
  startTyping()
})
</script>

<template>
  <div class="glass-card relative overflow-hidden rounded-3xl p-10 sm:p-12 mb-12" data-aos="fade-up">
    <div class="relative z-10 max-w-3xl">
      <h1 class="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
        {{ typedText }}<span class="animate-pulse">|</span>
      </h1>
      
      <p v-if="props.description" class="mt-6 text-xl text-slate-400 leading-relaxed">
        {{ props.description }}
      </p>
    </div>

  </div>
</template>
