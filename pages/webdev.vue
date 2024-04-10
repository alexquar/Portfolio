
<template>
    <div class="bg-white py-5">
      <div class="py-6">
        <h1 class="text-center my-5 text-7xl font-serif">My Web-Dev Projects</h1>
        <h3 class="text-center my-5 text-3xl font-sans">Here are some of my projects from large to small featuring a wide variety of strategies and tools all linked to where they are hosted or available on GitHub.</h3>
       
       <div v-for="info in infos" :key="info.name"> 
        <Webproj class="my-3"  :info="info"/>
        <hr class="my-2">
        </div>
        </div>
        <p class="text-7xl
        ">More to come!</p>
        </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import uproj from '../assets/uproj.png'
  import helpphoto from '../assets/U-help.png'
  import umusic from '../assets/umusic.png'
  const infos = [{
    name: 'U Help',
    website: 'https://master--u-help.netlify.app/login',
    image:  {
        src: helpphoto,
        alt: 'U Help ss',
      },
    tools: [
      'React',
      'Next.js',
      'TailwindCSS',
      'Supabase (auth and db)',
      'Netlify',
    ],
    details:
      'Ticketing system built with Next, Tailwind and Supabase, along with some other tools. Users can signup/login and then view other tickets/create tickets. Tickets take a title, body and urgency. Users can delete tickets if they created them. More features to come!',
  },{
    name: 'U Projects',
    website: 'https://u-projects-management.web.app/login',
    image:  {
        src: uproj,
        alt: 'U Projects',
      },
    details:
      'Project Management system built using React and Firebase (auth, storage, firestore). Allows users to login/signup then create projects and add users to them. Users can then comment on these projects. Users can see all online/offline users.',
    tools: [
      'React',
      'Firebase Auth',
      'Firebase Storage',
      'Firebase Firestore',
      'Firebase Hosting',
    ],
  },{
    name: 'U Music',
    website: 'umusic-123.web.app/login',
    image:  {
        src: umusic,
        alt: 'U Music ss',
      },
    details:
      'Music playlist creation and sharing site. Created with vue and firebase (firestore, authentication, storage, hosting). Users can login/signup and then create new playlists and add a cover and description. They can add as many songs as they want. Users view own playlists or go to home page to view public playlists. ',
    tools: [
      'Vue',
      'Firebase Auth',
      'Firebase storage',
      'Firebase Firestore',
      'Firebase Hosting',
    ],
  },]
  </script>