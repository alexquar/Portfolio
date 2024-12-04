<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

const props = defineProps(['posts']);

// Initialize AOS for entrance animations
onMounted(() => {
  AOS.init({
    duration: 1000, // Duration of the entrance animation (ms)
    once: true, // Run animation only once
  });
});
</script>

<template>
  <div
    v-for="post in props.posts"
    :key="post.slug"
    data-aos="fade-up"
    class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
  >
    <NuxtLink :to="post._path">
      <img
        :src="`/images/blog/${post.cover}`"
        alt="Blog Post Cover Image"
        class="w-full h-48 object-cover"
      />
    </NuxtLink>
    <div class="p-6">
      <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
      <p class="text-gray-700 mb-4">{{ post.description }}</p>
      <NuxtLink
        :to="post._path"
        class="inline-block transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded float-right mb-8"
      >
        Read More
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Define wiggle keyframes */
@keyframes wiggle {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
  75% {
    transform: rotate(-3deg);
  }
}

/* Add hover animation class */
.hover\:wobble:hover {
  animation: wiggle 0.5s ease-in-out;
}
</style>
