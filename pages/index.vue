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

const showModal = ref(false);
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
        I have been writing code for over 6 years now and have a plethora of experience through work, design teams, school, independant study, tutoring and personal projects.
      </p>
      <p class="text-lg py-2">
        In my personal life I am a sports fan, tech enthousiast, chef, movie critic and animal lover. My technical interests include full stack development, mobile development and machine learning, but really as long as I am building something cool I am happy!
      </p>
      <p class="text-lg py-2">
        To learn about my skills please view the "Skills" page or my resume linked below. To learn more about my projects take a look at the web apps, mobile apps or repositories pages. 
      </p>
      <p class="text-lg text-center animate-wiggles py-3 my-10">
        <button
          class=" text-white px-4 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 p-2 rounded-full transition"
          @click="showModal = true"
        >
          View My Resume
        </button>
        <Teleport to="body">
          <div
            v-if="showModal"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div class="bg-white rounded-lg h-[90vh] shadow-lg max-w-4xl w-full p-6 relative">
              <!-- title and formatting disclaimer -->
              <h2 class="text-2xl font-bold mb-4">My Resume</h2>
              <p class="text-sm text-gray-500 mb-4">
                (Note: Formatting may vary due to Google Docs embedding, for best experience download the PDF version below)
              </p>
              <button
                class="absolute top-1 right-3  text-gray-500 hover:text-gray-700 text-2xl"
                @click="showModal = false"
                aria-label="Close"
              >
                &times;
              </button>
              <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vTR5rRQJRGxh4hCQFeSb2PJ7AlGrGKKu-VV1cnoz4sa6DyvLGlU6wtdIRD9B0TLWA/pub?embedded=true"
                class="w-full h-[75%] border rounded overflow-auto"
                sandbox="allow-scripts allow-same-origin"
                allowfullscreen
                ></iframe>
                <a
                class="mt-6 text-white px-4 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 p-2 rounded-full transition inline-block text-center"
                href="https://docs.google.com/document/d/1DpYM3ZNC261ZI3attx_S56qtFXKhqdUw/export?format=pdf"
                target="_blank"
                rel="noopener"
                download
                >
                Download Resume
                </a>
            </div>
            
          </div>
          
        </Teleport>
      </p>
    </div>
    <img src="~/assets/hi.png" class="w-1/2  my-auto md:max-w-sm p-8 mx-auto" />
  </section>
  </div>

</template>
