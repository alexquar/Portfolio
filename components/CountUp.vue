<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  value: string
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2000
})

const displayValue = ref('0')
const targetNumber = parseFloat(props.value.replace(/[^0-9.]/g, ''))
const suffix = props.value.replace(/[0-9.]/g, '')

onMounted(() => {
  if (isNaN(targetNumber)) {
    displayValue.value = props.value
    return
  }

  const start = 0
  const end = targetNumber
  const startTime = performance.now()

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    
    // Easing function: easeOutExpo
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
    
    const current = start + (end - start) * easeProgress
    
    if (targetNumber % 1 === 0) {
      displayValue.value = Math.floor(current).toString() + suffix
    } else {
      displayValue.value = current.toFixed(1).toString() + suffix
    }

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
})
</script>

<template>
  <span>{{ displayValue }}</span>
</template>
