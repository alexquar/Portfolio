
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
        </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import uproj from '../assets/uproj.png'
  import helpphoto from '../assets/U-help.png'
  const infos = [{
    name: 'U Help',
    website: 'https://master--u-help.netlify.app/login',
    image:  {
        src: helpphoto,
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
    tools: [
      'React',
      'Next.js',
      'TailwindCSS',
      'Supabase (auth and db)',
      'Netlify',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
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
      'Firebase storage',
      'Firestore',
    ],
  },{
    name: 'Basic Tee 6-Pack',
    website: '#',
    image:  {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    tools: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },{
    name: 'Basic Tee 6-Pack',
    website: '#',
    image:  {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    tools: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },]
  </script>