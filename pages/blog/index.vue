<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find()
)
</script>

<template>
  <h1 class="text-3xl my-8">Blog Posts</h1>

  I like to write about anything that I am currently working on or really anything that interests me. Take a read...

  <section class="grid md:grid-cols-3 my-8 gap-10">
    <Post :posts="posts" />
  </section>
</template>
