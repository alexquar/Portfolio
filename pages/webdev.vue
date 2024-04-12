
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
        <p class="text-7xl text-center
        ">More to come!</p>
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
    website: 'https://umusic-123.web.app/login',
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
  },
  {
    name: 'U Exchange',
    website: 'https://u-exchange.netlify.app/',
    image:  {
        src: uexchange,
        alt: 'U exchange ss',
      },
    details:
      'Exchange rate site built using Next and TailwindCSS. This utilizes CSS3, HTML5, React with JS. This makes use of the currencyapi and allows users to access current and historic data for 100+ curencies. Use instructions available on the home page. ',
    tools: [
      'Next',
      '(React)',
      'TailwindCSS',
      'Currency API',
      'Netlify',
    ],
  },
  {
    name: 'U Weather',
    website: 'https://u-weather-net.web.app/',
    image:  {
        src: uweather,
        alt: 'U weather ss',
      },
    details:
      'Weather app built primarily with Vue and Tailwind hosted on Firebase. Users can search for cities, view their weather currently and in the future. They can then add the location to local storage so that it appears on their home screen. For more hit the + icon on the navbar. ',
    tools: [
      'Vue',
      'TailwindCSS',
      'Openweather API',
      'Mapbox API',
      'Firebase Hosting',
    ],
  },
  {
    name: 'U Chat',
    website: 'https://learning-38e55.web.app/',
    image:  {
        src: uchat,
        alt: 'U chat ss',
      },
    details:
      'Global chatroom application built with Vue and Firebase. Users can login or signup and are then free to access a global chatroom that all authenicated users can send messages to. Date formating is done with date-fns and styling with pure CSS.',
    tools: [
      'Vue',
      'CSS3',
      'Firebase firestore',
      'Firebase Auth',
      'Firebase Hosting',
    ],
  }, {
    name: 'U Passwords',
    website: 'https://u-passwords.web.app/login',
    image:  {
        src: upasss,
        alt: 'U pass ss',
      },
    details:
      'Fully responsive mobile first password management system build with react, bootstrap and firebase. Users can login/signup and then access several tools like customizabled password creation, password evaluation and password sorting/storage. Users can take a generated password straight to testing or storage and can delete saved passwords at any time.',
    tools: [
      'React',
      'Bootstrap',
      'Firebase Firestore',
      'Firebase Auth',
      'Firebase Hosting',
    ],
  },]
  </script>