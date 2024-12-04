
<template>
    <div class="bg-white mt-10 md:mt-20">
      <div class="">
        <h1 class="text-center mb-5 text-7xl font-serif mx-5 md:mx-0">My Mobile Apps</h1>       
       <div v-for="info in infos" :key="info.name"> 
        <Mobileproj class="my-3"  :info="info"/>
        <hr class="my-2">
        </div>
        </div>
        </div>
  </template>
  
  <script setup>
 import uexchange from '../assets/uexchange.png'
  import uproj from '../assets/uproj.png'
  import helpphoto from '../assets/U-help.png'
  import umusic from '../assets/umusic.png'
  import uweather from '../assets/uweather.png'
  import uchat from '../assets/uchat.png'
  import upasss from '../assets/upass.png'
  import ubooks from '../assets/ubooks.png'
  import uimg from '../assets/uimg.png'
  import ushop from '../assets/ushop.png'
  import ufitness from '../assets/ufitness.png'
  import ufinance from '../assets/ufinance.png'
  import ublog from '../assets/ublog.png'
  import geesespotter from '../assets/geesespotter.png'
  const infos = [{
    name: 'U Fitness',
    website: 'https://github.com/alexquar/U-fitness',
    image: [ufitness],
    details:
      'Fullstack workout creation site built with MERN stack. MongoDB (atlas with mongoose), ExpressJS, ReactJS, NodeJS and JWTs for Auth. Users can signup/login then create exercises with sets/reps and amount to create workouts.',
    tools: [
      'React',
      'Node.Js',
      'Express.Js',
      'MongoDB (Atlas & Mongoose)',
      'JWTS (Auth)',
    ],
  },]
  </script>