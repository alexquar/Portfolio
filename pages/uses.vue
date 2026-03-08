<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
import Skill from '../components/skill.vue'
import { LANGUAGES, FRAMEWORKS, DATABASES, TOOLS, SKILL_SECTIONS } from '../constants/portfolio'

onMounted(() => {
  AOS.init({ duration: 900, once: true })
})
</script>

<template>
  <div>
    <PageHeader
      title="Technical Stack"
    />

    <section class="mt-10 space-y-12">
      <div v-for="section in SKILL_SECTIONS" :key="section.title" data-aos="fade-up">
        <SectionHeader :title="section.title" :color-class="section.color" class="mb-6" />
        <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Skill v-for="item in section.items" :key="item.name" :name="item.name" :icon="item.icon" />
        </ul>
      </div>
    </section>
  </div>
</template>
