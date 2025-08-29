<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blogs').find()
)
</script>

<template>
    <h1 class="text-center mb-5 mt-10 md:mt-20 text-7xl font-serif mx-5 md:mx-0">My Blog</h1>       
  <section class="grid md:grid-cols-3 my-8 gap-10">
    <Post v-if="posts && posts.length > 0" :posts="posts" />
    <p v-else class="col-span-full text-center text-gray-500 text-xl py-10 bg-gray-100 rounded-lg shadow">
      No blog posts available
    </p>
  </section>
</template>
