<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find()
)
</script>

<template>
    <h1 class="text-center mb-5 mt-10 md:mt-20 text-7xl font-serif mx-5 md:mx-0">My Blog</h1>       
  <section class="grid md:grid-cols-3 my-8 gap-10">
    <Post :posts="posts" />
  </section>
</template>
