
<template>
    <div class="bg-white py-5">
      <div class="pt-6 grid grid-cols-5 gap-4 place-items-center">
  
        <div class="md:col-span-2 col-span-4 md:border-r md:border-gray-200">
        <!-- Product info -->
        <div class="max-w-2xl px-4 pb-8 pt-10 sm:px-6 place-content-center lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-10 lg:pt-16">
          <div class="lg:col-span-2 lg:pr-8">
            <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ info.name }}</h1>
          </div>
        </div>
  
          <!-- Options -->
          <div class="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
            <!-- Description and details -->
            <div>
              <h3 class="sr-only">Description</h3>
  
              <div class="space-y-6">
                <p class="text-base text-gray-900">{{ info.details }}</p>
              </div>
            </div>
  
            <div class="mt-10">
              <h3 class="text-sm font-medium text-gray-900">Used to make:</h3>
  
              <div class="mt-4">
                <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                  <li v-for="tool in info.tools" :key="tool" class="text-gray-400">
                    <span class="text-gray-600">{{ tool }}</span>
                  </li>
                </ul>
              </div>
            </div>
  
            <div class="mt-10">
              <div class="mt-4 space-y-6 flex justify-center">
                <a :href="info.website"><p class="text-4xl text-gray-900">Take a look here!</p></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-3 hidden md:block">
          <div class="aspect-h-6 aspect-w-5">
            <img :src="info.image.src" :alt="info.image.alt" class="h-full w-full object-cover object-center" />
          </div>
        </div>


        </div>
        </div>
  </template>
  
  <script setup>
  const { info } = defineProps(['info'])
  </script>