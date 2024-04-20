<script setup>
const links = [
  { name: 'GitHub', href: 'https://github.com/alexquar', icon: 'entypo-social:github-with-circle' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/alex-quarrie-81ab3128b/', icon: 'entypo-social:linkedin-with-circle' },
  { name: 'Instagram', href: 'https://www.instagram.com/_alexq_/', icon: 'entypo-social:instagram' }
]
</script>

<template>
  <div>
    <div>
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1f2937" fill-opacity="1" d="M0,256L24,245.3C48,235,96,213,144,181.3C192,149,240,107,288,101.3C336,96,384,128,432,138.7C480,149,528,139,576,149.3C624,160,672,192,720,202.7C768,213,816,203,864,165.3C912,128,960,64,1008,48C1056,32,1104,64,1152,90.7C1200,117,1248,139,1296,149.3C1344,160,1392,160,1416,160L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
    </div>
    <footer class="bg-gray-800">
    <section class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex flex-row">
      <p class="flex-1 mt-3">&copy; Alex Quarrie 2024. All Rights Reserved</p>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
        </a>
      </div>
    </section>
  </footer>
  </div>
</template>