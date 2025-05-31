<script setup>
const query = gql`
  {
    viewer {
      repositories(first: 42, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        nodes {
          id
          name
          createdAt
          description
          url
          forks {
            totalCount
          }
          watchers {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);

import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1500, // Duration of the entrance animation (ms)
    once: true, // Run animation only once
  });
});
</script>

<template>
        <h1 class="text-center mb-5 mt-10 md:mt-20 text-7xl font-serif mx-5 md:mx-0">Repositories</h1>       
        <p class="text-lg mb-8">
    Here are some of my projects on
    <a href="https://github.com/alexquar" class="underline animate-pulse text-blue-500"
      >GitHub</a
    >, listed by creation date. Projects range from full stack apps to neural networks to smaller concepts work. Each project is linked in their card. I hope you enjoy
    having a look at my projects!
  </p>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 gap-10">
    <div
      data-aos="fade-up"
      v-for="project in data?.viewer.repositories.nodes"
      :key="project.id"
      class="p-8 border-4 hover:animate-wiggle hover:animate-twice hover:animate-duration-2000 hover:animate-ease-in-out my-4 rounded-lg"
    >
      <a :href="project.url" target="_blank">
        <h2 class="text-2xl text-blue-500 font-semibold mb-2 hover:underline hover:animate-pulse">
          {{ project.name }}
        </h2>
      </a>
      <p>{{ project.description }}</p>
      <p class="mt-3">Created: {{ String(project.createdAt).slice(0, 10) }}</p>
      <div class="mt-4">
        <Icon name="system-uicons:eye" size="1.1rem" class="text-blue-500" />
        Watchers: {{ project.watchers.totalCount }}
      </div>
    </div>
  </section>
</template>
