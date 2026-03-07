<script setup lang="ts">
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
      class="absolute left-2 top-2 rounded-full border border-white/20 bg-slate-950/70 p-2 text-white backdrop-blur transition hover:bg-slate-800"
      aria-label="Previous image"
    >
      <span class="block w-5 text-center text-base font-semibold">&lt;</span>
    </button>

    <button
      @click="next"
      class="absolute right-2 top-2 rounded-full border border-white/20 bg-slate-950/70 p-2 text-white backdrop-blur transition hover:bg-slate-800"
      aria-label="Next image"
    >
      <span class="block w-5 text-center text-base font-semibold">&gt;</span>
    </button>
  </div>
</template>
