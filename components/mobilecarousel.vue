<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ images: string[] }>()
const count = ref(0)

const previous = () => {
  count.value = (count.value - 1 + props.images.length) % props.images.length
}

const next = () => {
  count.value = (count.value + 1) % props.images.length
}
</script>

<template>
  <div class="relative h-[560px] w-[300px] max-w-full">
    <img
      v-if="props.images[count]"
      :key="props.images[count]"
      class="h-full w-full animate-fade rounded-[2.1rem] border border-white/15 object-cover shadow-2xl shadow-slate-950/50"
      :src="props.images[count]"
      alt="Mobile app screenshot"
    />

    <button
      @click="previous"
      class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/70 p-3 text-white backdrop-blur transition-all hover:scale-110 hover:bg-slate-800 active:scale-90"
      aria-label="Previous image"
    >
      <Icon name="heroicons:chevron-left-20-solid" size="1.2rem" />
    </button>

    <button
      @click="next"
      class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/70 p-3 text-white backdrop-blur transition-all hover:scale-110 hover:bg-slate-800 active:scale-90"
      aria-label="Next image"
    >
      <Icon name="heroicons:chevron-right-20-solid" size="1.2rem" />
    </button>
  </div>
</template>
