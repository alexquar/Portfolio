
<template>
    <div class="bg-white mt-10 md:mt-20">
      <div class="">
        <h1 class="text-center mb-5 text-7xl font-serif mx-5 md:mx-0">My Mobile Apps</h1>       
       <div v-for="info in infos" :key="info.name"> 
        <mobileproj class="my-3" :info="info" />
        <hr class="my-2">
        </div>
        </div>
        </div>
  </template>
  
  <script setup>

  const infos = [
  {
    name: "What's that dog",
    website: 'https://github.com/alexquar/WhatIsThatDog',
    image: ["/mobile/foods.png", "/mobile/fooditem.png", "/mobile/food1.png","/mobile/foodprofile.png"],
    details:
      'Dog breed classifier created with React Native. Users can take a picture of a dog and the app will classify the breed. The app uses a custom trained model with Pytorch to classify the breed. The app also uses a Flask server to handle the image processing.',
    tools: [
      'Expo',
      'React Native',
      "Flask",
      "Pytorch",
      "Numpy",
        "Pandas",
        "Matplotlib",
        "PythonAnywhere (deploy)",
        "Python and TypeScript"
    ],
  },
  {
    name: 'Menu App',
    website: 'https://github.com/alexquar/Mobile-Apps/tree/main/MenuApp',
    image: ["/mobile/foods.png", "/mobile/fooditem.png", "/mobile/food1.png","/mobile/foodprofile.png"],
    details:
      'Food ordering site created with SwiftUI. Users can save their preferences to the app using app storage. Users can add items to their cart and then checkout. Menu Items are fetched from web server using async await.',
    tools: [
      'Swift',
      'SwiftUI',
    ],
  },
  {
    name: 'U Videos',
    website: 'https://github.com/alexquar/U-Videos',
    image: ["/mobile/home.jpg", "/mobile/login.jpg", "/mobile/posts.png","/mobile/search.png","/mobile/submit.png","/mobile/upload.png"],
    details:
      'AI Video sharing app created with React Native. Users can upload videos and view other users videos. Videos and User data are stored on an AppWrite postgresql database and document storage . Features a full authentication system with email verification accomplished through AppWrite.',
    tools: [
      'NativeWindCSS',
      'Expo',
        'React Native',
        'AppWrite',
        'JavaScript and TypeScipt',
    ],
  },{
    name: 'The Local Weather Mobile',
    website: 'https://github.com/alexquar/Mobile-Apps/tree/main/BarcodeScanner',
    image: ["/mobile/weatherhome.png", "/mobile/weatherdark.png"],
    details:
      'Barcode scanning app created with SwiftUI. Users can scan barcodes and use a webviewer to find results. Barcode scanning is done with camera integrations through UIKit.',
    tools: [
      'Swift',
      'SwiftUI',
    ],
  },
  {
    name: 'Barcode Scanner',
    website: 'https://github.com/alexquar/Mobile-Apps/tree/main/weatherApp',
    image: ["/mobile/barcode.png"],
    details:
      'Weather app created with SwiftUI. Users can search for weather in their area and see the forecast for the week. Can be displayed in light/day or dark/night mode.',
    tools: [
      'Swift',
      'SwiftUI',
    ],
  },
]
  </script>