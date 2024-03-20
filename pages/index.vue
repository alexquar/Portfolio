<script setup>
const { data: posts } = await useAsyncData('latest-posts', () =>
  queryContent('/blog')
    .sort({ data: 1 })
    .limit(3)
    .find()
)
</script>

<template>
  <section class="mx-4 md:mx-0 ">
    <h1 class="text-5xl font-bold mt-20">👋🏻 Hey, I'm Alex Quarrie!</h1>
    <p class="text-base text-gray-900 p-2 italic">Computer Engineering Student at the University of Waterloo.</p>
  </section>
  <section class="flex flex-col md:flex-row mx-4 md:mx-0">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">About Me</h2>
      <p class="text-lg py-2">
        I am a passionate Computer Engineering student at the University of Waterloo just outside of my hometown, Cambridge, Ontario. I am a
        hard-working leader who believes in anything can be accomplished with organization, determination and a great deal of collaboration.
      </p>
      <p class="text-lg py-2">
        I have been writing code for over 5 years now and have a plethora of experience throught work, school, independant study, tutoring and personal projects. I love learning new things and I am always looking to experience something new and interesting!
      </p>
      <p class="text-lg py-2">
        In my personal life I am a massive sports fan, tech enthousiast, chef, movie critic and animal lover. My love of sports is for, but not limited to hockey, baseball, football, swimming, golf, frisbee, skiing and more.
        I have two cats named Harry and Hermione and a lovely golden retriever named Gryff. I love to cook anything, and if an idea is given to me I have to give it a try. I love movies so much and some of my personmal favorites are discussed right here on my blog.
      </p>
      <p class="text-lg py-2">
        Valuable technical skills I have include, but are not limited to C/C++/C#, Javascript/TypeScript, Java, Python, HTML, CSS, SCSS/SASS, Bootstrap, Tailwind, Vue, Nuxt, Django, MongoDB, MySQL, GraphQL, Firebase, Git, Github, Netlify.
      </p>
    </div>
    <img src="~/assets/hi.png" class="w-1/2 md:max-w-sm p-8 mx-auto" />
  </section>

  <section class="mb-5 pb-5">
    <h2 class="text-3xl text-center md:text-start font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10">
      <Post :posts="posts" />
    </div>
  </section>
</template>
