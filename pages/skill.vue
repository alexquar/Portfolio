<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li
    class="flex bg-gray-100 bg-opacity-50 rounded-3xl shadow-md 
           p-4 py-6 transform transition hover:scale-110 
           hover:shadow-lg justify-center text-xl items-center my-3"
  >
    <Icon :icon="icon" class="w-8 h-8 mr-3" />
    {{ name }}
  </li>
</template>
