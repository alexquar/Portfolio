<script setup lang="ts">
interface Props {
  title: string
  isOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="props.isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-10 backdrop-blur-sm">
        <div class="glass-card relative h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl p-6 shadow-2xl">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-white tracking-tight">{{ props.title }}</h2>
              <slot name="header-subtitle"></slot>
            </div>
            <button
              class="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-white/30 hover:text-white active:scale-90"
              @click="emit('close')"
              aria-label="Close"
            >
              <Icon name="heroicons:x-mark-20-solid" size="1.5rem" />
            </button>
          </div>
          
          <div class="mt-4 h-[72%] w-full overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50">
            <slot></slot>
          </div>

          <div class="mt-6">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
