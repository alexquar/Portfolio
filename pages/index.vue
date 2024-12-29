<script setup>
const { data: posts } = await useAsyncData('latest-posts', () =>
  queryContent('/blog')
    .sort({ data: 1 })
    .limit(3)
    .find()
)
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
  <div data-aos="fade-up" >
  <section class="mx-4 md:mx-0 ">
    <h1 class="text-5xl font-bold mt-10 md:mt-20">👋🏻 Hey, I'm Alex Quarrie!</h1>
    <p class="text-base text-gray-900 p-2 italic">Computer Engineering Student at the University of Waterloo.</p>
  </section>
  <section class="flex flex-col md:flex-row mx-4 md:mx-0">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">About Me</h2>
      <p class="text-lg py-2">
        I am a passionate Computer Engineering student at the University of Waterloo who is a
        hard-working leader who believes anything can be accomplished with organization, determination and collaboration.
      </p>
      <p class="text-lg py-2">
        I have been writing code for over 5 years now and have a plethora of experience through work, design teams, school, independant study, tutoring and personal projects.
      </p>
      <p class="text-lg py-2">
        In my personal life I am a sports fan, tech enthousiast, chef, movie critic and animal lover. My technical interests include full stack development, mobile development and machine learning.
      </p>
      <p class="text-lg py-2">
        To learn about my skills please view the "Skills" page or my resume linked below. To learn more about my projects take a look at the web apps, mobile apps or repositories pages.
      </p>
      <p class="text-lg text-center animate-wiggles py-3 my-10">
        <a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vTb15Djw-SYk99io1jrWil-gTTHBseXcH1ALEoPjo3Kg3KSiybar_5pjFR11RbqtA/pub" class="bg-gray-900 text-white border-none hover:bg-gray-700 active:bg-gray-500  py-3 px-10 rounded-3xl">My Resume</a>
        
      </p>
    </div>
    <img src="~/assets/hi.png" class="w-1/2  my-auto md:max-w-sm p-8 mx-auto" />
  </section>
  </div>

</template>
