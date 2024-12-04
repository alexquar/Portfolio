<script setup>
const query = gql`
  {
    viewer {
      repositories(first: 33, orderBy: { field: CREATED_AT, direction: DESC }) {
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
  <h1 class="text-3xl my-8">Projects</h1>
  <p class="text-lg mb-8">
    Here are some of my projects on
    <a href="https://github.com/alexquar" class="underline text-blue-500"
      >GitHub</a
    >, listed by creation date. Projects range from full stack apps and passion
    projects to smaller concepts pages. Each project is linked. I hope you enjoy
    having a look at my projects!
  </p>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 gap-10">
    <div
      data-aos="fade-up"
      v-for="project in data?.viewer.repositories.nodes"
      :key="project.id"
      class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50"
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
